(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[7],{114:function(e,t,n){"use strict";var r=n(5),a=(n(2),n(230)),o=n(105),c=n(11);t.a=Object(o.c)((function(e){return Object(c.jsx)(a.a,Object(r.a)({},e))}),{withRef:!1})},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(5),a=(n(2),n(238)),o=n(11),c=function(e){return Object(o.jsx)(a.a,Object(r.a)(Object(r.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]}))}},230:function(e,t,n){"use strict";var r=n(83),a=n(2),o=n(105),c=n(89),s=n(104),i=n.n(s).a||s,u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.b)(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,a=Object(r.c)(t,["values"]),o=e.values,c=Object(r.c)(e,["values"]);return!i(o,n)||!i(a,c)},t.prototype.render=function(){var e=this;return a.createElement(o.a.Consumer,null,(function(t){Object(c.c)(t);var n=t.formatMessage,o=t.textComponent,s=void 0===o?a.Fragment:o,i=e.props,u=i.id,l=i.description,d=i.defaultMessage,f=i.values,b=i.children,m=i.tagName,p=void 0===m?s:m,j=n({id:u,description:l,defaultMessage:d},f);return Array.isArray(j)||(j=[j]),"function"===typeof b?b(j):p?a.createElement.apply(a,Object(r.d)([p,null],j)):j}))},t.displayName="FormattedMessage",t}(a.Component);t.a=u},238:function(e,t,n){"use strict";var r=n(6),a=n(7),o=n(2),c=n.n(o),s=n(41),i=n.n(s),u=n(50),l=n.n(u),d=n(52),f=["className","cssModule","widths","tag"],b=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),p={tag:d.j,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,i=Object(a.a)(e,f),u=[];o.forEach((function(t,r){var a=e[t];if(delete i[t],a||""===a){var o=!r;if(Object(d.e)(a)){var c,s=o?"-":"-"+t+"-",f=g(o,t,a.size);u.push(Object(d.g)(l()(((c={})[f]=a.size||""===a.size,c["order"+s+a.order]=a.order||0===a.order,c["offset"+s+a.offset]=a.offset||0===a.offset,c)),n))}else{var b=g(o,t,a);u.push(b)}}})),u.length||u.push("col");var b=Object(d.g)(l()(t,u),n);return c.a.createElement(s,Object(r.a)({},i,{className:b}))};h.propTypes=p,h.defaultProps=j,t.a=h},239:function(e,t,n){"use strict";var r=n(6),a=n(7),o=n(2),c=n.n(o),s=n(41),i=n.n(s),u=n(50),l=n.n(u),d=n(52),f=["className","cssModule","noGutters","tag","form","widths"],b=i.a.oneOfType([i.a.number,i.a.string]),m={tag:d.j,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},p={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,i=e.form,u=e.widths,b=Object(a.a)(e,f),m=[];u.forEach((function(t,n){var r=e[t];if(delete b[t],r){var a=!n;m.push(a?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var p=Object(d.g)(l()(t,o?"no-gutters":null,i?"form-row":"row",m),n);return c.a.createElement(s,Object(r.a)({},b,{className:p}))};j.propTypes=m,j.defaultProps=p,t.a=j},327:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(239),c=n(6),s=n(7),i=n(41),u=n.n(i),l=n(50),d=n.n(l),f=n(52),b=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:f.j,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},p=function(e){var t=e.className,n=e.cssModule,r=e.color,o=e.body,i=e.inverse,u=e.outline,l=e.tag,m=e.innerRef,p=Object(s.a)(e,b),j=Object(f.g)(d()(t,"card",!!i&&"text-white",!!o&&"card-body",!!r&&(u?"border":"bg")+"-"+r),n);return a.a.createElement(l,Object(c.a)({},p,{className:j,ref:m}))};p.propTypes=m,p.defaultProps={tag:"div"};var j=p,g=["className","cssModule","tag"],h={tag:f.j,className:u.a.string,cssModule:u.a.object},O=function(e){var t=e.className,n=e.cssModule,r=e.tag,o=Object(s.a)(e,g),i=Object(f.g)(d()(t,"card-title"),n);return a.a.createElement(r,Object(c.a)({},o,{className:i}))};O.propTypes=h,O.defaultProps={tag:"div"};var v=O,y=n(42),x=n(115),N=n(114),w=n(4),E=n(11);t.default=function(){return Object(r.useEffect)((function(){return document.body.classList.add("background"),document.body.classList.add("no-footer"),function(){document.body.classList.remove("background"),document.body.classList.remove("no-footer")}}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"fixed-background"}),Object(E.jsx)("main",{children:Object(E.jsx)("div",{className:"container",children:Object(E.jsx)(o.a,{className:"h-100",children:Object(E.jsx)(x.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(E.jsx)(j,{className:"auth-card",children:Object(E.jsxs)("div",{className:"form-side",children:[Object(E.jsx)(y.b,{to:"/",className:"white",children:Object(E.jsx)("span",{className:"logo-single"})}),Object(E.jsx)(v,{className:"mb-4",children:Object(E.jsx)(N.a,{id:"pages.error-title"})}),Object(E.jsx)("p",{className:"mb-0 text-muted text-small mb-0",children:Object(E.jsx)(N.a,{id:"pages.error-code"})}),Object(E.jsx)("p",{className:"display-1 font-weight-bold mb-5",children:"404"}),Object(E.jsx)(y.b,{to:w.a,className:"btn btn-primary btn-shadow btn-lg",children:Object(E.jsx)(N.a,{id:"pages.go-back-home"})})]})})})})})})]})}},52:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"k",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return p})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return y}));var r,a=n(41),o=n.n(a);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function i(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var u="object"===typeof window&&window.Element||function(){};var l=o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),d=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),f={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],m={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},p={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function O(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!h(e))return!1;var t=g(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&j){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function v(e){return null!==e&&(Array.isArray(e)||j&&"number"===typeof e.length)}function y(e,t){var n=O(e);return t?v(n)?n:null===n?[]:[n]:v(n)?n[0]:n}}}]);
//# sourceMappingURL=views-error.8abcca43.chunk.js.map