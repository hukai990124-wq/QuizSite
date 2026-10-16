/* Isolated browser with mocked account/chat endpoints: no real quota or cloud writes. */
const fs=require('node:fs'), path=require('node:path'), http=require('node:http'), assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZBANK_BROWSER_MODULES || process.cwd()]}));
const site=path.resolve(__dirname,'../site');
const bank=JSON.parse(fs.readFileSync(path.resolve(__dirname,'../aws-aip/data/questions.json')));
async function main(){
  const server=http.createServer((req,res)=>{
    const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);
    if ((!file.startsWith(site+path.sep) && file!==site) || !fs.existsSync(file)){res.writeHead(404);res.end();return;}
    const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css'})[path.extname(target)] || 'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=process.env.AIP_BASE_URL || `http://127.0.0.1:${server.address().port}`;
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try{
    const context=await browser.newContext();let payload,aiCalls=0;
    const status={configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10};
    await context.route('**/api/**',route=>{
      const name=new URL(route.request().url()).pathname;
      if(name==='/api/chat'){payload=route.request().postDataJSON();aiCalls++;return route.fulfill({json:{...status,answer:'Test explanation.',truncated:false}});}
      return route.fulfill({json:name==='/api/auth/me'?{user:null}:status});
    });
    await context.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page=await context.newPage(), errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    for(const [part,total] of [[1,50],[2,50],[3,36]]){
      await page.goto(`${base}/aws-aip/part0${part}.html`);
      await page.waitForSelector(`#q${total} .qb-question-chat`);
      assert.equal(await page.locator('.q').count(),total);
      const first=page.locator('#q1');
      for(const language of ['zh','ja','en']){
        await page.locator(`[data-set-lang="${language}"]`).click();
        for(const region of ['.stem','.otext'])for(const lang of ['en','zh','ja']){
          assert.equal(await first.locator(`${region} .${lang}`).first().isVisible(),lang==='en'||lang===language);
        }
      }
      for(const width of [320,768,1024,1440]){
        await page.setViewportSize({width,height:900});
        const overflow=await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(el=>el.scrollWidth>el.clientWidth+1 && el.getBoundingClientRect().height>0).slice(-10).map(el=>`${el.tagName}.${el.className}: ${el.clientWidth}/${el.scrollWidth}`));
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`overflow ${part}/${width}: ${overflow.join('; ')}`);
      }
      await page.locator('[data-set-lang="zh"]').click();
      // Keyboard selection must not trigger immediate grading in the shared engine.
      await first.locator(`[data-letter="${bank[(part-1)*50].answer[0]}"]`).focus();
      await page.keyboard.press('Enter');
      assert.equal(await first.locator('.opt.sel').count(),1);
      assert.equal(await first.evaluate(el=>el.classList.contains('done')),false);
      for(let local=1;local<=total;local++){
        const q=page.locator('#q'+local), record=bank[(part-1)*50+local-1];
        for(const letter of record.answer){
          const choice=q.locator(`[data-letter="${letter}"]`);
          if(await choice.getAttribute('aria-checked')!=='true')await choice.click();
        }
        await q.locator('.js-submit').click();
        assert.equal(await q.locator('.opt.ok').count(),record.answer.length,record.id);
        assert.equal(await q.locator('[aria-checked="true"]').count(),record.answer.length,record.id+' checked');
      }
      assert.equal(await page.locator('#s-ok').textContent(),String(total));
      await page.reload();await page.waitForSelector(`#q${total} .qb-question-chat`);
      assert.equal(await page.locator('#s-ok').textContent(),String(total));
      await page.locator('#btn-report').click();
      assert.equal(await page.locator('#rp-pct').textContent(),'100%');
      assert.equal(await page.locator('.qb-report-home').getAttribute('href'),'/');
      await page.locator('#rp-close').click();
      if(part===1){
        await first.locator('.qb-question-chat').click();
        assert.equal(await page.locator('#qb-chat-question option').count(),51);
        assert.equal(await page.locator('#qb-chat-question').inputValue(),'q1');
        await page.locator('#qb-chat-send').click();
        await page.waitForSelector('.qb-chat-message--assistant');
        assert.ok(payload.context.includes('Amazon Bedrock'));
        assert.ok(payload.context.includes('C'));
        await page.locator('#qb-chat-close').click();
        for(const width of [320,1440]){
          await page.setViewportSize({width,height:900});await page.locator('h1').scrollIntoViewIfNeeded();
          await page.screenshot({path:path.resolve(__dirname,`../fe/shots/aip-${width}.png`)});
        }
      }
    }
    await page.goto(base+'/');
    assert.match(await page.locator('[data-site="aws-aip"] .pg span').textContent(),/136\/136/);
    assert.match(await page.locator('#ov-txt').textContent(),/136 \/ 5162/);
    await page.goto(base+'/aws-aip/index.html');
    assert.equal(await page.locator('[data-quiz-key^="aws:aip:"]').count(),3);
    for(const lang of ['en','ja','zh']){
      await page.locator(`[data-set-lang="${lang}"]`).click();
      const range=await page.locator('.card .r').first().textContent();
      assert.ok(range.includes(lang==='en'?'questions':lang==='ja'?'問':'题'));
    }
    await page.locator('a[href*="pool=aws-aip"]').click();
    await page.waitForSelector('.exam-notice');
    assert.equal(await page.locator('.q').count(),50);
    assert.equal(await page.locator('html').getAttribute('data-exam-status'),'pending');
    assert.equal(await page.locator('details.ans:visible,.qb-question-chat').count(),0);
    page.once('dialog',dialog=>dialog.accept());await page.locator('#btn-report').click();
    assert.equal(await page.locator('html').getAttribute('data-exam-status'),'submitted');
    assert.equal(await page.locator('.q .qb-question-chat').count(),50);
    assert.equal(aiCalls,1,'only the mocked AI call should occur');
    assert.deepEqual(errors,[]);
    console.log('AIP audit passed: 136 scored/reloaded; multi-select/keyboard; three languages; 4 widths; AI selection; home progress; random exam.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
