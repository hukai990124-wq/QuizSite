/* Isolated browser playback check; no model or account API calls. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const {chromium} = require(require.resolve('playwright',{paths:[process.env.QUIZSITE_BROWSER_MODULES || process.cwd()]}));
const site = path.resolve(__dirname,'../../site');
async function main() {
  const server = http.createServer((req,res) => {
    const file = path.resolve(site,'.'+new URL(req.url,'http://localhost').pathname);
    if (!file.startsWith(site+path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404);res.end();return;}
    res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.mp3':'audio/mpeg','.css':'text/css','.json':'application/json'})[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser = await chromium.launch({headless:true,channel:'msedge',args:['--autoplay-policy=no-user-gesture-required']});
  try {
    const context = await browser.newContext();
    await context.route('**/api/**',route=>route.fulfill({json:{user:null}}));
    await context.routeWebSocket('**/api/presence**',socket=>socket.close());
    const page = await context.newPage(), errors = [];
    page.on('pageerror',error=>errors.push(error.message));
    const base = process.env.QUIZSITE_TEST_BASE || `http://127.0.0.1:${server.address().port}`;
    await page.goto(base+'/toeic-listening/TOEIC_Listening_Test_05.html');
    assert.equal(await page.locator('.q[id]').count(),100);
    assert.equal(await page.locator('audio').count(),54);
    for (const name of ['p1-1.mp3','p2-1.mp3','p3-1.mp3','p4-1.mp3']) {
      const audio = page.locator(`audio[src$="/${name}"]`);
      await audio.evaluate(async node => {node.muted=true;await node.play();});
      await page.waitForFunction(name=>[...document.querySelectorAll('audio')].some(a=>a.src.endsWith('/'+name) && a.currentTime>0.2),name);
      const state = await audio.evaluate(node=>({duration:node.duration,error:node.error,rate:node.playbackRate}));
      assert.ok(state.duration>5,name+' decodes successfully');
      assert.equal(state.error,null);
      assert.equal(state.rate,1,'the browser does not slow down generated speech');
      await audio.evaluate(node=>node.pause());
      console.log(name+': browser playback OK, '+state.duration.toFixed(2)+'s');
    }
    assert.deepEqual(errors,[]);
  } finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
}
main().catch(error=>{console.error(error);process.exitCode=1;});
