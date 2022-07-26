"use strict";(self["webpackChunkkolotok"]=self["webpackChunkkolotok"]||[]).push([[221],{5397:(t,a,e)=>{e.d(a,{Z:()=>b});e(2526),e(1817);var r=e(3396),o=e(7139),i={class:"the-catalog center"},g={class:"the-catalog__title animate__animated animate__fadeInLeft wow"},c={class:"the-catalog__categories"};function n(t,a,e,n,s,u){var l=this,p=(0,r.up)("catalog-category"),d=(0,r.up)("r-button");return(0,r.wg)(),(0,r.iD)("section",i,[(0,r.WI)(t.$slots,"breadcrumbs",{},void 0,!0),(0,r._)("h2",g,(0,o.zw)(e.title),1),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.categories,(function(t){return(0,r.wg)(),(0,r.j4)(p,{key:t.id,img:t.img,text:t.router.description,routePath:t.router.path,routeQuery:t.router.query,class:"animate__animated animate__fadeInUp wow"},null,8,["img","text","routePath","routeQuery"])})),128))]),e.isCatalogPage?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(d,{key:0,type:"button",text:"Смотреть всё",color:"yellow",arrow:!0,onClick:a[0]||(a[0]=function(t){return l.$router.push("/catalog")})}))])}var s={class:"catalog-category shadow"},u={class:"catalog-category__top"},l=["src"],p={class:"catalog-category__bottom"};function d(t,a,e,o,i,g){var c=(0,r.up)("r-link");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",u,[(0,r._)("img",{src:e.img,alt:""},null,8,l)]),(0,r._)("div",p,[(0,r.Wm)(c,{path:e.routePath,query:e.routeQuery,text:e.text},null,8,["path","query","text"])])])}var m=e(8191);const _={name:"catalogCategory",props:{img:String,text:String,routePath:String,routeParams:Object,routeQuery:Object},components:{rLink:m.Z}};var y=e(89);const h=(0,y.Z)(_,[["render",d],["__scopeId","data-v-77b892bc"]]),v=h;var w=e(4830);const k={name:"TheCatalog",components:{CatalogCategory:v,rButton:w.Z},props:{title:String,isCatalogPage:Boolean},data:function(){return{categories:[{id:1,img:"img/catalog/category_1.png",router:{description:"Плитка",path:"/catalog/4",query:{page:1}}},{id:2,img:"img/catalog/category_2.svg",router:{description:"Сантехника",path:"/catalog/7",query:{page:1}}},{id:3,img:"img/catalog/category_3.svg",router:{description:"Натяжные потолки",path:"/catalog/8",query:{page:1}}},{id:4,img:"img/catalog/category_4.svg",router:{description:"Напольные покрытия",path:"/catalog/1",query:{page:1}}},{id:5,img:"img/catalog/category_5.svg",router:{description:"Система «Умный дом»",path:"/catalog/13",query:{page:1}}},{id:6,img:"img/catalog/category_6.svg",router:{description:"Охранная система",path:"/catalog/14",query:{page:1}}},{id:7,img:"img/catalog/category_7.svg",router:{description:"Лестницы",path:"/catalog/12",query:{page:1}}},{id:8,img:"img/catalog/category_8.svg",router:{description:"Мебель",path:"/catalog/9",query:{page:1}}},{id:9,img:"img/catalog/category_9.svg",router:{description:"Камины",path:"/catalog/11",query:{page:1}}},{id:10,img:"img/catalog/category_10.svg",router:{description:"Окна",path:"/catalog/3",query:{page:1}}},{id:11,img:"img/catalog/category_11.svg",router:{description:"Декор стен",path:"/catalog/10",query:{page:1}}},{id:12,img:"img/catalog/category_12.png",router:{description:"Обои",path:"/catalog/6",query:{page:1}}},{id:13,img:"img/catalog/category_13.svg",router:{description:"Садовые конструкции",path:"/catalog/15",query:{page:1}}},{id:14,img:"img/catalog/category_14.svg",router:{description:"Освещение",path:"/catalog/5",query:{page:1}}},{id:15,img:"img/catalog/category_15.svg",router:{description:"Двери",path:"/catalog/2",query:{page:1}}}]}}},f=(0,y.Z)(k,[["render",n],["__scopeId","data-v-31b18da2"]]),b=f},7736:(t,a,e)=>{e.d(a,{Z:()=>l});e(2526),e(1817);var r=e(3396),o=e(7139),i={itemscope:"",itemtype:"http://schema.org/BreadcrumbList",class:"r-breadcrumbs animate__animated animate__fadeInDownBig wow"},g={key:1,itemprop:"item",itemscope:"",class:"r-breadcrumbs__current-description"};function c(t,a,e,c,n,s){var u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("ol",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.links,(function(t){return(0,r.wg)(),(0,r.iD)("li",{itemprop:"itemListElement",itemtype:"http://schema.org/ListItem",class:"r-breadcrumbs__item",key:t.id},[!1===t.current?((0,r.wg)(),(0,r.j4)(u,{key:0,itemprop:"item",to:t.route,class:"r-breadcrumbs__link"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,o.zw)(t.description),1)]})),_:2},1032,["to"])):((0,r.wg)(),(0,r.iD)("a",g,(0,o.zw)(t.description),1))])})),128))])}const n={name:"rBreadcrumbs",props:{links:Array}};var s=e(89);const u=(0,s.Z)(n,[["render",c],["__scopeId","data-v-102adf28"]]),l=u},8191:(t,a,e)=>{e.d(a,{Z:()=>p});var r=e(3396),o=e(7139),i=function(t){return(0,r.dD)("data-v-e71f028c"),t=t(),(0,r.Cn)(),t},g=i((function(){return(0,r._)("svg",{width:"38",height:"13",viewBox:"0 0 38 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"r-link__arrow"},[(0,r._)("path",{d:"M0 6.15625H37M37 6.15625L29.7734 12M37 6.15625L29.7734 1",stroke:"var(--dark-blue)"})],-1)})),c={class:"r-link__text"};function n(t,a,e,i,n,s){var u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(u,{to:{path:e.path,query:e.query},class:"animate__animated animate__fadeInLeft wow r-link"},{default:(0,r.w5)((function(){return[g,(0,r._)("p",c,(0,o.zw)(e.text),1)]})),_:1},8,["to"])}const s={name:"rLink",props:{path:String,query:Object,text:String}};var u=e(89);const l=(0,u.Z)(s,[["render",n],["__scopeId","data-v-e71f028c"]]),p=l},6433:(t,a,e)=>{e.r(a),e.d(a,{default:()=>m});var r=e(3396),o={class:"page-catalog theme-container"},i={class:"main"};function g(t,a,e,g,c,n){var s=(0,r.up)("the-header"),u=(0,r.up)("r-breadcrumbs"),l=(0,r.up)("the-catalog"),p=(0,r.up)("the-footer");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(s),(0,r._)("main",i,[(0,r.Wm)(l,{title:"Каталог",isCatalogPage:!0},{breadcrumbs:(0,r.w5)((function(){return[(0,r.Wm)(u,{links:t.links},null,8,["links"])]})),_:1})]),(0,r.Wm)(p)])}var c=e(8618),n=e(7736),s=e(5397),u=e(222);const l={name:"PageCatalog",components:{TheHeader:c.Z,rBreadcrumbs:n.Z,TheCatalog:s.Z,TheFooter:u.Z},data:function(){return{links:[{id:1,description:"Главная",route:"/",current:!1},{id:2,description:"Каталог",route:"/",current:!0}]}}};var p=e(89);const d=(0,p.Z)(l,[["render",g]]),m=d}}]);
//# sourceMappingURL=221.725eb4cc.js.map