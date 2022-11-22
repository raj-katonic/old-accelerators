(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[3],{10:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"e",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"f",(function(){return d})),t.d(n,"a",(function(){return a}));var u=t(4),r=function(){var e=u.c;try{if(localStorage.getItem("direction")){var n=localStorage.getItem("direction");"rtl"!==n&&"ltr"!==n||(e=n)}}catch(t){console.log(">>>>: src/helpers/Utils.js : getDirection -> error",t),e=u.c}return{direction:e,isRtl:"rtl"===e}},i=function(){var e=u.b;try{localStorage.getItem(u.l)&&(e=localStorage.getItem(u.l))}catch(n){console.log(">>>>: src/helpers/Utils.js : getCurrentColor -> error",n),e=u.b}return e},c=function(e){try{localStorage.setItem(u.l,e)}catch(n){console.log(">>>>: src/helpers/Utils.js : setCurrentColor -> error",n)}},o=function(){var e;try{e=localStorage.getItem("currentLanguage")&&u.h.filter((function(e){return e.id===localStorage.getItem("currentLanguage")})).length>0?localStorage.getItem("currentLanguage"):u.d}catch(n){console.log(">>>>: src/helpers/Utils.js : getCurrentLanguage -> error",n),e=u.d}return e},d=function(e){try{localStorage.setItem("currentLanguage",e)}catch(n){console.log(">>>>: src/helpers/Utils.js : setCurrentLanguage -> error",n)}};function a(e,n,t){var u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,feedback:n,name:t})};fetch("/platform/api/app/addFeedback",u)}},23:function(e,n,t){"use strict";t.r(n);t(24),t(25),t(26),t(27),t(28),t(29),t(30);var u=t(4),r=t(10),i=u.g||u.f?Object(r.b)():u.b;Object(r.e)(i);t(31)("./gogo.".concat(i,".scss")).then((function(){t(40)}))},24:function(e,n,t){},25:function(e,n,t){},31:function(e,n,t){var u={"./gogo.light.purplemonster.scss":[43,12]};function r(e){if(!t.o(u,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=u[e],r=n[0];return t.e(n[1]).then((function(){return t.t(r,7)}))}r.keys=function(){return Object.keys(u)},r.id=31,e.exports=r},4:function(e,n,t){"use strict";t.d(n,"e",(function(){return u})),t.d(n,"k",(function(){return r})),t.d(n,"i",(function(){return i})),t.d(n,"d",(function(){return c})),t.d(n,"h",(function(){return o})),t.d(n,"a",(function(){return d})),t.d(n,"j",(function(){return a})),t.d(n,"l",(function(){return s})),t.d(n,"g",(function(){return l})),t.d(n,"b",(function(){return f})),t.d(n,"f",(function(){return m})),t.d(n,"c",(function(){return h})),t.d(n,"m",(function(){return b}));var u="menu-default",r=1440,i=768,c="en",o=[{id:"en",name:"English - LTR",direction:"ltr"},{id:"es",name:"Espa\xf1ol",direction:"ltr"},{id:"enrtl",name:"English - RTL",direction:"rtl"}],d="",a="".concat(d,"/#"),s="__theme_selected_color",l=!1,f="light.purplemonster",m=!1,h="ltr",b="__theme_radius"},40:function(e,n,t){"use strict";t.r(n);var u=t(2),r=t.n(u),i=t(12),c=t.n(i),o=t(18),d=t(9),a=t(20),s=t(5),l=t(8),f=t(10),m={locale:Object(f.c)()},h=t(4),b={containerClassnames:h.e,subHiddenBreakpoint:h.k,menuHiddenBreakpoint:h.i,menuClickCount:0,selectedMenuHasSubItems:"menu-default"===h.e},g=Object(d.b)({menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l.c:return Object(s.a)(Object(s.a)({},e),{},{selectedMenuHasSubItems:n.payload});case l.f:case l.d:return Object(s.a)(Object(s.a)({},e),{},{containerClassnames:n.payload.containerClassnames,menuClickCount:n.payload.menuClickCount});case l.e:case l.b:return Object(s.a)(Object(s.a)({},e),{},{containerClassnames:n.payload});default:return Object(s.a)({},e)}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;return n.type===l.a?Object(s.a)(Object(s.a)({},e),{},{locale:n.payload}):Object(s.a)({},e)}}),p=g,y=t(14),j=t.n(y),C=t(21),O=j.a.mark(v);function v(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([]);case 2:case"end":return e.stop()}}),O)}var S=Object(a.a)(),_=[S];function E(e){var n=Object(d.d)(p,e,Object(d.c)(d.a.apply(void 0,_)));return S.run(v),n}var L=function(e){e&&e instanceof Function&&t.e(16).then(t.bind(null,293)).then((function(n){var t=n.getCLS,u=n.getFID,r=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),u(e),r(e),i(e),c(e)}))},k=t(11),w=r.a.lazy((function(){return Promise.all([t.e(9),t.e(2)]).then(t.bind(null,320))})),I=function(){return Object(k.jsx)(o.a,{store:E(),children:Object(k.jsx)(u.Suspense,{fallback:Object(k.jsx)("div",{className:"loading"}),children:Object(k.jsx)(w,{})})})};c.a.render(Object(k.jsx)(I,{}),document.getElementById("root")),L()},8:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"f",(function(){return l})),t.d(n,"e",(function(){return f})),t.d(n,"d",(function(){return m})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return b})),t.d(n,"j",(function(){return u})),t.d(n,"h",(function(){return r})),t.d(n,"g",(function(){return i})),t.d(n,"k",(function(){return c})),t.d(n,"l",(function(){return o})),t.d(n,"i",(function(){return a}));var u=function(e){return{type:b,payload:e}},r=function(e){return{type:h,payload:e}},i=function(e,n){var t=!n.indexOf(e)>-1?"".concat(n," ").concat(e):n;return{type:f,payload:t}},c=function(e){var n=e?e.split(" ").filter((function(e){return""!==e&&"sub-show-temporary"!==e})):"",t="";return t=n.includes("main-show-temporary")?n.filter((function(e){return"main-show-temporary"!==e})).join(" "):"".concat(n.join(" ")," main-show-temporary"),{type:m,payload:{containerClassnames:t,menuClickCount:0}}},o=function(e,n,t){var u=n?n.split(" ").filter((function(e){return""!==e})):"",r="";return t||(!u.includes("menu-default")||e%4!==0&&e%4!==3||(e=1),u.includes("menu-sub-hidden")&&e%4===2&&(e=0),!u.includes("menu-hidden")||e%4!==2&&e%4!==3||(e=0)),e%4===0?(u.includes("menu-default")&&u.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden":u.includes("menu-default")?r="menu-default":u.includes("menu-sub-hidden")?r="menu-sub-hidden":u.includes("menu-hidden")&&(r="menu-hidden"),e=0):e%4===1?u.includes("menu-default")&&u.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden main-hidden sub-hidden":u.includes("menu-default")?r="menu-default sub-hidden":u.includes("menu-sub-hidden")?r="menu-sub-hidden main-hidden sub-hidden":u.includes("menu-hidden")&&(r="menu-hidden main-show-temporary"):e%4===2?u.includes("menu-default")&&u.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-hidden":u.includes("menu-default")?r="menu-default main-hidden sub-hidden":u.includes("menu-sub-hidden")?r="menu-sub-hidden sub-hidden":u.includes("menu-hidden")&&(r="menu-hidden main-show-temporary sub-show-temporary"):e%4===3&&(u.includes("menu-default")&&u.includes("menu-sub-hidden")?r="menu-default menu-sub-hidden sub-show-temporary":u.includes("menu-default")?r="menu-default sub-hidden":u.includes("menu-sub-hidden")?r="menu-sub-hidden sub-show-temporary":u.includes("menu-hidden")&&(r="menu-hidden main-show-temporary")),u.includes("menu-mobile")&&(r+=" menu-mobile"),{type:l,payload:{containerClassnames:r,menuClickCount:e}}},d=t(10),a=function(e){return Object(d.f)(e),{type:s,payload:e}},s="CHANGE_LOCALE",l="MENU_SET_CLASSNAMES",f="MENU_CONTAINER_ADD_CLASSNAME",m="MENU_CLICK_MOBILE_MENU",h="MENU_CHANGE_DEFAULT_CLASSES",b="MENU_CHANGE_HAS_SUB_ITEM_STATUS"}},[[23,4,10]]]);
//# sourceMappingURL=main.4617500d.chunk.js.map