(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[28],{523:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(168),r=a(57),i=a(55),o=a(48),l=a(5),j=a(14),u=a.n(j),d=a(65),b=a.n(d),p=a(129),m=a(107),O=a(124),g=a(81),x=a(64),h=a(82),f=a(11);function v(e){var t=e.columns,a=e.data,c=Object(p.useTable)({columns:t,data:a,initialState:{pageIndex:0,pageSize:6}},p.useSortBy,p.usePagination),n=c.getTableProps,s=c.getTableBodyProps,r=c.prepareRow,i=c.headerGroups,o=c.page,j=c.canPreviousPage,u=c.canNextPage,d=c.pageCount,b=c.gotoPage,m=c.setPageSize,O=c.state,g=O.pageIndex,x=O.pageSize;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("table",Object(l.a)(Object(l.a)({},n()),{},{className:"r-table table",children:[Object(f.jsx)("thead",{children:i.map((function(e){return Object(f.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e,t){return Object(f.jsxs)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{className:e.isSorted?e.isSortedDesc?"sorted-desc":"sorted-asc":"",children:[e.render("Header"),Object(f.jsx)("span",{})]}),"th_".concat(t))}))}))}))}),Object(f.jsx)("tbody",Object(l.a)(Object(l.a)({},s()),{},{children:o.map((function(e){return r(e),Object(f.jsx)("tr",Object(l.a)(Object(l.a)({style:{cursor:"pointer"},onClick:function(){window.location="/platform/models/registries/".concat(e.id,"/").concat(e.original.name)}},e.getRowProps()),{},{children:e.cells.map((function(e,t){return Object(f.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps({className:e.column.cellClass})),{},{children:e.render("Cell")}),"td_".concat(t))}))}))}))}))]})),Object(f.jsx)(h.a,{page:g,pages:d,canPrevious:j,canNext:u,pageSizeOptions:[4,10,20,30,40,50],showPageSizeOptions:!1,showPageJump:!1,defaultPageSize:x,onPageChange:function(e){return b(e)},onPageSizeChange:function(e){return m(e)},paginationMaxSize:d})]})}var N=function(e){var t=e.textHead,a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],l=s[1],j=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/platform/api/models/registries");case 2:t=e.sent,Array.isArray(t.data.modelRegs)&&l(t.data.modelRegs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){j()}),[]);var d=n.a.useMemo((function(){return[{Header:"Name",accessor:"name",cellClass:"text-muted w-16",Cell:function(e){return Object(f.jsx)(f.Fragment,{children:e.value})},sortType:"basic"},{Header:"Creation Date",accessor:function(e){return String(new Date(Number(e.creation_timestamp)))},cellClass:"text-muted w-16",Cell:function(e){return Object(f.jsx)(f.Fragment,{children:e.value})},sortType:"basic"},{Header:"Last Updated",accessor:function(e){return String(new Date(Number(e.last_updated_timestamp)))},cellClass:"text-muted w-16",Cell:function(e){return Object(f.jsx)(f.Fragment,{children:e.value})},sortType:"basic"}]}),[]);return Object(f.jsx)(m.a,{className:"h-100 table-container",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(g.a,{children:Object(f.jsx)(x.a,{id:t})}),Object(f.jsx)(v,{columns:d,data:r})]})})};t.default=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(r.a,{xxs:"12",children:Object(f.jsx)(N,{textHead:"model.modelRegistries"})})})})}},81:function(e,t,a){"use strict";var c=a(6),n=a(7),s=a(2),r=a.n(s),i=a(41),o=a.n(i),l=a(45),j=a.n(l),u=a(44),d=["className","cssModule","tag"],b={tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(n.a)(e,d),o=Object(u.mapToCssModules)(j()(t,"card-title"),a);return r.a.createElement(s,Object(c.a)({},i,{className:o}))};p.propTypes=b,p.defaultProps={tag:"div"},t.a=p},82:function(e,t,a){"use strict";var c=a(48),n=a(2),s=a(176),r=a(177),i=a(234),o=a(220),l=a(291),j=a(224),u=a(178),d=a(11);t.a=function(e){var t=e.page,a=e.pages,b=e.canPrevious,p=e.canNext,m=e.pageSizeOptions,O=e.showPageSizeOptions,g=e.showPageJump,x=e.defaultPageSize,h=e.onPageChange,f=e.onPageSizeChange,v=e.paginationMaxSize,N=Object(n.useState)(t),P=Object(c.a)(N,2),C=P[0],S=P[1],w=Object(n.useState)(x),y=Object(c.a)(w,2),z=y[0],k=y[1];Object(n.useEffect)((function(){S(t)}),[t]);var M=function(e){var c=function(e){var c=e;return Number.isNaN(e)&&(c=t),Math.min(Math.max(c,0),a-1)}(e);c!==C&&(S(c),h(c))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"text-center",children:[g&&Object(d.jsxs)("div",{className:"float-left pt-2",children:[Object(d.jsx)("span",{children:"Page "}),Object(d.jsxs)(o.a,{className:"d-inline-block",children:[Object(d.jsx)(l.a,{caret:!0,color:"outline-primary",size:"xs",children:C+1}),Object(d.jsx)(j.a,{direction:"left",children:function(){for(var e=[],t=function(t){e.push(Object(d.jsx)(i.a,{onClick:function(){return M(t)},children:t+1},t))},c=0;c<a;c+=1)t(c);return e}()})]}),Object(d.jsx)("span",{children:" of "}),a]}),Object(d.jsxs)(u.a,{className:"d-inline-block",size:"sm",listClassName:"justify-content-center","aria-label":"Page navigation example",children:[Object(d.jsx)(s.a,{className:"".concat(!b&&"disabled"),children:Object(d.jsx)(r.a,{className:"prev",onClick:function(){b&&M(t-1)},disabled:!b,children:Object(d.jsx)("i",{className:"simple-icon-arrow-left"})})}),function(){var e=a,t=a,c=C,n=0,i=v;i&&t>i&&((t=(n=Math.max(c+1-Math.floor(i/2),1))+i-1)>e&&(n=(t=e)-i+1),n-=1);for(var o=[],l=function(e){var t=c===e;o.push(Object(d.jsx)(s.a,{active:t,children:Object(d.jsx)(r.a,{onClick:function(){M(e)},children:e+1})},e))},j=n;j<t;j+=1)l(j);return o}(),Object(d.jsx)(s.a,{className:"".concat(!p&&"disabled"),children:Object(d.jsx)(r.a,{className:"next",onClick:function(){p&&M(t+1)},disabled:!p,children:Object(d.jsx)("i",{className:"simple-icon-arrow-right"})})})]}),O&&Object(d.jsxs)("div",{className:"float-right pt-2",children:[Object(d.jsx)("span",{className:"text-muted text-small mr-1",children:"Items "}),Object(d.jsxs)(o.a,{className:"d-inline-block",children:[Object(d.jsx)(l.a,{caret:!0,color:"outline-primary]",size:"xs",children:z}),Object(d.jsx)(j.a,{right:!0,children:m.map((function(e,t){return Object(d.jsx)(i.a,{onClick:function(){return function(e){f(e),k(e)}(e)},children:e},t)}))})]})]})]})})}}}]);
//# sourceMappingURL=28.689dcee9.chunk.js.map