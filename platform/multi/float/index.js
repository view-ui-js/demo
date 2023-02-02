import{_ as ce}from"../../index.js";import{defineComponent as le,shallowRef as pe,getCurrentInstance as ue,reactive as de,ref as z,nextTick as N,createApp as he,resolveComponent as W,openBlock as $,createBlock as I,normalizeClass as L,withCtx as O,createElementVNode as y,createElementBlock as k,normalizeStyle as x,createCommentVNode as E,toDisplayString as _,Transition as Y,Fragment as D,createVNode as q,resolveDynamicComponent as me,renderList as K,createTextVNode as V,withModifiers as ve,pushScopeId as ge,popScopeId as we,defineAsyncComponent as ye,onMounted as $e,unref as S,withDirectives as ke,vShow as be}from"/view-ui/libs/vue.js";import h,{instances as g,baseURL as Ce,Lang as ee,importApp as te,widths as M,minAppWidith as F,getLevel as G,events as j,Langs as Le,getChildOptions as se,urlHistory as H}from"/view-ui/libs/view.js";import{controlbar as B,overview as X,openApp as Se,addHistory as ze,appsState as C,apps as A,controllerSwitch as ie}from"/view-ui/libs/state.js";import oe,{DisableEvent as Ae,MaskStyle as U,isTouch as J,screenHeight as Ee,getLastPointer as Me}from"/view-ui/libs/pointer.js";import _e,{getRightBaseLine as P,getMinMove as Fe}from"/view-ui/libs/swiper.js";import{open as Ie,openBlank as Be,closeInstance as Re}from"/view-ui/libs/navigator.js";import Te,{IFrame as Oe}from"/view-ui/libs/components.js";import{message as ne}from"/view-ui/libs/viewui.js";import De from"/view-ui/libs/router.js";import{S as Xe}from"../../Index2.js";import{_ as ae}from"../../export-helper.js";import"/view-ui/libs/network.js";function Ne(e){const t=new oe(e);t.use(_e(e,{inertia:4}));let l="",a;t.on("start",f=>{if(l="",a=void 0,"validity"in f.target)return Ae();const{startX:s}=t;for(const m in g){const c=g[m],{left:n,width:o}=c,i=n+o;if(s>n&&s<i){a=c;break}}h.instance=a}),t.on("lock",()=>{if(a&&t.dir==="Y")if(B.value===!1&&a.displays===!1)l="scroll";else{l="drag",U.cursor="move",t.lastX=t.startX,t.lastY=t.startY,Object.assign(a.$el.style,{zIndex:100,transition:"unset"}),t.initLeft=a.left;for(const f in g){const s=g[f];s!==a&&Object.assign(s.$el.style,{zIndex:"",transition:""})}}}),t.on("vertical",f=>{if(l==="drag"){const{clientX:s,clientY:m}=f,c=s-t.startX+t.initLeft,n=m-t.startY;a.$el.style.transform=`translate3d(${c}px, ${n}px, 0)`;const o=a.width,{lastX:i}=t;if(s>i)for(const p in g){const u=g[p];if(u===a)continue;const v=u.left+u.width/2;i<v&&s>=v&&(u.left-=o,u.$el.style.transform=`translate3d(${u.left}px, 0, 0)`,a.left=u.left+u.width)}else if(s<i)for(const p in g){const u=g[p];if(u===a)continue;const v=u.left+u.width/2;i>v&&s<=v&&(a.left=u.left,u.left+=o,u.$el.style.transform=`translate3d(${u.left}px, 0, 0)`)}t.lastX=s,t.lastY=m}});let r;J===!1&&(t.on("lock",f=>{if(l==="scroll"){let s=f.target;for(;s;){if(s.classList.contains("scroll-y")){r=s;break}const{parentElement:m}=s;if(m)s=m;else{r=s;break}}r.classList.add("scrollbar")}}),t.on("vertical",f=>{if(l==="scroll"&&r){const{move:s}=t;if(s)r.scrollBy(0,-s);else{const{screenY:m}=f;m===0?r.scrollBy(0,16):m===Ee&&r.scrollBy(0,-16)}}}),t.on("end",()=>{l==="scroll"&&r&&(r.classList.remove("scrollbar"),r=void 0)})),t.on("end",()=>{if(l==="drag"){const{style:f}=a.$el;Object.assign(f,{transition:"",transform:`translate3d(${a.left}px, 0, 0)`})}}),t.on("click",({target:f})=>{X.value?(X.value=!1,e.style.transformOrigin=`${t.clientX}px 50%`):f.getAttribute("event")==="mask"?B.value=!B.value:f===e&&(B.value=!1)}),h.appsPointer=t}const T=Le({QRCode:{en:"Scan Code",zh:"\u4E8C\u7EF4\u7801"},split:{en:"Split Mode",zh:"\u5206\u5C4F\u6A21\u5F0F"},single:{en:"Single Mode",zh:"\u5355\u5C4F\u6A21\u5F0F"},autoScreen:{en:"Auto",zh:"\u81EA\u9002\u5E94"},fullScreen:{en:"Fullscreen",zh:"\u5168\u5C4F\u663E\u793A"},multi:{en:"Multiple",zh:"\u590D\u5236\u5E94\u7528"},copy:{en:"Copy Link",zh:"\u590D\u5236\u94FE\u63A5"},newTab:{en:"New Tab",zh:"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00"},reload:{en:"Reload",zh:"\u5237\u65B0"},back:{en:"Back",zh:"\u8FD4\u56DE"},share:{en:"Share",zh:"\u5206\u4EAB"},close:{en:"Close App",zh:"\u5173\u95ED\u5E94\u7528"},drag:{en:"Drag up and down to sort",zh:"\u4E0A\u4E0B\u62D6\u52A8\u6392\u5E8F"}}),We={100:M[100],200:M[200],300:M[300],400:M[400],500:M[500]},Pe=le({components:{IFrame:Oe},props:["options"],setup({options:e}){const{app:t}=e,{split:l=!1,level:a=100,style:r={}}=t,f=pe(void 0),{ctx:s}=ue();return{app:t,langs:T,levels:We,overview:X,controlbar:B,style:de(r),single:z(!0),split:z(l),splitSwitch:z(!1),level:z(a),displays:z(!1),isInit:z(!1),reload:z(!0),loading:z(!0),maskComponent:f,buttons:[{icon:"ficon-reload",name:T.reload,action(){s.onreload()}},{icon:"ficon-copy",name:T.multi,action(){s.onmulti()}},{icon:"ficon-erweima",name:T.QRCode,action(){s.openMask("common/qrcode")}},{icon:"ficon-link",name:T.copy,action(){s.oncopy()}},{icon:"ficon-icons_send",name:T.share,action(){s.openMask("common/share")}}]}},computed:{href(){const{url:e}=this.options;return`${Ce}/#${e}`}},methods:{open:Ie,openBlank:Be,onmulti(){this.multiId?this.multiId++:this.multiId=1;const e={...this.options,referer:this};e.url+=`?mid=${this.multiId}`,Se(e)},async oncopy(){navigator.clipboard?(await navigator.clipboard.writeText(this.href),ne.success(ee({en:`Copy Success\b ${this.href}`,zh:`\u590D\u5236\u6210\u529F\b ${this.href}`}))):ne.error(ee({en:"Copy Failed",zh:"\u590D\u5236\u5931\u8D25"}))},onclose(){Re(this)},timeouCloseResize(){const e=J?3e3:1200;clearTimeout(this.clearTimeouId),this.clearTimeouId=setTimeout(()=>this.displays=!1,e)},clearResizeTimeouID(){clearTimeout(this.clearTimeouId)},closeResizeView(e){this.controlbar?this.controlbar=!1:e.target===e.currentTarget&&(this.displays=!1)},drawer(){this.controlbar=!0},openMask(e){te(e).then(t=>this.maskComponent=t)},closeMask(){this.maskComponent=void 0},setWidth(e){let l=P()-(this.left+e),a=e-this.width;l<0?a+=l:l=0,this.width=e,this.$el.style.width=`${e}px`;for(const r in g){const f=g[r];f.left>this.left?f.left+=a:f.left+=l;const{style:s}=f.$el;s.transition="",s.transform=`translate3d(${f.left}px, 0, 0)`}},setLevel(e){const t=M[e];this.level=Number(e);const l=this.level/100-1;this.setWidth(t+l)},onSplit(e){this.single||(this.split=e,e?this.setLevel(this.$refs.mount.childElementCount*100):(this.level=100,this.setWidth(F)))},fullScreen(){const[e]=h.initOptions.apps.padding,l=P()-e,a=e-this.left,r=a-(this.width-l);this.width=l,this.level=G(l),this.$el.style.width=`${l}px`;for(const f in g){const s=g[f],{style:m}=s.$el;s.left<=this.left?s.left+=a:s.left+=r,m.transition="",m.transform=`translate3d(${s.left}px, 0, 0)`}},autoScreen(){let e=100;const{app:t}=this;t.iframe?t.level&&(e=t.level):this.split&&(e=this.$refs.mount.childElementCount*100),this.level=e;const l=M[e],a=this.width-l;this.width=l,this.$el.style.width=`${l}px`;for(const r in g){const f=g[r],{style:s}=f.$el;f.left>this.left&&(f.left-=a),s.transition="",s.transform=`translate3d(${f.left}px, 0, 0)`}},autoAlign(){const e=P(),[t]=h.initOptions.apps.padding;t+this.width===e?this.autoScreen():this.fullScreen()},initResize(){let e=0,t=0;const{$apps:l}=h,{style:a}=this.$el,r=new oe(this.$refs.resize,{angle:20});J===!1&&r.on("start",()=>U.display=""),r.on("lock",()=>{r.dir==="X"?(clearTimeout(this.clearTimeouId),e=this.$el.clientWidth,a.transition="unset",this.originlLeft=this.left,this.displays=!0):(X.value=!0,U.cursor="col-resize",t=r.clientX,l.style.transformOrigin=`${r.clientX}px 50%`,j.emit("sidebar.switch",!1))}),r.on("level",()=>{const{move:s}=r;e+=s;const m=this.originlLeft-this.left;if(e>F){if(m===0)for(const c in g){const n=g[c];n.left>this.left&&(n.left+=s);const{style:o}=n.$el;o.transition="unset",o.transform=`translate3d(${n.left}px, 0, 0)`}else{const c=this.left+this.width,n=r.current-c;e=r.current-this.originlLeft;for(const o in g){const i=g[o];i.left>this.left?i.left+=n:i.left+=m;const{style:p}=i.$el;p.transition="unset",p.transform=`translate3d(${i.left}px, 0, 0)`}}if(a.width=`${e}px`,this.level=G(e),this.width=e,this.single===!1){const{children:c}=this.$refs.mount;for(const n of c){const o=String(G(n.clientWidth));o!==n.getAttribute("level")&&n.setAttribute("level",o)}}}else{const c=Math.ceil(Math.abs((e-F)/15))||1;if(this.width===F)h.swiper.move(s/c);else{this.level=100;const n=F-this.width,i=(s-n)/c,p=i+n;e=F,a.width=`${F}px`,this.width=F;for(const u in g){const v=g[u];v.left>this.originlLeft?v.left+=p:v.left+=i;const{style:w}=v.$el;w.transition="unset",w.transform=`translate3d(${v.left}px, 0, 0)`}}}}),r.on("vertical",s=>{const{current:m,start:c,clientX:n}=r,o=n-t;h.swiper.move(o*3),t=n}),r.on("end",()=>{if(r.dir==="X"){const s=this.originlLeft-this.left;s&&h.swiper.scroll(s),this.timeouCloseResize()}});let f=0;r.on("click",s=>{this.displays=!0,this.controlbar=!1,this.timeouCloseResize(),s.timeStamp-f<300&&this.autoAlign(),f=s.timeStamp})},async onreload(){this.reload=!1,this.loading=!0,await N(),this.reload=!0,await N(),this.createApp&&this.createApp()},onIFrameLoad(e){this.loading=!1,e(this)}},async mounted(){var c;await N(),this.initResize();let e=M[this.level];const t=P(),[l]=h.initOptions.apps.padding,{options:a,app:r}=this,{referer:f}=a;if(f){let n=f.left+f.width;const o=t-(n+e);o<0&&(n+=o,h.swiper.scroll(o)),this.left=n>l?n:l}else{const n=Object.values(g);if(n.length){let o,i,p,u=Number.MAX_SAFE_INTEGER,v=Number.MIN_SAFE_INTEGER,w=Number.MIN_SAFE_INTEGER;for(const d of n)d.left<u&&(o=d,u=d.left),d.left>w&&(w=d.left,w+d.width<=t&&(p=d)),d.left>v&&(i=d,v=d.left);if(i.left<0){this.left=l;const d=l-(i.left+i.width);h.swiper.scroll(d)}else if(p){let d=p.left+p.width;const b=t-(d+e);b<0&&(d+=b,h.swiper.scroll(b)),this.left=d}else{const d=l-o.left;h.swiper.scroll(d),this.left=l}}else{const o=(c=h.initOptions.apps)==null?void 0:c.float;this.left=o==="right"?t-e:l}}if(r.flex===!0){const n=M[400],o=t-this.left;o<n?e=o:e=n}this.width=e;const{style:s}=this.$el;s.opacity=0,s.width=`${e}px`,s.transition="unset";const m=this.left-100;s.transform=`translate3d(${m}px, 0, 0)`,requestAnimationFrame(()=>{s.opacity=1,s.transition="",s.transform=`translate3d(${this.left}px, 0, 0)`});for(const n in g){const o=g[n];o.left>=this.left&&(o.left+=e,Object.assign(o.$el.style,{transition:"",transform:`translate3d(${o.left}px, 0, 0)`}))}if(g[a.url]=this,r.src){const n=await te(r.src);if(n.app){Object.assign(r,n.app);const{name:u,color:v,icon:w}=n.app;u&&(a.name=u),v&&(a.color=v),w&&(a.icon=w)}this.isInit=!0;const{level:o}=this;let i;const p={instance:this,level:o};if(n.install===void 0){const{pages:u}=n,{style:v}=r;if(u){let{paths:w}=a;w?w.shift():w=[],i={entry:n,pages:u,paths:w,style:v},this.single=!1;let d=!1;for(const b in u){const{__asyncLoader:Z,inline:re}=u[b];Z?Z().then(fe=>{d===!1&&fe.inline===void 0&&(d=!0,this.split=!0,this.splitSwitch=!0)}):re===void 0&&(d=!0)}d&&(this.split=!0,this.splitSwitch=!0),Object.assign(p,Xe)}else this.split=!1,Object.assign(p,n),v&&Object.assign(this.style,v);await N(),this.createApp=()=>{this.loading=!1;const w=he(p,i);w.use(Te);const d=this.$refs.mount,b=new De({app:w,options:a,el:d,container:this});this.router=b,w.provide("container",this),w.provide("router",b),this.pages=w.mount(d)}}else await N(),this.createApp=()=>{this.loading=!1;const u=this.$refs.mount;n.install(u,{app:this})};this.createApp()}ze(a),h.initComponentPromise&&(await h.initComponentPromise,h.initComponentPromise=void 0),j.emit("opened",a)}});const R=e=>(ge("data-v-cdbde1eb"),e=e(),we(),e),je={class:"title"},Ve=["level"],Ye={class:"view-resize"},qe=R(()=>y("i",{class:"ficon-auto"},null,-1)),xe=R(()=>y("i",{class:"ficon-fullscreen"},null,-1)),Ge=R(()=>y("i",{class:"ficon-pages_outlined"},null,-1)),He=R(()=>y("i",{class:"ficon-fenping1"},null,-1)),Qe=R(()=>y("div",{class:"view-mask",event:"mask"},null,-1)),Ke={class:"header item"},Ue={class:"title"},Je=["title"],Ze=R(()=>y("i",{class:"ficon-xinchuangkou"},null,-1)),et=[Ze],tt={key:1,class:"button"},st=R(()=>y("i",{class:"ficon-up"},null,-1)),it=[st],nt={class:"buttons"},lt=["onClick"],ot=["title"],at=R(()=>y("i",{class:"ficon-cha"},null,-1)),rt=[at];function ft(e,t,l,a,r,f){const s=W("titlebar"),m=W("container"),c=W("IFrame"),n=W("resize"),o=W("app");return $(),I(o,{class:L({overview:e.overview})},{default:O(()=>[e.overview?($(),I(s,{key:0},{default:O(()=>[y("div",je,[e.app.icon?($(),k("i",{key:0,class:L(e.app.icon),style:x({color:e.app.color})},null,6)):E("",!0),y("span",null,_(e.app.name),1)])]),_:1})):E("",!0),y("view",{class:L({loading:e.loading}),style:x(e.style)},[e.reload?($(),I(Y,{key:0,name:"fade",appear:""},{default:O(()=>[e.app.src?($(),k(D,{key:0},[e.isInit?($(),k(D,{key:0},[e.single?($(),I(m,{key:0,class:"mount scroll-y",level:e.level,ref:"mount",onBack:e.onclose},null,8,["level","onBack"])):($(),k("div",{key:1,class:L(["mount",[e.split?"flat":"fixed"]]),ref:"mount",onBack:t[0]||(t[0]=(...i)=>e.onclose&&e.onclose(...i))},null,34))],64)):E("",!0)],64)):e.app.iframe?($(),I(c,{key:1,src:e.app.iframe,gesture:e.app.gesture,onLoad:e.onIFrameLoad},null,8,["src","gesture","onLoad"])):E("",!0)]),_:1})):E("",!0),q(Y,{name:"fade",appear:""},{default:O(()=>[e.maskComponent?($(),I(me(e.maskComponent),{key:0,onClose:e.closeMask},null,40,["onClose"])):E("",!0)]),_:1}),y("div",{class:L({controlbar:e.controlbar,displays:e.displays}),onMouseenter:t[10]||(t[10]=(...i)=>e.clearResizeTimeouID&&e.clearResizeTimeouID(...i)),onMouseleave:t[11]||(t[11]=(...i)=>e.timeouCloseResize&&e.timeouCloseResize(...i))},[y("div",{class:"view-display",onClick:t[6]||(t[6]=(...i)=>e.closeResizeView&&e.closeResizeView(...i))},[y("div",{class:"view-levels",onClick:t[1]||(t[1]=i=>e.setLevel(i.target.getAttribute("level")))},[($(!0),k(D,null,K(e.levels,(i,p)=>($(),k("div",{key:p,level:p,class:L({active:p<=e.level})},_(p)+"% ",11,Ve))),128))]),y("div",Ye,[y("div",{class:"auto-resize",onClick:t[2]||(t[2]=(...i)=>e.autoScreen&&e.autoScreen(...i))},[qe,V(" "+_(e.langs.autoScreen),1)]),y("div",{class:"full-screen",onClick:t[3]||(t[3]=(...i)=>e.fullScreen&&e.fullScreen(...i))},[xe,V(" "+_(e.langs.fullScreen),1)])]),e.splitSwitch?($(),k("div",{key:0,class:L(["view-mode",{split:e.split}])},[y("div",{class:"single-mode",onClick:t[4]||(t[4]=i=>e.onSplit(!1))},[Ge,V(" "+_(e.langs.single),1)]),y("div",{class:"split-mode",onClick:t[5]||(t[5]=i=>e.onSplit(!0))},[He,V(" "+_(e.langs.split),1)])],2)):E("",!0)]),Qe,y("div",{class:"view-drawer",onClick:t[8]||(t[8]=(...i)=>e.drawer&&e.drawer(...i))},[y("div",Ke,[y("div",Ue,[e.app.icon?($(),k("i",{key:0,class:L(e.app.icon),style:x({color:e.app.color})},null,6)):E("",!0),y("span",null,_(e.app.name),1)]),e.controlbar?($(),k("div",{key:0,class:"button",title:e.langs.newTab,onClick:t[7]||(t[7]=i=>e.openBlank(e.options.url))},et,8,Je)):($(),k("div",tt,it))]),y("div",nt,[($(!0),k(D,null,K(e.buttons,({name:i,icon:p,action:u})=>($(),k("div",{class:"button",onClick:u},[y("i",{class:L(p)},null,2),y("span",null,_(i),1)],8,lt))),256))])]),y("div",{class:"bottom-line",title:e.langs.drag},null,8,ot),y("div",{class:"close",onClick:t[9]||(t[9]=ve((...i)=>e.onclose&&e.onclose(...i),["stop"]))},rt)],34)],6),q(n,{ref:"resize"},null,512)]),_:1},8,["class"])}const ct=ae(Pe,[["render",ft],["__scopeId","data-v-cdbde1eb"]]);function Q(e){const{style:t}=e.$el;t.transition="all 0.1s",t.transform=`translate3d(${e.left}px, 20px, 0)`,e.$el.addEventListener("transitionend",()=>{t.transform=`translate3d(${e.left}px, 0, 0)`},{once:!0})}j.on("opening",(e,t,l)=>{var r;C.value===!1&&(C.value=!0);const a=Me()===h.appsPointer?h.instance:void 0;if(l){const f=h.initOptions.apps,{float:s="left",padding:[m]}=f;if(a){if(a===l)return;requestAnimationFrame(()=>{const c=l.left,n=l.width,o=a.left;if(c<o){const i=o-n,p=o-(m+n),u=p>0?0:-p;if(i===c)u?h.swiper.scroll(u):Q(l);else for(const v in g){const w=g[v],{style:d}=w.$el;d.zIndex=1,w.left>c&&w.left<o?w.left-=n:w===l&&(d.zIndex="",w.left=i),w.left+=u,d.transition="",d.transform=`translate3d(${w.left}px, 0, 0)`}}else{const i=P(),p=o+a.width,u=p+l.width;let v=i-u;if(v>0&&(v=0),c===p)v?h.swiper.scroll(v):Q(l);else for(const w in g){const d=g[w],{style:b}=d.$el;b.zIndex=1,d.left>o&&d.left<c?d.left+=n:d===l&&(d.left=p,b.zIndex=""),d.left+=v,b.transition="",b.transform=`translate3d(${d.left}px, 0, 0)`}}})}else{let c;s==="left"?c=m:c=window.innerWidth-f.padding[1]-2-l.width;const n=c-l.left;n?requestAnimationFrame(()=>{h.swiper.scroll(n)}):Q(l)}(r=l.router)==null||r.open(e)}else t.referer=a});j.on("closing",e=>{const{$el:t,options:l,left:a}=e;Object.assign(t.style,{opacity:0,zIndex:-1,transition:"",transform:`translate3d(${a-100}px, 0, 0)`});const{container:r,move:f}=Fe();if(r){const s=e.width;if(r.left<a)for(const m in g){const c=g[m];c.left>a&&(c.left-=s),c.left+=f;const{style:n}=c.$el;n.transition="",n.transform=`translate3d(${c.left}px, 0, 0)`}else for(const m in g){const c=g[m];c.left<a&&(c.left+=s),c.left+=f;const{style:n}=c.$el;n.transition="",n.transform=`translate3d(${c.left}px, 0, 0)`}}t.addEventListener("transitionend",s=>{if(s.target===t&&s.propertyName==="transform"){const m=A.indexOf(l);A.splice(m,1),A.length===0&&(C.value=!1,B.value=!1)}})});const pt=le({__name:"index",setup(e){const t=ye(()=>ce(()=>import("./guide.js"),["platform/multi/float/guide.js","platform/export-helper.js"])),l=z(!1),{initOptions:a}=h,{apps:r}=a;a.app&&A.push(a);const{urls:f,float:s="left"}=r;if(f)for(const o of f){const i=se(o);i&&!A.includes(i)&&(i.paths=o.split("/"),A.push(i))}if(r.padding===void 0&&(r.padding=[3,0]),H&&H.length)for(const o of H){const i=se(o);i&&!A.includes(i)&&(i.paths=o.split("/"),A.push(i))}A.length===0&&(C.value=!1);function m(){const o={37(){C.value===!1?(C.value=!0,requestAnimationFrame(()=>{h.swiper.move(-1),h.swiper.next()})):(h.swiper.move(-1),h.swiper.next())},39(){C.value===!1?(C.value=!0,requestAnimationFrame(()=>{h.swiper.move(1),h.swiper.previous()})):(h.swiper.move(1),h.swiper.previous())},65(){j.emit("sidebar.switch")},67(){ie()},83(){C.value=!C.value},112(p){p.preventDefault(),l.value=!l.value}};let i;document.addEventListener("keydown",p=>{const{keyCode:u}=p,v=o[u];v&&i===void 0&&(i=u,p.target.validity===void 0&&v(p))}),document.addEventListener("keyup",p=>{i===p.keyCode&&(i=void 0)})}const c=z();$e(()=>{const o=c.value;h.$apps=o,Ne(o),m(),localStorage.guideState===void 0&&setTimeout(()=>l.value=!0,2e3)});function n(o){"validity"in o.target||(o.preventDefault(),ie())}return(o,i)=>($(),k(D,null,[y("div",{class:L(["apps-mask full",{active:S(C)&&S(B),overview:S(C)&&S(X)}])},null,2),q(Y,{name:"fade"},{default:O(()=>[ke(y("section",{class:L(["apps split",{control:S(B),overview:S(X),[S(s)]:!0}]),ref_key:"$apps",ref:c,onContextmenu:n},[($(!0),k(D,null,K(S(A),p=>($(),I(ct,{key:p.url,options:p},null,8,["options"]))),128))],34),[[be,S(C)]])]),_:1}),q(Y,{name:"fade",appear:""},{default:O(()=>[l.value?($(),I(S(t),{key:0,onClose:i[0]||(i[0]=p=>l.value=!1)})):E("",!0)]),_:1})],64))}});const St=ae(pt,[["__scopeId","data-v-a54f3ee6"]]);export{St as default};
