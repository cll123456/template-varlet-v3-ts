import{g as f,d as k,h as u,u as p,i as _,b as o,c as s,f as d,F as y,j as C,n as c,k as t,l as B,w as $,m as L,p as S,t as V}from"./index.3dd924bd.js";import{a as w}from"./index.11dc6b9a.js";const F=f("navbar",{state:()=>({navBarList:[{title:"First",logo:"i-mdi-numeric-1-box-outline",links:{name:"Home",url:"/first"},badge:{value:0,maxValue:10}},{title:"Second",logo:"i-mdi-numeric-2-box-outline",links:{name:"Home",url:"/second"},badge:{value:0,maxValue:10}},{title:"Third-long-long-long-name",logo:"i-mdi-numeric-3-box-outline",links:{name:"Home",url:"/third"},badge:{value:0,maxValue:10}},{title:"Fourth",logo:"i-mdi-numeric-4-box-outline",links:{name:"Home",url:"/fourth"},badge:{value:0,maxValue:10}},{title:"Fifth",logo:"i-mdi-numeric-5-box-outline",links:{name:"Home",url:"/fifth"},badge:{value:2,maxValue:10}}],activeColorClass:"!text-primary-500"}),actions:{changeNavBarList(g,r){this.navBarList=this.navBarList.map(a=>(a.title===g&&(a={...a,...r}),a))}}}),H={bg:"light-500 dark:dark-500",class:"h-12 fixed z-1 bottom-0 left-0 right-0 border-t-1 border-opacity-100 border-gray-500 dark:border-light-500 border-dotted"},j={class:"w-full h-full flex justify-center items-center flex-wrap"},z=["onClick"],D=k({__name:"index",setup(g){const r=F(),a=u(()=>r.navBarList),n=u(()=>r.activeColorClass),m=p(),b=_(),i=u(()=>l=>m.path===l),h=l=>{b.push(l)};return(l,N)=>{const v=w;return o(),s("div",H,[d("div",j,[(o(!0),s(y,null,C(t(a),(e,x)=>(o(),s("div",{key:e.title+x,class:"text-xl justify-center items-center flex flex-col flex-1 p-2 border-gray-500 dark:border-light-500 box-border",onClick:R=>h(e.links.url)},[!e.badge||e.badge.value===0?(o(),s("div",{key:0,class:c(`${e.logo} dark:text-light-500 ${t(i)(e.links.url)?t(n):""} `)},null,2)):(o(),B(v,L({key:1,type:"danger"},e.badge,{position:"right-top"}),{default:$(()=>[d("div",{class:c(`${e.logo} dark:text-light-500
          ${t(i)(e.links.url)?t(n):""} `)},null,2)]),_:2},1040)),d("div",{style:S({maxWidth:`${100/(t(a).length+1)}vw`}),class:c(`${t(i)(e.links.url)?t(n):""} text-sm h-full truncate dark:text-light-500`)},V(e.title),7)],8,z))),128))])])}}});export{D as _};