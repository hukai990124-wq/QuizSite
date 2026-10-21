/* Real isolated browser; no real accounts, AI requests or cloud progress writes. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site=path.resolve(__dirname,'../site');
async function main(){
  const server=http.createServer((req,res)=>{
    const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);
    if ((!file.startsWith(site+path.sep) && file!==site) || !fs.existsSync(file)){res.writeHead(404);res.end();return;}
    const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.mp3':'audio/mpeg'})[path.extname(target)]||'application/octet-stream');
    fs.createReadStream(target).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base=`http://127.0.0.1:${server.address().port}`;
  const browser=await chromium.launch({headless:true,channel:'msedge'});
  try{
    for(const [pool,size,quotas] of [['aws-clf',50],['aws-aif',50],['aws-saa',50],['toeic-listening',50,[3,14,18,15]],['toeic-listening',100,[6,25,39,30]],['toeic-reading',50,[15,8,27]],['toeic-reading',100,[30,16,54]]]){
      const ctx=await browser.newContext();let aiCalls=0;
      await ctx.route('**/api/**',route=>{
        const name=new URL(route.request().url()).pathname;
        if(name==='/api/chat') aiCalls++;
        return route.fulfill({json:name==='/api/auth/me'?{user:null}:{configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10}});
      });
      await ctx.routeWebSocket('**/api/presence**',socket=>socket.close());
      if(pool==='aws-clf')await ctx.route('**/aws-clf/part*.html',async route=>{
        await new Promise(resolve=>setTimeout(resolve,1200));await route.continue();
      });
      const page=await ctx.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
      await page.goto(`${base}/random.html?pool=${pool}&size=${size}&seed=12345678`);
      await page.waitForSelector('.exam-notice');
      await page.waitForSelector('.qb-chat-trigger',{state:'attached',timeout:7000});
      assert.equal(await page.locator('.q').count(),size);
      assert.equal(await page.locator('html').getAttribute('data-exam-status'),'pending');
      assert.equal(await page.locator('.qb-chat-trigger').isVisible(),false);
      assert.equal(await page.locator('.qb-question-chat').count(),0);
      assert.equal(await page.locator('details.ans:visible,.verdict:visible').count(),0);
      await page.emulateMedia({media:'print'});
      assert.equal(await page.locator('details.ans:visible').count(),0,'print cannot reveal solutions');
      await page.emulateMedia({media:'screen'});
      if(pool==='aws-clf')await page.screenshot({path:path.resolve(__dirname,'../question-banks/fe/shots/random-exam-pending.png')});
      if(quotas){
        const actual=await page.locator('.wrap > h2').evaluateAll(headings=>headings.map(h=>{let count=0;for(let n=h.nextElementSibling;n&&n.tagName!=='H2';n=n.nextElementSibling)count+=n.matches('.q')?1:n.querySelectorAll('.q').length;return count;}));
        assert.deepEqual(actual,quotas);
      }
      const q1=page.locator('.q').nth(0),q2=page.locator('.q').nth(1);
      if(await q1.locator('.opt').count()){
        await q1.locator('.opt').first().focus();await page.keyboard.press('Enter');
        assert.equal(await q1.locator('.opt.sel').count(),1);
      }else await q1.locator('input.fill').fill('draft');
      assert.equal(await page.locator('.q.done,.q.wrong,.opt.ok,.opt.bad,.opt.miss').count(),0);
      await page.locator('#btn-sheet').click();
      assert.equal(await page.locator('#sheet .grid a.exam-answered').count(),1);
      assert.equal(await page.locator('#sheet .grid a.ok,#sheet .grid a.bad').count(),0);
      await page.locator('#sh-close').click();
      page.once('dialog',d=>d.dismiss());await page.locator('#btn-report').click();
      assert.equal(await page.locator('html').getAttribute('data-exam-status'),'pending');
      await page.reload();await page.waitForSelector('.exam-notice');
      assert.equal(await page.locator('#s-done').textContent(),'1');
      assert.equal(await page.locator('details.ans:visible,.qb-question-chat').count(),0);
      async function choose(q,correct){
        const answer=(await q.getAttribute('data-ans')).split(/[,|]/).map(s=>s.trim().toUpperCase());
        if(await q.getAttribute('data-kind')==='fill'){await q.locator('input.fill').fill(correct?answer[0]:'deliberately wrong');return;}
        if(answer.length>1){for(const selected of await q.locator('.opt.sel').all())await selected.click();}
        let letters=correct?answer:await q.locator('.opt').evaluateAll(options=>options.map(el=>el.dataset.letter));
        if(!correct)letters=[letters.find(value=>!answer.includes(value))||answer[0]];
        for(const letter of letters)await q.locator(`[data-letter="${letter}"]`).click();
      }
      await choose(q1,true);await choose(q2,false);
      for(const [lang,title] of [['en','Random exam'],['ja','ランダム試験'],['zh','随机考试']]){
        await page.locator(`[data-set-lang="${lang}"]`).click();assert.ok((await page.locator('h1').textContent()).includes(title));
      }
      page.once('dialog',d=>d.accept());await page.locator('#btn-report').click();
      await page.waitForSelector('#mask.open');
      assert.equal(await page.locator('#rp-ok').textContent(),'1');
      assert.equal(await page.locator('#rp-done').textContent(),'2');
      assert.equal(await page.locator('#rp-left').textContent(),String(size-2));
      assert.equal(await page.locator('#rp-pct').textContent(),Math.round(100/size)+'%');
      assert.equal(await page.locator('.qb-report-home').getAttribute('href'),'/');
      await page.locator('#rp-close').click();
      assert.equal(await page.locator('.q.done').count(),size);
      assert.equal(await page.locator('.qb-question-chat').count(),size);
      assert.equal(await page.locator('.qb-chat-trigger').isVisible(),true);
      assert.ok(await page.locator('details.ans:visible').count());
      if(await q1.locator('.opt').count()){
        const before=await q1.locator('.opt.ok').getAttribute('data-letter');
        assert.equal(await q1.locator('.opt').first().getAttribute('aria-disabled'),'true');
        await q1.locator('.opt:not(.ok)').first().focus();await page.keyboard.press('Enter');
        assert.equal(await q1.locator('.opt.ok').getAttribute('data-letter'),before);
      }
      await q1.locator('.qb-question-chat').click();
      assert.equal(await page.locator('#qb-chat-question option').count(),size+1);
      await page.locator('#qb-chat-close').click();
      await page.reload();await page.waitForSelector('.exam-notice');
      assert.equal(await page.locator('html').getAttribute('data-exam-status'),'submitted');
      assert.equal(await page.locator('#s-ok').textContent(),'1');
      for(const width of [320,768,1024,1440]){
        await page.setViewportSize({width,height:900});
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
      }
      if(pool==='aws-clf')await page.screenshot({path:path.resolve(__dirname,'../question-banks/fe/shots/random-exam-submitted.png')});
      if(pool==='aws-clf'){
        const home=await ctx.newPage();await home.goto(base+'/');
        await home.locator('#reset-progress').click();await home.locator('#reset-confirm').click();
        await page.waitForFunction(()=>document.documentElement.dataset.examStatus==='pending');
        assert.equal(await page.locator('.q.done,.q.wrong,details.ans:visible,.verdict:visible').count(),0);
        assert.equal(await page.locator('.qb-chat-trigger').isVisible(),false);
        await home.close();
      }
      assert.equal(aiCalls,0);assert.deepEqual(errors,[]);
      console.log(`${pool} ${size}: pending privacy, choices, reload, confirm, score, lock, AI unlock, quotas, languages and responsive PASS`);
      await ctx.close();
    }
    const ctx=await browser.newContext();await ctx.route('**/api/**',route=>route.fulfill({json:{user:null,configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10}}));await ctx.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page=await ctx.newPage();await page.goto(base+'/aws-clf/part01.html');await page.waitForSelector('#q1 .qb-question-chat');
    await page.locator('#q1 .opt').first().click();await page.locator('#q1 .js-submit').click();assert.equal(await page.locator('#q1').evaluate(el=>el.classList.contains('done')),true);
    console.log('Ordinary practice still grades instantly and retains AI explanations.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
