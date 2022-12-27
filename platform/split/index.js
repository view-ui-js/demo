import{defineComponent as Y,ref as E,reactive as Z,onMounted as le,createApp as oe,unref as P,openBlock as u,createElementBlock as _,normalizeStyle as R,resolveComponent as T,Fragment as D,createVNode as W,Transition as j,withCtx as I,createBlock as b,resolveDynamicComponent as U,createCommentVNode as L,createElementVNode as p,shallowRef as $e,nextTick as G,normalizeClass as B,toDisplayString as M,renderList as ae,createTextVNode as K,withModifiers as we,pushScopeId as ke,popScopeId as be,defineAsyncComponent as Le,withDirectives as Pe,vShow as Ce}from"/view-ui/libs/vue.js";import v,{importAsyncComponent as H,instances as g,gap as O,addStyle as ee,asyncComponent_404 as Se,baseURL as ze,Lang as fe,widths as N,minAppWidith as X,getLevel as se,events as V,Langs as Ae,getChildOptions as ce,urlHistory as ie,getAppOptions as Ee,extendsOptions as Me,UA as Ie,urls as Fe}from"/view-ui/libs/view.js";import{controlbar as z,overview as q,openApp as Oe,addHistory as ve,apps as F,appsState as S,controllerSwitch as pe,maskOptions as Te,closeMask as De,maskState as ue,openMask as Xe}from"/view-ui/libs/state.js";import re,{IFrame as Be}from"/view-ui/libs/components.js";import{_ as x}from"../export-helper.js";import{_ as Ne}from"../index.js";import ge,{DisableEvent as Re,isTouch as We,Mask as ye,GetPointer as Ye}from"/view-ui/libs/pointer.js";import je,{getRightBaseLine as J,getMinMove as xe}from"/view-ui/libs/swiper.js";import{open as Ve,openBlank as qe,closeInstance as Ge}from"/view-ui/libs/navigator.js";import{message as de}from"/view-ui/libs/viewui.js";import He from"/view-ui/libs/router.js";import"/view-ui/libs/network.js";const Ue=["src"],Qe=Y({__name:"Main",setup(e){const t=E(),s=Z({}),{src:n,iframe:o}=v.initOptions.main;return typeof n=="string"&&le(()=>{H(n).then(i=>{if(i.style&&Object.assign(s,i.style),i.install)i.install(t.value);else{const a=oe(i);a.use(re),a.mount(t.value)}})}),(i,a)=>P(o)?(u(),_("iframe",{key:0,class:"main",src:P(o),frameborder:"0",style:R(s)},null,12,Ue)):(u(),_("section",{key:1,class:"main",style:R(s),ref_key:"mount",ref:t},null,4))}});const Ke=x(Qe,[["__scopeId","data-v-7449f076"]]);function Je(e){const t=new ge(e);t.use(je(e,{inertia:4,gesture:"level"}));let s;t.on("start",o=>{if(s=void 0,"validity"in o.target)return Re();const{startX:i}=t;for(const a in g){const c=g[a],{left:f,width:d}=c,l=f+d;if(i>f&&i<l){s=c;break}}v.instance=s}),t.on("lock",()=>{if(!!s&&!!z.value&&t.dir==="Y"){t.lastX=t.startX,t.lastY=t.startY,t.last2X=t.startX,t.last2Y=t.startY,Object.assign(s.$el.style,{zIndex:100,transition:"unset"}),t.initLeft=s.left;for(const o in g){const i=g[o];i!==s&&Object.assign(i.$el.style,{zIndex:"",transition:""})}}}),t.on("vertical",()=>{if(!z.value||!s)return;const{clientX:o,clientY:i,lastX:a}=t,c=o-t.startX+t.initLeft,f=i-t.startY;s.$el.style.transform=`translate3d(${c}px, ${f}px, 0)`;const d=s.width+O;if(o>a)for(const l in g){const r=g[l];if(r===s)continue;const h=r.left+r.width/2;a<h&&o>=h&&(r.left-=d,r.$el.style.transform=`translate3d(${r.left}px, 0, 0)`,s.left=r.left+r.width+O)}else if(o<a)for(const l in g){const r=g[l];if(r===s)continue;const h=r.left+r.width/2;a>h&&o<=h&&(s.left=r.left,r.left+=d,r.$el.style.transform=`translate3d(${r.left}px, 0, 0)`)}t.last2X=t.lastX,t.last2Y=t.lastY,t.lastX=o,t.lastY=i});let n;We===!1&&(t.on("lock",o=>{if(!!s&&t.dir!=="X")if(z.value)ye.style.cursor="move";else{let i=o.target;for(;i;){if(i.classList.contains("scroll-y")){n=i;break}const{parentElement:a}=i;if(a)i=a;else{n=i;break}}n.classList.add("scrollbar")}}),t.on("vertical",()=>{z.value||n&&n.scroll(0,n.scrollTop-t.move)}),t.on("end",()=>{z.value||t.dir==="Y"&&n&&(n.classList.remove("scrollbar"),n=void 0)})),t.on("end",()=>{if(!!s&&!!z.value&&t.dir==="Y"){const{style:o}=s.$el;Object.assign(o,{transition:"",transform:`translate3d(${s.left}px, 0, 0)`})}}),t.on("click",({target:o})=>{q.value?(q.value=!1,e.style.transformOrigin=`${t.clientX}px 50%`):o.getAttribute("event")==="mask"?z.value=!z.value:o===e&&(z.value=!1)}),v.appsPointer=t}function he(e,t,s){ee(t);const{pages:n,style:o,transition:i="fade"}=t;s.style=o,s.transition=i,n&&e&&(s.inlinePage=n[e])}const Ze=Y({props:["page","paths"],data(){const[e,...t]=this.paths,{page:s}=this,n={subPaths:t,style:void 0,inlinePage:void 0,open:!1};return s.__asyncLoader===void 0?he(e,s,n):s.__asyncLoader().then(o=>he(e,o,this)),n},methods:{back(){const{$parent:e}=this;e.inlinePage=void 0,e.subPaths=[]}},watch:{paths(e){const{style:t,pages:s}=this.page;if(this.style=t,s){const[n,...o]=e,i=s[n];if(i){ee(i),this.subPaths=o,this.inlinePage=i;return}}this.inlinePage=void 0,this.subPaths=[]}},mounted(){this.open=!0,this.$nextTick(()=>{this.$refs.page.back=()=>this.open=!1})}});function et(e,t,s,n,o,i){const a=T("Inline",!0);return u(),_(D,null,[W(j,{name:"fade",onAfterLeave:e.back},{default:I(()=>[e.open?(u(),_("div",{key:0,class:"page scroll-y",ref:"page",style:R(e.style)},[(u(),b(U(e.page)))],4)):L("",!0)]),_:1},8,["onAfterLeave"]),e.inlinePage?(u(),b(a,{key:0,page:e.inlinePage,paths:e.subPaths},null,8,["page","paths"])):L("",!0)],64)}const tt=x(Ze,[["render",et],["__scopeId","data-v-5cd87e38"]]);function me(e,t,s){ee(t);const{style:n,pages:o}=t;s.style=n,o&&e&&(s.splitPage=o[e])}const st=Y({props:["page","paths"],data(){const[e,...t]=this.paths,{page:s}=this,n={style:void 0,level:100,subPaths:t,splitPage:void 0,open:!1};return s.__asyncLoader===void 0?me(e,s,n):s.__asyncLoader().then(o=>me(e,o,this)),n},methods:{back(){const{$parent:e}=this;e.splitPage=void 0,e.subPaths=[]}},watch:{paths(e){const{style:t,pages:s}=this.page;if(this.style=t,s){const[n,...o]=e,i=s[n];if(i){ee(i),this.subPaths=o,this.splitPage=i;return}}this.subPaths=[],this.splitPage=void 0}},mounted(){const{container:e}=this.$router;e.app.flex===!0?e.app.flex=!1:this.splitPage===void 0&&e.split&&this.$nextTick(()=>{const t=e.$refs.mount.childElementCount*100;t>e.level&&e.setLevel(t)}),this.open=!0,this.$nextTick(()=>{this.$refs.page.back=()=>this.open=!1})},unmounted(){if(this.splitPage===void 0){const{container:e}=this.$router;if(e.split){const t=e.$refs.mount.childElementCount*100;t<e.level&&e.setLevel(t)}}}});const it={class:"page scroll-y",ref:"page"};function nt(e,t,s,n,o,i){const a=T("container"),c=T("Split",!0);return u(),_(D,null,[W(j,{name:"fade",onAfterLeave:e.back},{default:I(()=>[e.open?(u(),b(a,{key:0,class:"child-container",style:R(e.style),level:e.level},{default:I(()=>[p("div",it,[(u(),b(U(e.page)))],512)]),_:1},8,["style","level"])):L("",!0)]),_:1},8,["onAfterLeave"]),e.splitPage?(u(),b(c,{key:0,paths:e.subPaths,page:e.splitPage},null,8,["paths","page"])):L("",!0)],64)}const lt=x(st,[["render",nt],["__scopeId","data-v-3e7b6ca2"]]),ot=Y({props:["entry","pages","paths","style"],components:{Inline:tt,Split:lt},data(){const{$router:e}=this;e.pagesInstance=this;const[t,...s]=this.paths,n={splitPage:void 0,inlinePage:void 0,subPaths:s};if(t){const o=this.pages[t];o?o.type==="inline"?n.inlinePage=o:n.splitPage=o:(n.splitPage=Se,n.subPaths=[])}return n},methods:{router(e,t){const{pages:s}=this,[n,...o]=e,i=s[n];i?(i.__asyncLoader?i.__asyncLoader().then(a=>{s[n]=a,a.type==="inline"?this.inlinePage=a:this.splitPage=a}):i.type==="inline"?this.inlinePage=i:this.splitPage=i,this.subPaths=o):(this.inlinePage=void 0,this.splitPage=void 0,this.subPaths=[])}}});const at={class:"page scroll-y"};function rt(e,t,s,n,o,i){const a=T("Inline"),c=T("container"),f=T("Split");return u(),_(D,null,[W(c,{class:"entry-container",style:R(e.style),level:"100"},{default:I(()=>[p("div",at,[(u(),b(U(e.entry)))]),e.inlinePage?(u(),b(a,{key:0,page:e.inlinePage,paths:e.subPaths},null,8,["page","paths"])):L("",!0)]),_:1},8,["style"]),e.splitPage?(u(),b(f,{key:0,page:e.splitPage,paths:e.subPaths},null,8,["page","paths"])):(u(),b(c,{key:1,class:"child-container empty"}))],64)}const ft=x(ot,[["render",rt],["__scopeId","data-v-1d659e97"]]),ct=Ae({QRCode:{en:"Scan Code",zh:"\u4E8C\u7EF4\u7801"},split:{en:"Split Mode",zh:"\u5206\u5C4F\u6A21\u5F0F"},single:{en:"Single Mode",zh:"\u5355\u5C4F\u6A21\u5F0F"},full:{en:"Full Screen",zh:"\u5168\u5C4F\u663E\u793A"},multi:{en:"Multiple",zh:"\u590D\u5236\u5E94\u7528"},copy:{en:"Copy Link",zh:"\u590D\u5236\u94FE\u63A5"},newTab:{en:"New Tab",zh:"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00"},reload:{en:"Reload",zh:"\u5237\u65B0"},back:{en:"Back",zh:"\u8FD4\u56DE"},share:{en:"Share",zh:"\u5206\u4EAB"},close:{en:"Close App",zh:"\u5173\u95ED\u5E94\u7528"},drag:{en:"Drag up and down to sort",zh:"\u4E0A\u4E0B\u62D6\u52A8\u6392\u5E8F"}}),pt={100:N[100],200:N[200],300:N[300],400:N[400],500:N[500]},ut=Y({components:{IFrame:Be},props:["options"],setup({options:e}){const{app:t}=e,{split:s=!1,level:n=100,style:o={}}=t;return{app:t,langs:ct,levels:pt,overview:q,controlbar:z,style:Z(o),single:E(!0),split:E(s),splitSwitch:E(!1),level:E(n),zoomLayer:E(!1),init:E(!1),reload:E(!0),loading:E(!0),maskComponent:$e(void 0)}},computed:{href(){const{url:e}=this.options;return`${ze}/#${e}`}},methods:{open:Ve,openBlank:qe,onmulti(){this.multiId?this.multiId++:this.multiId=1;const e={...this.options,referer:this};e.url+=`?mid=${this.multiId}`,Oe(e)},async oncopy(){navigator.clipboard?(await navigator.clipboard.writeText(this.href),de.success(fe({en:`Copy Success\b ${this.href}`,zh:`\u590D\u5236\u6210\u529F\b ${this.href}`}))):de.error(fe({en:"Copy Failed",zh:"\u590D\u5236\u5931\u8D25"}))},setWidth(e){let s=J()-(this.left+e),n=e-this.width;s<0?n+=s:s=0,this.width=e,this.$el.style.width=`${e}px`;for(const o in g){const i=g[o];i.left>this.left?i.left+=n:i.left+=s;const{style:a}=i.$el;a.transition="",a.transform=`translate3d(${i.left}px, 0, 0)`}},setLevel(e){const t=N[e];this.level=Number(e);const s=this.level/100-1;this.setWidth(t+s)},onSplit(e){this.single||(this.split=e,e?this.setLevel(this.$refs.mount.childElementCount*100):(this.level=100,this.setWidth(X)))},fullScreen(){const e=J(),{left:t}=v.initOptions.apps;if(t+this.width===e){let s=100;const{app:n}=this;n.iframe?n.level&&(s=n.level):this.split&&(s=this.$refs.mount.childElementCount*100),this.level=s;const o=N[s],i=this.width-o;this.width=o,this.$el.style.width=`${o}px`;for(const a in g){const c=g[a],{style:f}=c.$el;c.left>this.left&&(c.left-=i),f.transition="",f.transform=`translate3d(${c.left}px, 0, 0)`}}else{const s=e-t,n=t-this.left,o=n-(this.width-s);this.width=s,this.level=se(s),this.$el.style.width=`${s}px`;for(const i in g){const a=g[i],{style:c}=a.$el;a.left<=this.left?a.left+=n:a.left+=o,c.transition="",c.transform=`translate3d(${a.left}px, 0, 0)`}}},onclose(){Ge(this)},onCloseResize(e){this.controlbar?(this.controlbar=!1,this.resizeTimeou()):e.target===e.currentTarget?this.zoomLayer=!1:this.resizeTimeou()},resizeTimeou(){clearTimeout(this.clearTimeouId),this.clearTimeouId=setTimeout(()=>this.zoomLayer=!1,3e3)},drawer(){this.controlbar=!0},openMask(e){H(e).then(t=>this.maskComponent=t)},closeMask(){this.maskComponent=void 0},context(){return this},autoAlign(){this.fullScreen()},zoombar(){const{style:e}=this.$el,t=new ge(this.$refs.zoombar,{angle:20});let s=0,n=0;const{$apps:o}=v;t.on("lock",()=>{t.dir==="X"?(clearTimeout(this.clearTimeouId),s=this.$el.clientWidth,e.transition="unset",this.originlLeft=this.left,this.zoomLayer=!0):(q.value=!0,ye.style.cursor="col-resize",n=t.clientX,o.style.transformOrigin=`${t.clientX}px 50%`,V.emit("sidebarSwitch",!1))}),t.on("level",()=>{const{move:a}=t;s+=a;const c=this.originlLeft-this.left;if(s>X){if(c===0)for(const f in g){const d=g[f];d.left>this.left&&(d.left+=a);const{style:l}=d.$el;l.transition="unset",l.transform=`translate3d(${d.left}px, 0, 0)`}else{const f=this.left+this.width+O,d=t.current+8-f;s=t.current-this.originlLeft-8;for(const l in g){const r=g[l];r.left>this.left?r.left+=d:r.left+=c;const{style:h}=r.$el;h.transition="unset",h.transform=`translate3d(${r.left}px, 0, 0)`}}if(e.width=`${s}px`,this.level=se(s),this.width=s,this.single===!1){const{children:f}=this.$refs.mount;for(const d of f){const l=String(se(d.clientWidth));l!==d.getAttribute("level")&&d.setAttribute("level",l)}}}else{const f=Math.ceil(Math.abs((s-X)/15))||1;if(this.width===X)v.swiper.move(a/f);else{this.level=100;const d=X-this.width,r=(a-d)/f,h=r+d;s=X,e.width=`${X}px`,this.width=X;for(const $ in g){const y=g[$];y.left>this.originlLeft?y.left+=h:y.left+=r;const{style:w}=y.$el;w.transition="unset",w.transform=`translate3d(${y.left}px, 0, 0)`}}}}),t.on("vertical",()=>{const{current:a,start:c,clientX:f}=t,d=f-n;v.swiper.move(d*4),n=f}),t.on("end",()=>{if(t.dir==="X"){const a=this.originlLeft-this.left;a&&v.swiper.scroll(a),this.resizeTimeou()}});let i=0;t.on("click",a=>{this.zoomLayer=!0,this.controlbar=!1,this.resizeTimeou(),a.timeStamp-i<300&&this.autoAlign(),i=a.timeStamp})},async onreload(){this.reload=!1,this.loading=!0,await G(),this.reload=!0,await G(),this.createApp&&this.createApp()},onIFrameLoad(e){this.loading=!1,e(this)}},async mounted(){var d;await G();let e=N[this.level];const t=J(),{left:s}=v.initOptions.apps,{options:n,app:o}=this,{referer:i}=n;if(i){let l=i.left+i.width+O;const r=t-(l+e);r<0&&(l+=r,v.swiper.scroll(r)),this.left=l>s?l:s}else{const l=Object.values(g);if(l.length){let r,h,$,y=Number.MAX_SAFE_INTEGER,w=Number.MIN_SAFE_INTEGER,k=Number.MIN_SAFE_INTEGER;for(const m of l)m.left<y&&(r=m,y=m.left),m.left>k&&(k=m.left,k+m.width<=t&&($=m)),m.left>w&&(h=m,w=m.left);if(h.left<0){this.left=s;const m=s-(h.left+h.width+O);v.swiper.scroll(m)}else if($){let m=$.left+$.width+O;const A=t-(m+e);A<0&&(m+=A,v.swiper.scroll(A)),this.left=m}else{const m=s-r.left;v.swiper.scroll(m),this.left=s}}else{const r=(d=v.initOptions.apps)==null?void 0:d.align;this.left=r==="right"?t-e:s}}if(o.flex===!0){const l=N[400],r=t-this.left;r<l?e=r:e=l}this.width=e;const{style:a}=this.$el;a.opacity=0,a.width=`${e}px`,a.transition="unset";const c=this.left+200;a.transform=`translate3d(${c}px, 0, 0)`,requestAnimationFrame(()=>{a.opacity=1,a.transition="",a.transform=`translate3d(${this.left}px, 0, 0)`});const f=e+O;for(const l in g){const r=g[l];r.left>=this.left&&(r.left+=f,Object.assign(r.$el.style,{transition:"",transform:`translate3d(${r.left}px, 0, 0)`}))}if(g[n.url]=this,o.src){const l=await H(o.src);this.init=!0,l.name&&(o.name=l.name,delete l.name),l.icon&&(o.icon=l.icon),l.color&&(o.color=l.color);const{install:r,pages:h,style:$}=l,{level:y}=this;let w;const k={instance:this,level:y};if(r===void 0){if(h){let{paths:m}=n;m?m.shift():m=[],w={entry:l,pages:h,style:$,paths:m},this.single=!1;let A=!1;for(const Q in h){const te=h[Q];te.__asyncLoader?te.__asyncLoader().then(_e=>{A===!1&&_e.type===void 0&&(A=!0,this.split=!0,this.splitSwitch=!0)}):te.type===void 0&&(A=!0)}A&&(this.split=!0,this.splitSwitch=!0),Object.assign(k,ft)}else this.split=!1,Object.assign(k,l),$&&Object.assign(this.style,$);await G(),this.createApp=()=>{this.loading=!1;const m=oe(k,w);m.use(re);const A=this.$refs.mount;A.back=this.onclose;const Q=new He({app:m,options:n,el:A,container:this});this.router=Q,m.config.globalProperties.$router=Q,this.pages=m.mount(A)}}else await G(),this.createApp=()=>{this.loading=!1;const m=this.$refs.mount;m.back=this.onclose,l.install(m,{app:this})};this.createApp()}V.emit("opened",n),ve(n),this.zoombar()}});const C=e=>(ke("data-v-48c2329c"),e=e(),be(),e),dt={key:0,class:"titlebar"},ht={class:"title"},mt=C(()=>p("div",{class:"view-mask",event:"mask"},null,-1)),vt=C(()=>p("i",{class:"ficon-fullscreen"},null,-1)),gt=C(()=>p("i",{class:"ficon-pages_outlined"},null,-1)),yt=C(()=>p("div",{class:"item"},"1",-1)),_t=C(()=>p("div",{class:"item"},"2",-1)),$t=C(()=>p("div",{class:"item"},"3",-1)),wt={class:"full"},kt=C(()=>p("i",{class:"ficon-fenping1"},null,-1)),bt={class:"header item"},Lt={class:"title"},Pt=["title"],Ct=C(()=>p("i",{class:"ficon-xinchuangkou"},null,-1)),St=[Ct],zt={key:1,class:"button"},At=C(()=>p("i",{class:"ficon-up"},null,-1)),Et=[At],Mt={class:"buttons"},It=C(()=>p("i",{class:"ficon-reload"},null,-1)),Ft=C(()=>p("i",{class:"ficon-copy"},null,-1)),Ot=C(()=>p("i",{class:"ficon-erweima"},null,-1)),Tt=C(()=>p("i",{class:"ficon-link"},null,-1)),Dt=C(()=>p("i",{class:"ficon-icons_send"},null,-1)),Xt=["title"],Bt=C(()=>p("i",{class:"ficon-cha"},null,-1)),Nt=[Bt],Rt={class:"zoombar",ref:"zoombar"};function Wt(e,t,s,n,o,i){const a=T("container"),c=T("IFrame"),f=T("item"),d=T("items");return u(),_("section",{class:B(["app",{overview:e.overview}])},[e.overview?(u(),_("div",dt,[p("div",ht,[e.app.icon?(u(),_("i",{key:0,class:B(e.app.icon),style:R({color:e.app.color})},null,6)):L("",!0),p("span",null,M(e.app.name),1)])])):L("",!0),p("div",{class:B(["view",{controlbar:e.controlbar,zoomLayer:e.zoomLayer,loading:e.loading}]),style:R(e.style)},[e.reload?(u(),b(j,{key:0,name:"fade",appear:""},{default:I(()=>[e.app.src?(u(),_(D,{key:0},[e.init?(u(),_(D,{key:0},[e.single?(u(),b(a,{key:0,class:"mount scroll-y",level:e.level,ref:"mount"},null,8,["level"])):(u(),_("div",{key:1,class:B(["mount",[e.split?"flat":"fixed"]]),ref:"mount"},null,2))],64)):L("",!0)],64)):e.app.iframe?(u(),b(c,{key:1,src:e.app.iframe,gesture:e.app.gesture,onLoad:e.onIFrameLoad},null,8,["src","gesture","onLoad"])):L("",!0)]),_:1})):L("",!0),mt,W(j,{name:"fade",appear:""},{default:I(()=>[e.maskComponent?(u(),b(U(e.maskComponent),{key:0,context:e.context},null,8,["context"])):L("",!0)]),_:1}),p("div",{class:"view-display",onClick:t[4]||(t[4]=(...l)=>e.onCloseResize&&e.onCloseResize(...l))},[W(d,{class:"view-levels",onClick:t[0]||(t[0]=l=>e.setLevel(l.target.getAttribute("level")))},{default:I(()=>[(u(!0),_(D,null,ae(e.levels,(l,r)=>(u(),b(f,{key:r,level:r,class:B({active:r<=e.level})},{default:I(()=>[K(M(r)+"%",1)]),_:2},1032,["level","class"]))),128))]),_:1}),p("div",{class:"full-screen",onClick:t[1]||(t[1]=(...l)=>e.fullScreen&&e.fullScreen(...l))},[vt,K(" "+M(e.langs.full),1)]),e.splitSwitch?(u(),_("div",{key:0,class:B(["view-mode",{split:e.split}])},[p("div",{class:"single-mode",onClick:t[2]||(t[2]=l=>e.onSplit(!1))},[gt,K(" "+M(e.langs.single),1)]),p("div",{class:"split-mode",onClick:t[3]||(t[3]=l=>e.onSplit(!0))},[yt,_t,$t,p("div",wt,[kt,K(" "+M(e.langs.split),1)])])],2)):L("",!0)]),p("div",{class:"view-drawer",onClick:t[11]||(t[11]=(...l)=>e.drawer&&e.drawer(...l))},[p("div",bt,[p("div",Lt,[e.app.icon?(u(),_("i",{key:0,class:B(e.app.icon),style:R({color:e.app.color})},null,6)):L("",!0),p("span",null,M(e.app.name),1)]),e.controlbar?(u(),_("div",{key:0,class:"button",title:e.langs.newTab,onClick:t[5]||(t[5]=l=>e.openBlank(e.options.url))},St,8,Pt)):(u(),_("div",zt,Et))]),p("div",Mt,[p("div",{class:"button",onClick:t[6]||(t[6]=(...l)=>e.onreload&&e.onreload(...l))},[It,p("span",null,M(e.langs.reload),1)]),p("div",{class:"button",onClick:t[7]||(t[7]=(...l)=>e.onmulti&&e.onmulti(...l))},[Ft,p("span",null,M(e.langs.multi),1)]),p("div",{class:"button",onClick:t[8]||(t[8]=l=>e.openMask("mask/qrcode"))},[Ot,p("span",null,M(e.langs.QRCode),1)]),p("div",{class:"button",onClick:t[9]||(t[9]=(...l)=>e.oncopy&&e.oncopy(...l))},[Tt,p("span",null,M(e.langs.copy),1)]),p("div",{class:"button",onClick:t[10]||(t[10]=l=>e.openMask("mask/share"))},[Dt,p("span",null,M(e.langs.share),1)])]),p("div",{class:"bottom-line",title:e.langs.drag},null,8,Xt)]),p("div",{class:"close",onClick:t[12]||(t[12]=we((...l)=>e.onclose&&e.onclose(...l),["stop"]))},Nt)],6),p("div",Rt,null,512)],2)}const Yt=x(ut,[["render",Wt],["__scopeId","data-v-48c2329c"]]),jt=Y({__name:"index",setup(e){const t=E(!1),s=Le(()=>Ne(()=>import("./Apps/guide.js"),["platform/split/Apps/guide.js","platform/export-helper.js"])),{initOptions:n}=v,{apps:o}=n;n.app&&F.push(n);const{urls:i,align:a="left"}=o;if(i)for(const l of i){const r=ce(l);r&&!F.includes(r)&&(r.paths=l.split("/"),F.push(r))}if(o.left===void 0&&(o.left=3),ie&&ie.length)for(const l of ie){const r=ce(l);r&&!F.includes(r)&&(r.paths=l.split("/"),F.push(r))}F.length===0&&(S.value=!1);function c(){const l={37(){S.value===!1?(S.value=!0,requestAnimationFrame(()=>{v.swiper.move(-1),v.swiper.next()})):(v.swiper.move(-1),v.swiper.next())},39(){S.value===!1?(S.value=!0,requestAnimationFrame(()=>{v.swiper.move(1),v.swiper.previous()})):(v.swiper.move(1),v.swiper.previous())},65(){V.emit("sidebarSwitch")},67(){pe()},83(){S.value=!S.value},112(h){h.preventDefault(),t.value=!t.value}};let r;document.addEventListener("keydown",h=>{const{keyCode:$}=h,y=l[$];y&&r===void 0&&(r=$,h.target.validity===void 0&&y(h))}),document.addEventListener("keyup",({keyCode:h})=>{r===h&&(r=void 0)})}const f=E();le(()=>{v.$apps=f.value,Je(f.value),c(),localStorage.guideState===void 0&&setTimeout(()=>t.value=!0,2e3)});function d(l){"validity"in l.target||(l.preventDefault(),pe())}return(l,r)=>(u(),_(D,null,[p("div",{class:B(["apps-mask full",{active:P(S)&&P(z),overview:P(S)&&P(q)}])},null,2),W(j,{name:"fade"},{default:I(()=>[Pe(p("section",{class:B(["apps split",{control:P(z),overview:P(q),[P(a)]:!0}]),ref_key:"$apps",ref:f,onContextmenu:d},[(u(!0),_(D,null,ae(P(F),h=>(u(),b(Yt,{key:h.url,options:h},null,8,["options"]))),128))],34),[[Ce,P(S)]])]),_:1}),W(j,{name:"fade",appear:""},{default:I(()=>[t.value?(u(),b(P(s),{key:0,onClose:r[0]||(r[0]=h=>t.value=!1)})):L("",!0)]),_:1})],64))}});const xt=x(jt,[["__scopeId","data-v-8fbf25d8"]]),Vt=["src"],qt=Y({__name:"Mask",setup(e){const t=E(),{src:s,iframe:n}=Te.mask;return typeof s=="string"&&le(()=>{H(s).then(o=>{if(o.install)o.install(t.value);else{const i=oe(o,{context(){return{closeMask:De}}});i.use(re),i.mount(t.value)}})}),(o,i)=>P(n)?(u(),_("iframe",{key:0,class:"mask",src:P(n),frameborder:"0"},null,8,Vt)):(u(),_("section",{key:1,class:"mask",ref_key:"mount",ref:t},null,512))}});const Gt=x(qt,[["__scopeId","data-v-88a27de4"]]);function ne(e){const{style:t}=e.$el;t.transition="all 0.1s",t.transform=`translate3d(${e.left}px, 20px, 0)`,e.$el.addEventListener("transitionend",()=>{t.transform=`translate3d(${e.left}px, 0, 0)`},{once:!0})}V.on("opening",(e,t,s)=>{var o;S.value===!1&&(S.value=!0);const n=Ye()===v.appsPointer?v.instance:void 0;if(s){const i=v.initOptions.apps,{align:a="left",left:c}=i;if(n){if(n===s)return;requestAnimationFrame(()=>{const f=s.left,d=s.width+O,l=n.left;if(f<l){const r=l-d,h=l-(c+d),$=h>0?0:-h;if(r===f)$?v.swiper.scroll($):ne(s);else for(const y in g){const w=g[y],{style:k}=w.$el;k.zIndex=1,w.left>f&&w.left<l?w.left-=d:w===s&&(k.zIndex="",w.left=r),w.left+=$,k.transition="",k.transform=`translate3d(${w.left}px, 0, 0)`}}else{const r=J(),h=l+n.width+O,$=h+s.width;let y=r-$;if(y>0&&(y=0),f===h)y?v.swiper.scroll(y):ne(s);else for(const w in g){const k=g[w],{style:m}=k.$el;m.zIndex=1,k.left>l&&k.left<f?k.left+=d:k===s&&(k.left=h,m.zIndex=""),k.left+=y,m.transition="",m.transform=`translate3d(${k.left}px, 0, 0)`}}})}else{let f;a==="left"?f=c:f=window.innerWidth-i.right-2-s.width;const d=f-s.left;d?requestAnimationFrame(()=>{v.swiper.scroll(d)}):ne(s)}(o=s.router)==null||o.open(e)}else t.referer=n});V.on("closing",e=>{const{$el:t,options:s,left:n}=e;Object.assign(t.style,{opacity:0,zIndex:-1,transition:"",transform:`translate3d(${n-X}px, 0, 0)`});const{container:o,move:i}=xe();if(o){const a=e.width+O;if(o.left<n)for(const c in g){const f=g[c];f.left>n&&(f.left-=a),f.left+=i;const{style:d}=f.$el;d.transition="",d.transform=`translate3d(${f.left}px, 0, 0)`}else for(const c in g){const f=g[c];f.left<n&&(f.left+=a),f.left+=i;const{style:d}=f.$el;d.transition="",d.transform=`translate3d(${f.left}px, 0, 0)`}}t.addEventListener("transitionend",a=>{const c=F.indexOf(s);F.splice(c,1),F.length===0&&(S.value=!1,z.value=!1)},{once:!0,capture:!0})});const os=Y({__name:"index",setup(e){const t=Z({main:!1,apps:!1}),s=Z([]);V.on("initVive",i=>{o(i),ue.value=!1});function n(){const i=sessionStorage[v.pathname];if(i){const a=i.split(",");for(const c of a){const f=Fe[c];f&&ve(f)}}}function o({name:i,brand:a,main:c,apps:f,mask:d,...l}){if(i&&(document.title=`${i} - ${a}`),t.main!==!0&&c){c.style&&Object.assign(document.body.style,c.style),(c.src||c.iframe)&&(t.main=!0),f&&(t.apps=!0);for(const r in l){const h=l[r];if(h){const{src:$,apply:y}=h;$&&y==="split"&&H($).then(w=>s.push(w))}}n()}}return v.initDataPromise.then(i=>{const a=Ee(v.pathname);v.initOptions=Me(a);const{mask:c,...f}=a;c&&Xe(a),o(f)}),Ie==="Firefox"&&document.addEventListener("dragstart",i=>i.preventDefault()),(i,a)=>(u(),_(D,null,[t.main?(u(),b(Ke,{key:0})):L("",!0),t.apps?(u(),b(xt,{key:1})):L("",!0),(u(!0),_(D,null,ae(s,c=>(u(),b(U(c)))),256)),W(j,{name:"fade"},{default:I(()=>[P(ue)?(u(),b(Gt,{key:0})):L("",!0)]),_:1})],64))}});export{os as default};
