type WidgetOptions={sitekey:string;action:string;language:string;size:string;callback:(token:string)=>void;'expired-callback':()=>void;'error-callback':()=>void};
type Turnstile={render:(host:HTMLElement,options:WidgetOptions)=>string;remove:(id:string)=>void;reset:(id:string)=>void};
declare global {interface Window {turnstile?:Turnstile}}
let scriptPromise:Promise<void>|null=null;
function loadScript():Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise=new Promise<void>((resolve,reject)=>{
    const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;
    const timer=setTimeout(()=>{script.remove();reject(new Error('Verification script timeout'));},12000);
    script.onload=()=>{clearTimeout(timer);if(window.turnstile)resolve();else reject(new Error('Verification script unavailable'));};
    script.onerror=()=>{clearTimeout(timer);script.remove();reject(new Error('Verification script unavailable'));};
    document.head.append(script);
  }).catch(error=>{scriptPromise=null;throw error;});
  return scriptPromise;
}
const COPY={
  zh:{loading:'正在加载人机验证……',waiting:'请完成人机验证后创建账号。',verified:'人机验证通过。',failed:'人机验证未完成或已过期，请重试。',unavailable:'人机验证暂不可用，请重试；已有账号仍可登录。',retry:'重新验证',privacy:'注册验证由 Cloudflare Turnstile 提供。隐私说明'},
  en:{loading:'Loading human verification…',waiting:'Complete human verification to create an account.',verified:'Human verification passed.',failed:'Verification failed or expired. Please try again.',unavailable:'Human verification is unavailable. Retry, or sign in to an existing account.',retry:'Retry verification',privacy:'Registration verification is provided by Cloudflare Turnstile. Privacy notice'},
  ja:{loading:'人間による操作か確認中…',waiting:'アカウント作成前に認証を完了する。',verified:'認証に成功。',failed:'認証が未完了または期限切れ。再試行する。',unavailable:'認証を利用できない。再試行するか、既存アカウントでログインできる。',retry:'認証を再試行',privacy:'登録認証にはCloudflare Turnstileを使用。プライバシーについて'}
};
export class RegistrationChallenge {
  private active=false;
  private generation=0;
  private widget:string|null=null;
  private value='';
  private deadline=0;
  private compact=false;
  private status:keyof Omit<typeof COPY.zh,'retry'|'privacy'>='loading';
  private readonly message=document.createElement('p');
  private readonly host=document.createElement('div');
  private readonly retry=document.createElement('button');
  private readonly privacy=document.createElement('a');
  constructor(private readonly container:HTMLElement,private readonly language:()=>string) {
    this.message.setAttribute('role','status');this.retry.type='button';this.retry.dataset.verificationRetry='';
    this.retry.addEventListener('click',()=>{this.deactivate();void this.activate();});
    this.privacy.href='https://www.cloudflare.com/turnstile-privacy-policy/';this.privacy.target='_blank';this.privacy.rel='noopener noreferrer';
    this.container.replaceChildren(this.message,this.host,this.retry,this.privacy);this.container.hidden=true;
    window.addEventListener('resize',()=>{if(this.active&&this.widget!==null&&this.compact!==(this.host.clientWidth<300))this.reset();});
  }
  private copy(){const lang=this.language();return COPY[lang==='en'||lang==='ja'?lang:'zh'];}
  private paint():void {
    const c=this.copy();this.message.textContent=c[this.status];this.retry.textContent=c.retry;this.retry.hidden=this.status==='loading'||this.status==='verified';this.privacy.textContent=c.privacy;
  }
  getToken():string {if(Date.now()>=this.deadline)this.value='';return this.active?this.value:'';}
  async activate():Promise<void> {
    if(this.active)return;
    this.active=true;this.value='';this.status='loading';this.container.hidden=false;this.paint();const generation=++this.generation;
    try {
      const response=await fetch('/api/auth/registration-config',{credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(8000)});
      const config:unknown=await response.json();
      if(!response.ok || !config || typeof config!=='object' || !('configured' in config) || config.configured!==true || !('siteKey' in config) || typeof config.siteKey!=='string' || !config.siteKey)throw new Error('Verification not configured');
      if(!this.active || generation!==this.generation)return;
      await loadScript();
      if(!this.active || generation!==this.generation)return;
      const language=this.language();
      this.status='waiting';this.paint();
      this.compact=this.host.clientWidth<300;
      const fail=()=>{if(this.active&&generation===this.generation){this.value='';this.status='failed';this.paint();}};
      this.widget=window.turnstile!.render(this.host,{
        sitekey:config.siteKey,action:'register',language:language==='zh'?'zh-cn':language==='ja'?'ja':'en',size:this.compact?'compact':'flexible',
        callback:token=>{if(this.active&&generation===this.generation){this.value=token;this.deadline=Date.now()+290000;this.status='verified';this.paint();this.container.dispatchEvent(new Event('quizbank:verification-ready'));}},
        'expired-callback':fail,'error-callback':fail
      });
    } catch {
      if(this.active&&generation===this.generation){this.status='unavailable';this.value='';this.paint();}
    }
  }
  deactivate():void {
    this.active=false;this.generation++;this.value='';this.deadline=0;
    if(this.widget!==null && window.turnstile)window.turnstile.remove(this.widget);
    this.widget=null;this.host.replaceChildren();this.container.hidden=true;
  }
  reset():void {if(!this.active)return;this.deactivate();void this.activate();}
  localize():void {if(this.active)this.reset();else this.paint();}
}
