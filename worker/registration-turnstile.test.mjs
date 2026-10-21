import test from 'node:test';
import assert from 'node:assert/strict';
import {registrationConfig,verifyRegistration} from './registration-turnstile.mjs';
const env={TURNSTILE_SITE_KEY:'unit-test-public-key',TURNSTILE_SECRET_KEY:'unit-test-private-value'};
const request=new Request('https://quizsite.example/api/auth/register');
test('registration configuration exposes only the public key and fails closed when incomplete',()=>{
  assert.deepEqual(registrationConfig(env),{configured:true,siteKey:env.TURNSTILE_SITE_KEY});
  assert.deepEqual(registrationConfig({TURNSTILE_SITE_KEY:env.TURNSTILE_SITE_KEY}),{configured:false,siteKey:null});
  assert.ok(!JSON.stringify(registrationConfig(env)).includes(env.TURNSTILE_SECRET_KEY));
});
test('missing, oversized and forged tokens cannot pass or consume password/database work',async()=>{
  let calls=0;const fetcher=async()=>{calls++;return Response.json({success:false});};
  for(const token of [undefined,'',' '.repeat(10),'a'.repeat(2049)])assert.equal((await verifyRegistration(request,env,token,fetcher)).status,403);
  assert.equal(calls,0);
  assert.equal((await verifyRegistration(request,env,'forged',fetcher)).status,403);
  assert.equal(calls,1);
});
test('successful server verification requires the exact host and register action',async()=>{
  let sent;
  const result=await verifyRegistration(request,env,'token',async(url,options)=>{
    assert.equal(url,'https://challenges.cloudflare.com/turnstile/v0/siteverify');
    sent=JSON.parse(options.body);
    return Response.json({success:true,hostname:'quizsite.example',action:'register'});
  });
  assert.equal(result.status,200);
  assert.deepEqual(sent,{secret:env.TURNSTILE_SECRET_KEY,response:'token'});
  for(const response of [{success:true,hostname:'attacker.example',action:'register'},{success:true,hostname:'quizsite.example',action:'login'},{}]){
    assert.notEqual((await verifyRegistration(request,env,'token',async()=>Response.json(response))).status,200);
  }
});
test('expired/replayed tokens and provider/network/config failures fail closed without leaking details',async()=>{
  for(const codes of [['timeout-or-duplicate'],['invalid-input-response']])assert.equal((await verifyRegistration(request,env,'token',async()=>Response.json({success:false,'error-codes':codes}))).status,403);
  for(const fetcher of [async()=>{throw new Error('private provider details');},async()=>new Response('upstream',{status:503}),async()=>new Response('invalid json')]){
    const result=await verifyRegistration(request,env,'token',fetcher);assert.equal(result.status,503);assert.ok(!JSON.stringify(result).includes('private'));
  }
  assert.equal((await verifyRegistration(request,{},'token')).status,503);
  assert.equal((await verifyRegistration(request,env,'token',async()=>Response.json({success:false,'error-codes':['invalid-input-secret']}))).status,503);
});
