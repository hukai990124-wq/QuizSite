/* Real isolated browser; no real accounts, AI requests or cloud progress writes. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site=path.resolve(__dirname,'../site');

async function auditQuickPractice(browser,base,pool){
  const ctx=await browser.newContext({viewport:{width:320,height:780},isMobile:true,hasTouch:true});
  try{
    await ctx.route('**/*',route=>{
      const url=new URL(route.request().url());
      if(url.origin!==base)return route.abort();
      if(url.pathname.startsWith('/api/'))return route.fulfill({json:{user:null,available:false}});
      return route.continue();
    });
    await ctx.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page=await ctx.newPage(),errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto(`${base}/${pool}/index.html`);
    const practice=page.locator(`a[href$="pool=${pool}&size=10"]`);
    const exam=page.locator(`a[href$="pool=${pool}&size=50"]`);
    for(const [lang,label] of [['en','Practice 10 random questions'],['ja','ランダム練習10問'],['zh','随机刷 10 题']]){
      await page.locator(`[data-set-lang="${lang}"]`).click();
      assert.equal(await practice.textContent(),label);
      const [practiceBox,examBox]=await Promise.all([practice.boundingBox(),exam.boundingBox()]);
      assert.ok(practiceBox.x>=examBox.x+examBox.width && Math.abs(practiceBox.y-examBox.y)<2,`${pool} ${lang}: links are side by side on a narrow screen`);
    }
    await practice.click();
    await page.waitForSelector('.exam-notice');
    const initialUrl=page.url();
    assert.match(initialUrl,/size=10&seed=[a-f0-9]{8}/);
    assert.equal(await page.locator('html').getAttribute('data-exam-status'),'practice');
    assert.equal(await page.locator('.q').count(),10);
    assert.equal(await page.locator('.q:visible').count(),1);
    assert.equal(await page.locator('#sheet .grid a').count(),10);
    const stems=await page.locator('.q .stem').evaluateAll(nodes=>nodes.map(node=>(node.querySelector('.en')||node).textContent.replace(/\s+/g,' ').trim().toLowerCase()));
    assert.equal(new Set(stems).size,10);
    if(pool==='aws-clf'){
      const badges=await page.locator('.q .badge').allTextContents();
      assert.deepEqual([1,2,3,4].map(domain=>badges.filter(badge=>badge.includes(`Domain ${domain}`)).length),[2,3,4,1]);
    }
    if(pool==='aws-saa')assert.match(await page.locator('html').getAttribute('data-exam-key'),/aws-saa-ac:10:/);
    await page.emulateMedia({media:'print'});
    assert.equal(await page.locator('details.ans:visible').count(),0);
    await page.emulateMedia({media:'screen'});

    const first=page.locator('.q').first(),check=first.locator('.js-submit');
    assert.equal(await check.isDisabled(),true);
    const answers=(await first.getAttribute('data-ans')).split(/[,|]/).map(letter=>letter.trim().toUpperCase());
    if(await first.getAttribute('data-kind')==='fill')await first.locator('input.fill').fill(answers[0]);
    else for(const letter of answers)await first.locator(`.opt[data-letter="${letter}"]`).click();
    assert.equal(await first.locator('details.ans').isVisible(),false);
    assert.equal(await page.locator('#s-done').textContent(),'0','a draft is not graded');
    await check.click();
    assert.equal(await check.isDisabled(),true);
    assert.match(await first.locator('.verdict').textContent(),/答对了/);
    assert.equal(await first.locator('details.ans[open]').isVisible(),true);
    assert.equal(await page.locator('.q.done').count(),1);
    await page.locator('#exam-next').click();
    const second=page.locator('.q:visible');
    if(await second.getAttribute('data-kind')==='fill')await second.locator('input.fill').fill('deliberately wrong');
    else {
      const correct=(await second.getAttribute('data-ans')).split(/[,|]/).map(letter=>letter.trim().toUpperCase());
      const letters=await second.locator('.opt').evaluateAll(options=>options.map(option=>option.dataset.letter));
      await second.locator(`.opt[data-letter="${letters.find(letter=>!correct.includes(letter))}"]`).click();
    }
    await page.reload();
    await page.waitForSelector('.exam-notice');
    assert.equal(await second.getAttribute('data-n'),'2');
    assert.equal(await page.locator('#s-ok').textContent(),'1');
    assert.equal(await second.locator('.js-submit').isEnabled(),true);
    await second.locator('.js-submit').click();
    assert.match(await second.locator('.verdict').textContent(),/答错了/);
    await page.locator('#btn-report').click();
    await page.waitForSelector('#mask.open');
    assert.equal(await page.locator('#rp-left').textContent(),'8');
    assert.equal(await page.locator('#rp-pct').textContent(),'50%');
    await page.locator('#rp-retry').click();
    assert.equal(await second.getAttribute('data-n'),'2');
    assert.equal(await page.locator('#exam-next').isDisabled(),true,'unanswered questions are excluded from mistake review');
    await page.locator('#btn-wrong').click();
    for(const [lang,title] of [['en','10-question practice'],['ja','ランダム練習10問'],['zh','随机刷 10 题']]){
      await page.locator(`[data-set-lang="${lang}"]`).click();
      assert.ok((await page.locator('h1').textContent()).includes(title));
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${pool} ${lang} mobile`);
    }
    await page.locator('#qb-color-mode').selectOption('dark');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${pool} dark mobile`);
    await page.locator('.random-again').click();
    await page.waitForSelector('.exam-notice');
    assert.notEqual(page.url(),initialUrl);
    assert.equal(await page.locator('.q.done').count(),0);
    assert.deepEqual(errors,[]);
    console.log(`${pool} 10: mobile entry, sampling, scoring, reload, report and fresh seed PASS`);
  }finally{await ctx.close();}
}

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
    for(const pool of ['aws-clf','aws-aif','aws-saa','aws-aip','aws-mla'].filter(pool=>process.argv.length<3 || process.argv.slice(2).includes(pool))){
      await auditQuickPractice(browser,base,pool);
    }
    for(const [pool,size,quotas] of [['aws-clf',50],['aws-aif',50],['aws-saa',50],['aws-aip',50],['aws-mla',50],['toeic-listening',50,[3,14,18,15]],['toeic-listening',100,[6,25,39,30]],['toeic-reading',50,[15,8,27]],['toeic-reading',100,[30,16,54]]].filter(([pool])=>process.argv.length<3 || process.argv.slice(2).includes(pool))){
      const ctx=await browser.newContext();let aiCalls=0;
      const legacySaaDraft=JSON.stringify({exam:{startedAt:1,submitted:false,submittedAt:null,currentIndex:9},'1':{s:['A'],ok:null,revealed:false}});
      if(pool==='aws-saa')await ctx.addInitScript(raw=>localStorage.setItem('quiz:random-exam:aws-saa:50:12345678',raw),legacySaaDraft);
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
      const requested=[];page.on('request',request=>requested.push(new URL(request.url()).pathname));
      await page.goto(`${base}/random.html?pool=${pool}&size=${size}&seed=12345678`);
      await page.waitForSelector('.exam-notice');
      await page.waitForSelector('.qb-chat-trigger',{state:'attached',timeout:7000});
      assert.equal(await page.locator('.q').count(),size);
      if(pool==='aws-saa'){
        assert.equal(requested.some(path=>path.startsWith('/aws-saa/compliance/')),false,'SAA exams never fetch B-line papers');
        assert.equal(await page.getAttribute('html','data-exam-key'),'quiz:random-exam:aws-saa-ac:50:12345678');
        assert.equal(await page.locator('#s-done').textContent(),'0','old mixed-pool answers must not attach to new questions');
        assert.equal(await page.locator('.q:visible').getAttribute('data-n'),'1');
        assert.equal(await page.evaluate(()=>localStorage.getItem('quiz:random-exam:aws-saa:50:12345678')),legacySaaDraft,'old exam records are preserved');
        const shapes=await page.locator('.q').evaluateAll(questions=>questions.map(q=>({answers:q.dataset.ans.split(/[,|]/).length,options:q.querySelectorAll('.opt').length,kind:q.dataset.kind||''})));
        assert.ok(shapes.every(q=>!q.kind && (q.answers===1 ? q.options===4 : q.answers>=2 && q.options>=5)),'all 50 questions match SAA response types');
      }
      const paged=pool.startsWith('aws-');
      async function openQuestion(q) {
        if(!paged)return;
        const index=Number(await q.getAttribute('data-n'))-1;
        await page.locator('#sheet .grid a').nth(index).click();
        assert.equal(await page.locator('.q:visible').count(),1);
        assert.equal(await q.isVisible(),true);
      }
      if(paged){
        assert.equal(await page.locator('html').getAttribute('data-exam-layout'),'single');
        assert.equal(await page.locator('.q:visible').count(),1);
        assert.equal(await page.locator('#exam-previous').isDisabled(),true);
        assert.equal(await page.locator('#sheet').isVisible(),true);
        assert.equal(await page.locator('#sheet .grid a').count(),50);
        const sheetBox=await page.locator('#sheet').boundingBox(), questionBox=await page.locator('.q:visible').boundingBox();
        assert.ok(sheetBox.y+sheetBox.height<=questionBox.y,'answer sheet is above the question');
        assert.equal(await page.locator('.exam-bar').count(),0,'source timed-practice controls are removed from the exam clone');
        const stems=await page.locator('.q').evaluateAll(questions=>questions.map(q=>q.querySelector('.stem .en').textContent));
        assert.equal(new Set(stems.map(text=>text.replace(/\s+/g,' ').trim())).size,50,'no duplicate stems');
      }
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
      if(paged){
        await page.locator('#exam-next').click();assert.equal(await q2.isVisible(),true);
        await page.locator('#exam-previous').click();assert.equal(await q1.isVisible(),true);
        assert.equal(await q1.locator('.opt.sel').count(),1,'previous retains the answer');
        await openQuestion(page.locator('.q').nth(49));assert.equal(await page.locator('#exam-next').isDisabled(),true);
        await openQuestion(q2);
        assert.equal(await page.locator('#sheet [aria-current="step"]').textContent(),'2');
      }else await page.locator('#btn-sheet').click();
      assert.equal(await page.locator('#sheet .grid a.exam-answered').count(),1);
      assert.equal(await page.locator('#sheet .grid a.ok,#sheet .grid a.bad').count(),0);
      if(!paged)await page.locator('#sh-close').click();
      page.once('dialog',d=>d.dismiss());await page.locator('#btn-report').click();
      assert.equal(await page.locator('html').getAttribute('data-exam-status'),'pending');
      await page.reload();await page.waitForSelector('.exam-notice');
      assert.equal(await page.locator('#s-done').textContent(),'1');
      if(paged)assert.equal(await page.locator('.q:visible').getAttribute('data-n'),'2','refresh restores the current question');
      assert.equal(await page.locator('details.ans:visible,.qb-question-chat').count(),0);
      async function choose(q,correct){
        await openQuestion(q);
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
      if(paged){
        await page.locator('#btn-wrong').click();
        assert.equal(await page.locator('.q:visible').getAttribute('data-n'),'2');
        assert.equal(await page.locator('#exam-previous').isDisabled(),true);
        await page.locator('#exam-next').click();assert.equal(await page.locator('.q:visible').getAttribute('data-n'),'3');
        await openQuestion(q1);assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('only-wrong')),false);
      }
      assert.equal(await page.locator('.qb-question-chat').count(),size);
      assert.equal(await page.locator('.qb-chat-trigger').isVisible(),true);
      assert.ok(await page.locator('details.ans:visible').count());
      if(await q1.locator('.opt').count()){
        const before=await q1.locator('.opt.ok').evaluateAll(options=>options.map(el=>el.dataset.letter));
        assert.equal(await q1.locator('.opt').first().getAttribute('aria-disabled'),'true');
        await q1.locator('.opt:not(.ok)').first().focus();await page.keyboard.press('Enter');
        assert.deepEqual(await q1.locator('.opt.ok').evaluateAll(options=>options.map(el=>el.dataset.letter)),before);
      }
      await q1.locator('.qb-question-chat').click();
      assert.equal(await page.locator('#qb-chat-question option').count(),size+1);
      await page.locator('#qb-chat-close').click();
      await page.reload();await page.waitForSelector('.exam-notice');
      assert.equal(await page.locator('html').getAttribute('data-exam-status'),'submitted');
      assert.equal(await page.locator('#s-ok').textContent(),'1');
      for(const mode of ['light','dark']){
        await page.locator('#qb-color-mode').selectOption(mode);
        for(const width of [320,768,1024,1440]){
          await page.setViewportSize({width,height:900});
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${pool} ${mode} ${width}`);
          if(paged)assert.equal(await page.locator('.q:visible').count(),1);
        }
      }
      if(pool==='aws-clf')await page.screenshot({path:path.resolve(__dirname,'../question-banks/fe/shots/random-exam-submitted.png')});
      if(pool==='aws-clf'){
        const fresh=await ctx.newPage();await fresh.goto(`${base}/random.html?pool=aws-clf&size=50&seed=87654321`);await fresh.waitForSelector('.exam-notice');
        assert.equal(await fresh.locator('#s-done').textContent(),'0','new seed is independent');
        for(let index=0;index<50;index++){
          await fresh.locator('#sheet .grid a').nth(index).click();
          const q=fresh.locator('.q').nth(index), answers=(await q.getAttribute('data-ans')).split(',');
          for(const letter of answers)await q.locator(`[data-letter="${letter.trim()}"]`).click();
        }
        assert.equal(await fresh.locator('#s-done').textContent(),'50');
        fresh.once('dialog',d=>d.accept());await fresh.locator('#btn-report').click();await fresh.waitForSelector('#mask.open');
        assert.equal(await fresh.locator('#rp-pct').textContent(),'100%');assert.equal(await fresh.locator('#rp-left').textContent(),'0');
        await fresh.locator('#rp-retry').click();assert.equal(await fresh.locator('.q:visible').count(),0);assert.equal(await fresh.locator('.exam-empty').isVisible(),true);
        assert.equal(await fresh.locator('#exam-next').isDisabled(),true);await fresh.locator('#btn-wrong').click();assert.equal(await fresh.locator('.q:visible').count(),1);
        await fresh.close();
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
    const page=await ctx.newPage();
    for(const [pool,size] of [['toeic-reading',10],['toeic-listening',10],['aws-clf',100]]){
      await page.goto(`${base}/random.html?pool=${pool}&size=${size}`);
      await page.locator('#message').getByText(/随机出题参数无效/).waitFor();
    }
    await page.goto(base+'/aws-clf/part01.html');await page.waitForSelector('#q1 .qb-question-chat');
    await page.locator('#q1 .opt').first().click();await page.locator('#q1 .js-submit').click();assert.equal(await page.locator('#q1').evaluate(el=>el.classList.contains('done')),true);
    console.log('Ordinary practice still grades instantly and retains AI explanations.');
  }finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
