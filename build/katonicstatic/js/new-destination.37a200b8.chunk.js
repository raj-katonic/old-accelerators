(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[11],{179:function(e,t,a){"use strict";t.a="http://localhost:8000"},196:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(52),o=a(50),c=a(2),r=a.n(c),l=a(41),d=a.n(l),f=a(45),u=a.n(f),b=a(44),p=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,o=e.tag,c=e.innerRef,l=Object(s.a)(e,p),d=Object(b.mapToCssModules)(u()(t,!!i&&"form-inline"),a);return r.a.createElement(o,Object(n.a)({},l,{ref:c,className:d}))},t}(c.Component);j.propTypes=h,j.defaultProps={tag:"form"},t.a=j},197:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(2),o=a.n(i),c=a(41),r=a.n(c),l=a(45),d=a.n(l),f=a(44),u=["className","cssModule","row","disabled","check","inline","tag"],b={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:f.tagPropType,className:r.a.string,cssModule:r.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.row,c=e.disabled,r=e.check,l=e.inline,b=e.tag,p=Object(s.a)(e,u),h=Object(f.mapToCssModules)(d()(t,!!i&&"row",r?"form-check":"form-group",!(!r||!l)&&"form-check-inline",!(!r||!c)&&"disabled"),a);return"fieldset"===b&&(p.disabled=c),o.a.createElement(b,Object(n.a)({},p,{className:h}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},198:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(52),o=a(50),c=a(2),r=a.n(c),l=a(41),d=a.n(l),f=a(45),u=a.n(f),b=a(44),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:b.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,o=e.bsSize,c=e.valid,l=e.invalid,d=e.tag,f=e.addon,h=e.plaintext,j=e.innerRef,m=Object(s.a)(e,p),O=["radio","checkbox"].indexOf(i)>-1,g=new RegExp("\\D","g"),x=d||("select"===i||"textarea"===i?i:"input"),v="form-control";h?(v+="-plaintext",x=d||"input"):"file"===i?v+="-file":"range"===i?v+="-range":O&&(v=f?null:"form-check-input"),m.size&&g.test(m.size)&&(Object(b.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=m.size,delete m.size);var y=Object(b.mapToCssModules)(u()(t,l&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,v),a);return("input"===x||d&&"function"===typeof d)&&(m.type=i),m.children&&!h&&"select"!==i&&"string"===typeof x&&"select"!==x&&(Object(b.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),r.a.createElement(x,Object(n.a)({},m,{ref:j,className:y,"aria-invalid":l}))},t}(r.a.Component);j.propTypes=h,j.defaultProps={type:"text"},t.a=j},199:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(2),o=a.n(i),c=a(41),r=a.n(c),l=a(45),d=a.n(l),f=a(44),u=["className","cssModule","hidden","widths","tag","check","size","for"],b=r.a.oneOfType([r.a.number,r.a.string]),p=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:b,order:b,offset:b})]),h={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:f.tagPropType,className:r.a.string,cssModule:r.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:r.a.array},j={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},O=function(e){var t=e.className,a=e.cssModule,i=e.hidden,c=e.widths,r=e.tag,l=e.check,b=e.size,p=e.for,h=Object(s.a)(e,u),j=[];c.forEach((function(t,n){var s=e[t];if(delete h[t],s||""===s){var i,o=!n;if(Object(f.isObject)(s)){var c,r=o?"-":"-"+t+"-";i=m(o,t,s.size),j.push(Object(f.mapToCssModules)(d()(((c={})[i]=s.size||""===s.size,c["order"+r+s.order]=s.order||0===s.order,c["offset"+r+s.offset]=s.offset||0===s.offset,c))),a)}else i=m(o,t,s),j.push(i)}}));var O=Object(f.mapToCssModules)(d()(t,!!i&&"sr-only",!!l&&"form-check-label",!!b&&"col-form-label-"+b,j,!!j.length&&"col-form-label"),a);return o.a.createElement(r,Object(n.a)({htmlFor:p},h,{className:O}))};O.propTypes=h,O.defaultProps=j,t.a=O},512:function(e,t,a){"use strict";a.r(t);var n=a(48),s=a(2),i=a(196),o=a(168),c=a(197),r=a(199),l=a(198),d=a(220),f=a(291),u=a(224),b=a(234),p=a(121),h=a(57),j=a(179),m=a(11);t.default=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],O=t[1],g=Object(s.useState)([]),x=Object(n.a)(g,2),v=x[0],y=x[1],N=Object(s.useState)(""),T=Object(n.a)(N,2),z=T[0],M=T[1];Object(s.useEffect)((function(){fetch("".concat(j.a,"/api/v1/destination_definitions/list"),{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return y(e.destinationDefinitions)}))}),[]);return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(o.a,{children:Object(m.jsx)(h.a,{xxs:"12",children:Object(m.jsx)("h1",{children:"Create a Destination"})})}),Object(m.jsx)(o.a,{children:Object(m.jsx)(h.a,{xxs:"12",children:Object(m.jsxs)(c.a,{children:[Object(m.jsx)(r.a,{for:"destinationName",children:"Name of Destination"}),Object(m.jsx)(l.a,{type:"text",name:"destination",id:"destinationName",placeholder:"Enter name of source"})]})})}),Object(m.jsx)(o.a,{children:Object(m.jsx)(h.a,{xxs:"12",children:Object(m.jsxs)(d.a,{isOpen:a,toggle:function(){return O((function(e){return!e}))},children:[Object(m.jsx)(f.a,{caret:!0,children:z}),Object(m.jsx)(u.a,{children:v.map((function(e){return Object(m.jsx)(b.a,{onClick:function(){return M(e.name)},children:e.name},v.indexOf(e))}))})]})})}),Object(m.jsx)(o.a,{children:Object(m.jsxs)(h.a,{xxs:"12",children:[Object(m.jsx)(p.a,{className:"my-4",color:"primary",children:"Create a destination"})," "]})})]})}}}]);
//# sourceMappingURL=new-destination.37a200b8.chunk.js.map