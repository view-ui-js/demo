import{defineComponent as d,openBlock as r,createElementBlock as _,createElementVNode as s,withModifiers as h,toDisplayString as o,unref as t,createTextVNode as p,pushScopeId as v,popScopeId as y}from"/view-ui/libs/vue.js";import{Langs as g}from"/view-ui/libs/view.js";import{_ as m}from"../../export-helper.js";const i=c=>(v("data-v-75133748"),c=c(),y(),c),k={class:"gestures"},f={class:"gesture"},E=i(()=>s("div",{class:"icon center"},[s("i",{class:"ficon-zuoyouhuadong"})],-1)),S={class:"summary"},z={class:"gesture"},w=i(()=>s("div",{class:"icon center"},[s("i",{class:"ficon-shangxiahuadong"})],-1)),A={class:"summary"},C={class:"hotKey"},F={class:"itemKey"},D=i(()=>s("div",{class:"keystroke"},"S",-1)),K={class:"itemKey"},b=i(()=>s("div",{class:"keystroke"},"C",-1)),x={class:"itemKey"},B=i(()=>s("div",{class:"keystroke"},"A",-1)),I={class:"itemKey"},L=i(()=>s("div",null,[s("span",{class:"keystroke"},"\u2190"),s("span",{class:"keystroke"},"\u2192")],-1)),P=i(()=>s("i",{class:"ficon-cha"},null,-1)),H=i(()=>s("div",null,[s("span",{class:"keystroke"},"F1")],-1)),M=d({__name:"guide",emits:["close"],setup(c,{emit:u}){const e=g({shortcutKeys:{en:"Shortcut Keys",zh:"\u5FEB\u6377\u952E"},sidebar:{en:"Show/Hide application bar",zh:"\u663E\u793A / \u9690\u85CF\u5E94\u7528\u680F"},controlbar:{en:"Show/Hide control bar",zh:"\u663E\u793A / \u9690\u85CF\u63A7\u5236\u680F"},horizontally:{en:"Swipe horizontally to switch apps",zh:"\u6A2A\u5411\u6ED1\u52A8\uFF0C\u5207\u6362\u5E94\u7528"},scroll:{en:"Swipe vertically to scroll through page",zh:"\u7EB5\u5411\u6ED1\u52A8\uFF0C\u6EDA\u52A8\u6D4F\u89C8\u9875\u9762"},switchLayer:{en:"Switch application layer",zh:"\u5207\u6362\u5E94\u7528\u5C42"},turningPages:{en:"Switch apps",zh:"\u5B50\u5E94\u7528\u5207\u6362"},close:{en:"Do not remind again",zh:"\u4E0D\u518D\u63D0\u793A"}});function l(){u("close")}function a(){u("close"),localStorage.guideState=1}return(N,n)=>(r(),_("div",{class:"guide full center",onClick:l},[s("div",{class:"center-box",onClick:n[0]||(n[0]=h(()=>{},["stop"]))},[s("div",k,[s("div",f,[E,s("div",S,o(t(e).horizontally),1)]),s("div",z,[w,s("div",A,o(t(e).scroll),1)])]),s("div",C,[s("h3",null,o(t(e).shortcutKeys),1),s("div",F,[s("div",null,o(t(e).switchLayer),1),D]),s("div",K,[s("div",null,o(t(e).controlbar),1),b]),s("div",x,[s("div",null,o(t(e).sidebar),1),B]),s("div",I,[s("div",null,o(t(e).turningPages),1),L])]),s("div",{class:"close",onClick:a},[s("div",null,[p(o(t(e).close)+" ",1),P]),H])])]))}});const q=m(M,[["__scopeId","data-v-75133748"]]);export{q as default};
