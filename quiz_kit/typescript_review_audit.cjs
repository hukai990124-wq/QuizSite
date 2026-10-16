/* Isolated Edge, mocked API endpoints: no real accounts, AI quota or cloud writes. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZBANK_BROWSER_MODULES || process.cwd()]}));
const root=path.resolve(__dirname,'..'),site=path.join(root,'site');
const bank=JSON.parse(fs.readFileSync(path.join(root,'programming/typescript-review.json')));
async function main(){
  const server=http.createServer((req,res)=>{
    const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);
    if ((!file.startsWith(site+path.sep)&&file!==site)||!fs.existsSync(file)){res.writeHead(404);res.end();return;}
    const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css'})[path.extname(target)]||'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=process.env.REVIEW_BASE_URL||`http://127.0.0.1:${server.address().port}`;
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try{
    const context=await browser.newContext();let payload,calls=0;
    const status={configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10};
    await context.route('**/api/**',route=>{
      const name=new URL(route.request().url()).pathname;
      if(name==='/api/chat'){calls++;payload=route.request().postDataJSON();return route.fulfill({json:{...status,answer:'This is a mocked review explanation.',truncated:false}});}
      return route.fulfill({json:name==='/api/auth/me'?{user:null}:status});
    });
    await context.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
    await page.goto(base+'/');await page.locator('[data-site="programming-typescript"]').click();
    await page.waitForSelector('#q30 .qb-question-chat');
    assert.equal(await page.locator('.q').count(),30);assert.equal(await page.locator('.opt').count(),120);
    assert.equal(await page.locator('.q img,.q iframe,.q input').count(),0);
    assert.equal(await page.locator('.qb-sitebar').evaluate(el=>getComputedStyle(el).backgroundColor),'rgb(117, 21, 42)');
    const first=page.locator('#q1');
    for(const [index,q] of bank.entries())assert.equal(await page.locator(`#q${index+1} .review-code code`).textContent(),q.code);
    for(const [language,title] of [['zh','TypeScript 入门 · 代码审查训练'],['en','TypeScript basics · Code review practice'],['ja','TypeScript入門・コードレビュー演習']]){
      await page.locator(`[data-set-lang="${language}"]`).click();assert.equal(await page.locator('h1').textContent(),title);
      for(const lang of ['en','zh','ja']){
        assert.equal(await first.locator(`.stem p[lang="${lang}"]`).isVisible(),lang===language);
        assert.equal(await first.locator(`.opt-lang[lang="${lang}"]`).first().isVisible(),lang===language);
      }
    }
    await first.locator('[data-letter="A"] button').focus();await page.keyboard.press('Enter');
    assert.equal(await first.locator('.opt.sel').getAttribute('data-letter'),'A');
    assert.equal(await first.evaluate(el=>el.classList.contains('done')),false);
    await first.locator('.js-submit').click();assert.equal(await first.evaluate(el=>el.classList.contains('wrong')),true);
    await first.locator('.js-redo').click();
    for(const [index,q] of bank.entries()){
      const card=page.locator('#q'+(index+1));await card.locator(`[data-letter="${q.answer}"] button`).click();
      await card.locator('.js-submit').click();
      assert.equal(await card.locator('.opt.ok').getAttribute('data-letter'),q.answer);
    }
    for(const language of ['zh','en','ja']){
      await page.locator(`[data-set-lang="${language}"]`).click();
      for(const lang of ['en','zh','ja'])assert.equal(await first.locator(`.expl p[lang="${lang}"]`).first().isVisible(),lang===language);
    }
    assert.equal(await page.locator('#s-ok').textContent(),'30');
    await page.reload();await page.waitForSelector('#q30 .qb-question-chat');
    assert.equal(await page.locator('#s-ok').textContent(),'30');
    await page.locator('#btn-report').click();assert.equal(await page.locator('#rp-pct').textContent(),'100%');
    assert.equal(await page.locator('.qb-report-home').getAttribute('href'),'/');await page.locator('#rp-close').click();
    await first.locator('.qb-question-chat').click();
    assert.equal(await page.locator('#qb-chat-question option').count(),31);
    assert.equal(await page.locator('#qb-chat-question').inputValue(),'q1');
    await page.locator('#qb-chat-send').click();await page.waitForSelector('.qb-chat-message--assistant');
    assert.ok(payload.context.includes(bank[0].code));
    for(const option of bank[0].options)assert.ok(payload.context.includes(option.en));
    await page.locator('#qb-chat-close').click();
    for(const width of [320,768,1024,1440]){
      await page.setViewportSize({width,height:900});await page.locator('h1').scrollIntoViewIfNeeded();
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      if([320,1440].includes(width))await page.screenshot({path:path.join(root,`fe/shots/typescript-review-${width}.png`)});
    }
    await page.goto(base+'/');
    assert.match(await page.locator('[data-site="programming-typescript"] .pg span').textContent(),/30\/30/);
    assert.match(await page.locator('#ov-txt').textContent(),/30 \/ 5199/);
    for(const language of ['zh','en','ja']){
      await page.locator(`[data-set-lang="${language}"]`).click();
      assert.ok((await page.locator('[data-site="programming-typescript"] .sd').textContent()).includes('30'));
    }
    assert.equal(calls,1);assert.deepEqual(errors,[]);
    console.log('TypeScript review passed: 30/120, inert code, red theme, 3 languages, keyboard/redo, scoring/reload/report, AI context, 4 widths, home progress.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
