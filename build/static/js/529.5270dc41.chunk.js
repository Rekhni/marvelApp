"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[529],{425:(e,t,c)=>{c.d(t,{A:()=>i});const a=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var n=c(579);const i=()=>(0,n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},150:(e,t,c)=>{c.r(t),c.d(t,{default:()=>m});var a=c(43),n=c(971),i=c(318),s=c(897),r=c(502),o=c(425),l=c(579);const u=e=>{let{comic:t}=e;const{title:c,description:a,pageCount:n,thumbnail:s,language:r,price:o}=t;let u={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(u={objectFit:"unset"}),(0,l.jsxs)("div",{className:"single-comic",children:[(0,l.jsx)("img",{src:s,alt:c,className:"single-comic__img",style:u}),(0,l.jsxs)("div",{className:"single-comic__info",children:[(0,l.jsx)("h2",{className:"single-comic__name",children:c}),(0,l.jsx)("p",{className:"single-comic__descr",children:a}),(0,l.jsx)("p",{className:"single-comic__descr",children:n}),(0,l.jsxs)("p",{className:"single-comic__descr",children:["Language: ",r]}),(0,l.jsx)("div",{className:"single-comic__price",children:o})]}),(0,l.jsx)(i.N_,{to:"/comics",children:"Back to all"})]})},m=()=>{const{comicId:e}=(0,n.g)(),[t,c]=(0,a.useState)(null),{loading:i,error:m,getComic:d,clearError:h}=(0,s.A)();(0,a.useEffect)((()=>{g()}),[e]);const g=()=>{h(),d(e).then(p)},p=e=>{c(e)},b=m?(0,l.jsx)(o.A,{}):null,f=i?(0,l.jsx)(r.A,{}):null,v=i||m||!t?null:(0,l.jsx)(u,{comic:t});return(0,l.jsxs)(l.Fragment,{children:[b,f,v]})}},897:(e,t,c)=>{c.d(t,{A:()=>n});var a=c(43);const n=()=>{const{loading:e,request:t,error:c,clearError:n}=(()=>{const[e,t]=(0,a.useState)(!1),[c,n]=(0,a.useState)(null);return{loading:e,request:(0,a.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-type":"application/json"};t(!0);try{const n=await fetch(e,{method:c,body:a,headers:i});if(!n.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(n.status));const s=await n.json();return t(!1),s}catch(s){throw t(!1),n(s.message),s}}),[]),error:c,clearError:(0,a.useCallback)((()=>n(null)),[])}})(),i="https://gateway.marvel.com:443/v1/public/",s="apikey=3dbd2fb5862bd7966ff316bfe509a824",r=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:e,error:c,clearError:n,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await t("".concat(i,"characters?limit=9&offset=").concat(e,"&").concat(s))).data.results.map(r)},getCharacter:async e=>{const c=await t("".concat(i,"characters/").concat(e,"?").concat(s));return r(c.data.results[0])},getAllComics:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await t("".concat(i,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(s))).data.results.map(o)},getComic:async e=>{const c=await t("".concat(i,"comics/").concat(e,"?").concat(s));return o(c.data.results[0])}}}}}]);
//# sourceMappingURL=529.5270dc41.chunk.js.map