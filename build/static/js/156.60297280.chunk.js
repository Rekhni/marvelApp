"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[156],{354:(t,e,a)=>{a.d(e,{A:()=>s});const c=a.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",n=a.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var r=a(579);const s=()=>(0,r.jsxs)("div",{className:"app__banner",children:[(0,r.jsx)("img",{src:c,alt:"Avengers"}),(0,r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,r.jsx)("br",{}),"Stay tuned!"]}),(0,r.jsx)("img",{src:n,alt:"Avengers logo"})]})},425:(t,e,a)=>{a.d(e,{A:()=>r});const c=a.p+"static/media/error.42292aa12b6bc303ce99.gif";var n=a(579);const r=()=>(0,n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})},507:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var c=a(971),n=a(43),r=a(897),s=a(502),o=a(425),i=a(354),l=a(579);const u=t=>{let{Component:e,dataType:a}=t;const{id:u}=(0,c.g)(),[d,h]=(0,n.useState)(null),{loading:m,error:p,getComic:g,getCharacter:b,clearError:f}=(0,r.A)();(0,n.useEffect)((()=>{v()}),[u]);const v=()=>{switch(f(),a){case"comic":g(u).then(w);break;case"character":b(u).then(w)}},w=t=>{h(t)},y=p?(0,l.jsx)(o.A,{}):null,x=m?(0,l.jsx)(s.A,{}):null,C=m||p||!d?null:(0,l.jsx)(e,{data:d});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.A,{}),y,x,C]})}},897:(t,e,a)=>{a.d(e,{A:()=>n});var c=a(43);const n=()=>{const{loading:t,request:e,error:a,clearError:n}=(()=>{const[t,e]=(0,c.useState)(!1),[a,n]=(0,c.useState)(null);return{loading:t,request:(0,c.useCallback)((async function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-type":"application/json"};e(!0);try{const n=await fetch(t,{method:a,body:c,headers:r});if(!n.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));const s=await n.json();return e(!1),s}catch(s){throw e(!1),n(s.message),s}}),[]),error:a,clearError:(0,c.useCallback)((()=>n(null)),[])}})(),r="https://gateway.marvel.com:443/v1/public/",s="apikey=3dbd2fb5862bd7966ff316bfe509a824",o=t=>({id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}),i=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{loading:t,error:a,clearError:n,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(r,"characters?limit=9&offset=").concat(t,"&").concat(s))).data.results.map(o)},getCharacter:async t=>{const a=await e("".concat(r,"characters/").concat(t,"?").concat(s));return o(a.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(r,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(s))).data.results.map(i)},getComic:async t=>{const a=await e("".concat(r,"comics/").concat(t,"?").concat(s));return i(a.data.results[0])},getCharacterByName:async t=>(await e("".concat(r,"characters?name=").concat(t,"&").concat(s))).data.results.map(o)}}}}]);
//# sourceMappingURL=156.60297280.chunk.js.map