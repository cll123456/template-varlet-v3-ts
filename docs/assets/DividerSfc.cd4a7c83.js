import{L as J,f as K,g as O,h as Q}from"./index.85d163f9.js";import{d as X,b as g,o as j,x as G,E as V,i as E,c as p,e as m,g as y,q as I,l as i,F as _,k as F,n as R,P as S,t as L,f as Y,Q as C,J as Z,S as ee,m as te,w as oe,X as re,p as ne}from"./index.9a15413c.js";const T=e=>typeof e=="string",ae=e=>typeof e=="boolean",D=e=>typeof e=="number",ie=e=>Array.isArray(e),le=e=>T(e)&&e.endsWith("rem"),se=e=>T(e)&&e.endsWith("px")||D(e),ue=e=>T(e)&&e.endsWith("vw"),ce=e=>T(e)&&e.endsWith("vh"),de=e=>{if(D(e))return e;if(se(e))return+e.replace("px","");if(ue(e))return+e.replace("vw","")*window.innerWidth/100;if(ce(e))return+e.replace("vh","")*window.innerHeight/100;if(le(e)){const o=+e.replace("rem",""),d=window.getComputedStyle(document.documentElement).fontSize;return o*parseFloat(d)}return T(e)?fe(e):0},fe=e=>e==null?0:T(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):ae(e)?Number(e):e,B=(e,o)=>e==null?o:e;function ge(e){const o=`var-${e}`;return{n:c=>c?c.startsWith("--")?`${o}${c}`:`${o}__${c}`:o,classes:(...c)=>c.map(h=>{if(ie(h)){const[n,l,v=null]=h;return n?l:v}return h})}}var pe={loading:{type:Boolean,default:!1},immediateCheck:{type:Boolean,default:!0},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1},offset:{type:[String,Number],default:0},loadingText:{type:String},finishedText:{type:String},errorText:{type:String},onLoad:{type:Function},"onUpdate:loading":{type:Function},"onUpdate:error":{type:Function},useVirtual:{type:Boolean,required:!0,default:!1},dataList:{type:Array,default:()=>[]},itemDefaultHeight:{type:Number,default:50},showCounts:{type:Number,default:20}};const he=["data-key"],me=X({props:pe,setup(e){const o=e,{n:d}=ge("list"),k=J.pack.value,c=g(o.itemDefaultHeight),h=g(o.showCounts),n=g([]),l=g([]),v=g(0),f=g(0),H=g(null);let w=g(null);const M=()=>{o["onUpdate:error"]&&o["onUpdate:error"](!1),o["onUpdate:loading"]&&o["onUpdate:loading"](!0),o.onLoad&&o.onLoad()},z=()=>{var a;const t=w.value===null?window.innerHeight:(a=w.value)==null?void 0:a.getBoundingClientRect().bottom,{bottom:r}=H.value.getBoundingClientRect();return Math.floor(r)-de(o.offset)<=t};j(()=>{o.useVirtual&&(N(),A(),o.immediateCheck&&$())}),G(o.dataList,(t,r)=>{t.length>0&&o.useVirtual&&N()});const A=()=>{const t=document.querySelector(".InfiniteScrollContainer");t&&(v.value=t==null?void 0:t.getBoundingClientRect().height)},N=async()=>{if(o.dataList.length>0){const t=n.value.length;n.value=JSON.parse(JSON.stringify([...n.value,...o.dataList.slice(t,o.dataList.length)]));for(let r=t;r<n.value.length;r++){const a=n.value[r];a.curRowId=r,a.hasRenderDom=!1,a.curRowKey=r,a.curRowMarginTop=r===0?0:n.value[r-1].curRowMarginTop+n.value[r-1].curRowHeight,a.curRowHeight=c.value}l.value.length===0&&(l.value=n.value.slice(0,h.value)),x(),V(()=>{l.value.forEach(r=>{b(r)})})}},b=t=>{if(!t.hasRenderDom){let r=t.curRowId,a=document.getElementsByClassName("InfiniteScrollItem"+r)[0].getBoundingClientRect().height;n.value[r].curRowHeight=a,n.value[r].hasRenderDom=!0;for(let s=0;s<n.value.length;s++)s>0&&(n.value[s].curRowMarginTop=n.value[s-1].curRowMarginTop+n.value[s-1].curRowHeight)}},P=E(()=>{let t=0;return n.value.forEach(r=>{t+=r.curRowHeight}),t}),$=async t=>{const{loading:r,finished:a,error:s}=o;r||(!r&&!a&&!s&&z()?M():w.value&&Math.abs(w.value.scrollTop-f.value)>c.value&&(f.value=w.value.scrollTop,x()))},U=t=>t.curRowMarginTop<f.value&&t.curRowMarginTop+t.curRowHeight>f.value+v.value||t.curRowMarginTop>f.value&&t.curRowMarginTop<f.value+v.value?!0:t.curRowMarginTop+t.curRowHeight>f.value-300&&t.curRowMarginTop+t.curRowHeight<f.value+v.value+300,W=E(()=>l.value[0]?l.value[0].curRowMarginTop:0),x=()=>{for(let t=0;t<n.value.length;t++)if(U(n.value[t])){let r=t+h.value;l.value=n.value.slice(t,Math.min(r,n.value.length)),V(()=>{l.value.forEach(a=>{b(a)})});break}};return(t,r)=>{const a=K,s=O,q=Q;return t.useVirtual?(p(),m("div",{key:0,ref_key:"scrollerRef",ref:w,class:"InfiniteScrollContainer h-full relative overflow-y-auto overflow-x-hidden",onScroll:$},[y("div",{class:"absolute top-0 left-0 right-0",style:I(`height: ${i(P)}px`)},null,4),y("div",{class:"relative flex flex-col flex-nowrap flex-shrink-0",style:I({transform:`translate3d(0,${i(W)}px,0)`})},[(p(!0),m(_,null,F(l.value,u=>(p(),m("div",{key:u.curRowId+"_"+u.curRowKey,"data-key":u.curRowId,class:R(`${"InfiniteScrollItem"+u.curRowId} w-full flex-shrink-0`)},[S(t.$slots,"default",{item:u,index:u.curRowId})],10,he))),128)),t.loading?S(t.$slots,"loading",{key:0},()=>[y("div",{class:R(i(d)("loading"))},[y("div",{class:R(i(d)("loading-text"))},L(i(B)(t.loadingText,i(k).listLoadingText)),3),Y(a,{size:"mini",radius:10})],2)]):C("",!0),t.finished?S(t.$slots,"finished",{key:1},()=>[y("div",{class:R(i(d)("finished"))},L(i(B)(t.finishedText,i(k).listFinishedText)),3)]):C("",!0),t.error?S(t.$slots,"error",{key:2},()=>[Z((p(),m("div",{class:R(i(d)("error")),onClick:M},[ee(L(i(B)(t.errorText,i(k).listErrorText)),1)],2)),[[q]])]):C("",!0),y("div",{ref_key:"detectorEl",ref:H,class:R(i(d)("detector"))},null,2)],4)],544)):(p(),te(s,re(ne({key:1},o)),{default:oe(()=>[(p(!0),m(_,null,F(t.dataList,u=>(p(),m("div",{key:u.id},[S(t.$slots,"default",{item:u,index:u.id})]))),128))]),_:3},16))}}});export{me as _};