import{w as i,B as a}from"./p-015335ef.js";const n="ionViewWillLeave",e="ionViewDidLeave",o="ionViewWillUnload",s=a=>new Promise(((n,e)=>{i((()=>{t(a),r(a).then((i=>{i.animation&&i.animation.destroy(),c(a),n(i)}),(i=>{c(a),e(i)}))}))})),t=i=>{const a=i.enteringEl,n=i.leavingEl;h(a,n,i.direction),i.showGoBack?a.classList.add("can-go-back"):a.classList.remove("can-go-back"),V(a,!1),n&&V(n,!1)},r=async i=>{const n=await w(i);return n&&a.isBrowser?l(n,i):d(i)},c=i=>{const a=i.leavingEl;i.enteringEl.classList.remove("ion-page-invisible"),void 0!==a&&a.classList.remove("ion-page-invisible")},w=async i=>{if(i.leavingEl&&i.animated&&0!==i.duration)return i.animationBuilder?i.animationBuilder:"ios"===i.mode?(await import("./p-3afcbc82.js")).iosTransitionAnimation:(await import("./p-c52663af.js")).mdTransitionAnimation},l=async(i,a)=>{await p(a,!0);const n=i(a.baseEl,a);v(a.enteringEl,a.leavingEl);const e=await u(n,a);return a.progressCallback&&a.progressCallback(void 0),e&&b(a.enteringEl,a.leavingEl),{hasCompleted:e,animation:n}},d=async i=>{const a=i.enteringEl,n=i.leavingEl;return await p(i,!1),v(a,n),b(a,n),{hasCompleted:!0}},p=async(i,a)=>{const n=(void 0!==i.deepWait?i.deepWait:a)?[y(i.enteringEl),y(i.leavingEl)]:[g(i.enteringEl),g(i.leavingEl)];await Promise.all(n),await m(i.viewIsReady,i.enteringEl)},m=async(i,a)=>{i&&await i(a)},u=(i,a)=>{const n=a.progressCallback,e=new Promise((a=>{i.onFinish((i=>a(1===i)))}));return n?(i.progressStart(!0),n(i)):i.play(),e},v=(i,a)=>{f(a,"ionViewWillLeave"),f(i,"ionViewWillEnter")},b=(i,a)=>{f(i,"ionViewDidEnter"),f(a,"ionViewDidLeave")},f=(i,a)=>{if(i){const n=new CustomEvent(a,{bubbles:!1,cancelable:!1});i.dispatchEvent(n)}},g=i=>i&&i.componentOnReady?i.componentOnReady():Promise.resolve(),y=async i=>{const a=i;if(a){if(null!=a.componentOnReady&&null!=await a.componentOnReady())return;await Promise.all(Array.from(a.children).map(y))}},V=(i,a)=>{a?(i.setAttribute("aria-hidden","true"),i.classList.add("ion-page-hidden")):(i.hidden=!1,i.removeAttribute("aria-hidden"),i.classList.remove("ion-page-hidden"))},h=(i,a,n)=>{void 0!==i&&(i.style.zIndex="back"===n?"99":"101"),void 0!==a&&(a.style.zIndex="100")},L=i=>{if(i.classList.contains("ion-page"))return i;return i.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||i};export{o as L,n as a,e as b,y as d,L as g,f as l,V as s,s as t}