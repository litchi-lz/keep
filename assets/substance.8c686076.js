import{d,g as l,j as u,h as _,E as m,a as c,b as r,e as p,x as h,y as g,z as v,A as o,B as y,C as x,_ as b}from"./index.b18d2e4b.js";const W=d({__name:"substance",setup(f){const i=l(),n=y(),e=u({parameter:"WxRequest",screenH:"",screenW:"",screenMdW:"",screenAW:""});return _(()=>{const a=document.documentElement.clientHeight,t=document.documentElement.clientWidth;e.screenH=a-80+"px",e.screenW=t-300+"px",e.screenMdW=(t-300)/1.3+"px",e.screenAW=(t-300)/2.1+"px",i.labelchang(!1),e.parameter=typeof n.query.mdId=="string"?n.query.mdId:"";const s=m.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{s.close()},500)}),(a,t)=>{const s=x("highlight");return c(),r("div",{class:"sub-body",style:o({width:e.screenW})},[p("div",{class:"markdown-body",style:o({height:e.screenH,width:e.screenMdW})},[h((c(),r("div",null,[(c(),g(v(e.parameter)))])),[[s]])],4)],4)}}});const B=b(W,[["__scopeId","data-v-e97e8279"]]);export{B as default};