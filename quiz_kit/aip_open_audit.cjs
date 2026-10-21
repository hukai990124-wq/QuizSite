/* Isolated Edge; no actual AI quota, registration, or cloud progress writes. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZSITE_BROWSER_MODULES||process.cwd()]}));
const root=path.resolve(__dirname,'..'),site=path.join(root,'site');
const bank=JSON.parse(fs.readFileSync(path.join(root,'aws-aip/data/open-questions.json')));
async function main(){
  const server=http.createServer((req,res)=>{
    const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);
    if((!file.startsWith(site+path.sep)&&file!==site)||!fs.existsSync(file)){res.writeHead(404);res.end();return;}
    const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.txt':'text/plain'})[path.extname(target)]||'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=process.env.AIP_BASE_URL || `http://127.0.0.1:${server.address().port}`;
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try{
    const ctx=await browser.newContext();let calls=0,payload;
    const status={configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10};
    await ctx.route('**/api/**',route=>{
      const name=new URL(route.request().url()).pathname;
      if(name==='/api/chat'){calls++;payload=route.request().postDataJSON();return route.fulfill({json:{...status,answer:'Mock explanation.',truncated:false}});}
      return route.fulfill({json:name==='/api/auth/me'?{user:null}:status});
    });
    await ctx.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page=await ctx.newPage(),errors=[],failed=[];page.on('pageerror',e=>errors.push(e.message));
    page.on('response',response=>{if(response.status()>=400)failed.push(response.url());});
    for(const tier of ['easy','hard','veryhard']){
      const selected=bank.filter(q=>q.tier===tier);
      for(let offset=0;offset<selected.length;offset+=50){
        const part=String(offset/50+1).padStart(2,'0'),chunk=selected.slice(offset,offset+50);
        await page.goto(`${base}/aws-aip/open-${tier}/part${part}.html`);
        await page.waitForSelector(`#q${chunk.length} .qb-question-chat`);
        assert.equal(await page.locator('.q').count(),chunk.length);
        const first=page.locator('#q1');
        for(const language of ['zh','en','ja']){
          await page.locator(`[data-set-lang="${language}"]`).click();
          assert.equal(await first.locator('.stem .en').isVisible(),true);
          assert.equal(await first.locator('.stem .zh').isVisible(),language==='zh');
          assert.equal(await first.locator('.ja').count(),0);
        }
        for(const width of [320,768,1024,1440]){
          await page.setViewportSize({width,height:900});
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${tier}/${part}/${width}`);
        }
        for(const [i,q] of chunk.entries()){
          const card=page.locator('#q'+(i+1));
          for(const letter of q.answer)await card.locator(`[data-letter="${letter}"]`).click();
          await card.locator('.js-submit').click();
          assert.equal(await card.locator('.opt.ok').count(),q.answer.length,q.id);
        }
        assert.equal(await page.locator('#s-ok').textContent(),String(chunk.length));
        await page.reload();await page.waitForSelector(`#q${chunk.length} .qb-question-chat`);
        assert.equal(await page.locator('#s-ok').textContent(),String(chunk.length));
        await page.locator('#btn-report').click();assert.equal(await page.locator('#rp-pct').textContent(),'100%');
        assert.equal(await page.locator('.qb-report-home').getAttribute('href'),'/');await page.locator('#rp-close').click();
        if(tier==='easy'&&offset===0){
          await first.locator('.qb-question-chat').click();assert.equal(await page.locator('#qb-chat-question option').count(),51);
          await page.locator('#qb-chat-send').click();await page.waitForSelector('.qb-chat-message--assistant');
          for(const option of chunk[0].options)assert.ok(payload.context.includes(option.en));
          assert.ok(payload.context.includes('Reference answer: '+chunk[0].answer.join(',')));
          await page.locator('#qb-chat-close').click();await page.locator('[data-set-lang="zh"]').click();
          for(const width of [320,1440]){
            await page.setViewportSize({width,height:900});await page.locator('h1').scrollIntoViewIfNeeded();
            await page.screenshot({path:path.join(root,`fe/shots/aip-open-${width}.png`)});
          }
        }
        console.log(`Verified ${tier}/${part}: ${chunk.length} questions graded and restored.`);
      }
    }
    await page.goto(base+'/');
    assert.match(await page.locator('[data-site="aws-aip"] .pg span').textContent(),/442\/578/);
    assert.match(await page.locator('#ov-txt').textContent(),/442 \/ 5641/);
    await page.locator('[data-site="aws-aip"]').click();
    assert.equal(await page.locator('[data-quiz-key^="aws:aip:"]').count(),13);
    for(const lang of ['zh','en','ja']){
      await page.locator(`[data-set-lang="${lang}"]`).click();
      assert.ok((await page.locator('main > .sub').first().textContent()).includes('578'));
      assert.equal(await page.locator('a[href*="pool=aws-aip"]').isVisible(),true,`Random link survives ${lang}`);
    }
    await page.locator('a[href*="pool=aws-aip"]').click();await page.waitForSelector('.exam-notice');
    assert.equal(await page.locator('.q').count(),50);
    assert.ok(await page.locator('.q[data-source-id]').count()>0);
    assert.equal(await page.locator('details.ans:visible,.qb-question-chat').count(),0);
    page.once('dialog',d=>d.accept());await page.locator('#btn-report').click();
    assert.equal(await page.locator('html').getAttribute('data-exam-status'),'submitted');
    assert.equal(await page.locator('.qb-question-chat').count(),50);
    assert.equal(calls,1);assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
    console.log('Open AIP passed: all 442 graded/reloaded; 10 papers; bilingual/JA fallback; AI context; mobile; aggregate progress; random exam.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
