import{d as l,j as i,h as u,E as _,a as e,b as t,e as o,F as m,r as d,u as p,_ as f}from"./index.b18d2e4b.js";const v=""+new URL("Evil1.442c785c.jpg",import.meta.url).href,g=""+new URL("Evil2.c239af54.jpg",import.meta.url).href,E=""+new URL("Evil3.3fc095f9.jpg",import.meta.url).href,h=""+new URL("Evil4.c90962f7.jpg",import.meta.url).href,k=""+new URL("Evil5.8f3a30e6.jpg",import.meta.url).href,L={class:"container"},b={class:"content"},B={class:"box"},j=["src"],x=l({__name:"album",setup(R){const r=p(),a=i([{url:v},{url:g},{url:E},{url:h},{url:k}]);u(()=>{const s=_.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{s.close()},500)});const c=()=>{r.go(-1)};return(s,w)=>(e(),t("div",L,[o("div",b,[(e(!0),t(m,null,d(a,(n,U)=>(e(),t("div",B,[o("img",{src:n.url,alt:""},null,8,j)]))),256))]),o("div",{class:"go-Back",onClick:c},"Go Back")]))}});const C=f(x,[["__scopeId","data-v-1ef9e5ef"]]);export{C as default};