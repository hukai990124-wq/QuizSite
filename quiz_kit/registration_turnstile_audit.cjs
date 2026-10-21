/* Isolated browser, simulated widget/provider, no real registration or AI requests. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(require.resolve('playwright',{paths:[process.env.QUIZSITE_BROWSER_MODULES||process.cwd()]}));
const site=path.resolve(__dirname,'../site');
const widget=`(()=>{let count=0;const hosts=new Map();window.turnstile={render(host,o){const id=String(++count);hosts.set(id,host);host.dataset.widgetLanguage=o.language;host.dataset.widgetSize=o.size;host.innerHTML='<button type="button" class="mock-verify">Verify</button><button type="button" class="mock-expire">Expire</button>';host.querySelector('.mock-verify').onclick=()=>o.callback('mock-token-'+id);host.querySelector('.mock-expire').onclick=()=>o['expired-callback']();return id;},remove(id){hosts.get(id)?.replaceChildren();hosts.delete(id);},reset(){}};})();`;
async function main(){
 const server=http.createServer((req,res)=>{const file=path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);if((file!==site&&!file.startsWith(site+path.sep))||!fs.existsSync(file)){res.writeHead(404);res.end();return;}const target=fs.statSync(file).isDirectory()?path.join(file,'index.html'):file;res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json'})[path.extname(target)]||'application/octet-stream');fs.createReadStream(target).pipe(res);});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try{
  for(const language of ['zh','en','ja']){
   const context=await browser.newContext();await context.addInitScript(lang=>localStorage.setItem('ui:lang',lang),language);
   let registerCalls=0,loginCalls=0,scriptCalls=0,firstToken,allow=false,configured=true,scriptBlocked=false;
   await context.route('**/api/**',route=>{
    const url=new URL(route.request().url());
    if(url.pathname==='/api/auth/registration-config')return route.fulfill({json:{configured,siteKey:configured?'unit-test-public-key':null}});
    if(url.pathname==='/api/auth/register'){
     registerCalls++;const body=route.request().postDataJSON();assert.ok(body.turnstileToken);if(!firstToken)firstToken=body.turnstileToken;else assert.notEqual(body.turnstileToken,firstToken,'failed registration must get a fresh token');
     return allow?route.fulfill({json:{user:{username:'TestUser'}}}):route.fulfill({status:409,json:{error:'该账号已被注册'}});
    }
    if(url.pathname==='/api/auth/login'){loginCalls++;assert.equal('turnstileToken' in route.request().postDataJSON(),false);return route.fulfill({status:401,json:{error:'账号或密码错误'}});}
    return route.fulfill({json:url.pathname==='/api/auth/me'?{user:null}:url.pathname==='/api/progress/sync'?{records:[],initialized:true}:{configured:true,available:true,authenticated:false,dailyLimit:10,remaining:10}});
   });
   await context.route('**/turnstile/v0/api.js*',route=>{scriptCalls++;return scriptBlocked?route.abort():route.fulfill({contentType:'text/javascript',body:widget});});
   await context.routeWebSocket('**/api/presence**',socket=>socket.close());
   const page=await context.newPage(),errors=[];page.on('pageerror',error=>errors.push(error.message));
   await page.setViewportSize({width:320,height:900});await page.goto(base+'/');await page.locator('.qb-auth-trigger').click();
   assert.equal(scriptCalls,0,'login must not load third-party verification');
   if(language==='zh')scriptBlocked=true;
   await page.locator('#qb-mode-register').click();
   if(language==='zh'){
    await page.waitForSelector('[data-verification-retry]');assert.equal(await page.locator('.mock-verify').count(),0);
    await page.locator('#qb-mode-login').click();assert.equal(await page.locator('#qb-auth-submit').isEnabled(),true);
    scriptBlocked=false;await page.locator('#qb-mode-register').click();
   }
   await page.waitForSelector('.mock-verify');
   assert.equal(await page.locator('#qb-registration-challenge a').getAttribute('href'),'https://www.cloudflare.com/turnstile-privacy-policy/');
   assert.equal(await page.locator('[data-widget-language]').getAttribute('data-widget-language'),{zh:'zh-cn',en:'en',ja:'ja'}[language]);
   assert.equal(await page.locator('[data-widget-size]').getAttribute('data-widget-size'),'compact');
   await page.locator('#qb-username').fill('TestUser');await page.locator('#qb-password').fill('testpass');
   await page.locator('#qb-auth-submit').click();assert.equal(registerCalls,0);
   await page.locator('.mock-verify').click();assert.equal(await page.locator('#qb-auth-error').textContent(),'');
   await page.locator('.mock-expire').click();await page.locator('#qb-auth-submit').click();assert.equal(registerCalls,0);
   await page.locator('[data-verification-retry]').click();await page.locator('.mock-verify').click();await page.locator('#qb-auth-submit').click();
   await page.waitForFunction(()=>document.querySelector('#qb-auth-error').textContent.length>0);
   await page.waitForSelector('.mock-verify');await page.locator('#qb-auth-submit').click();assert.equal(registerCalls,1,'consumed token cannot be reused');
   await page.locator('#qb-mode-login').click();assert.equal(await page.locator('#qb-registration-challenge').isVisible(),false);
   await page.locator('#qb-auth-submit').click();await page.waitForFunction(()=>!document.querySelector('#qb-auth-submit').disabled);assert.equal(loginCalls,1);
   configured=false;await page.locator('#qb-mode-register').click();await page.waitForSelector('[data-verification-retry]');
   assert.equal(await page.locator('.mock-verify').count(),0);await page.locator('#qb-auth-submit').click();assert.equal(registerCalls,1);
   configured=true;await page.locator('[data-verification-retry]').click();await page.waitForSelector('.mock-verify');
   for(const width of [320,768,1024,1440]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);}
   await page.waitForSelector('.mock-verify');await page.locator('#qb-account-close').click();assert.equal(await page.locator('.mock-verify').count(),0);
   await page.locator('.qb-auth-trigger').click();await page.waitForSelector('.mock-verify');
   if(language==='zh')await page.locator('.qb-account-dialog').screenshot({path:path.resolve(__dirname,'../question-banks/fe/shots/registration-turnstile.png')});
   allow=true;await page.locator('.mock-verify').click();await page.locator('#qb-auth-submit').click();await page.waitForSelector('#qb-account-view',{state:'visible'});
   assert.equal(await page.locator('#qb-registration-challenge').isVisible(),false);assert.equal(registerCalls,2);assert.deepEqual(errors,[]);
   console.log(language+': registration-only challenge, expiry/retry, consumed token, login unchanged, missing config, close/reopen, success and responsive PASS');
   await context.close();
  }
 }finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
