(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[31],{520:function(A,e,s){"use strict";s.r(e);var w=s(2),D=s.n(w),M=s(57),E=s(56),t=s(49),b=s(14),c=s.n(b),n=s(55),a=s(42),i=s(4),x=s(279),l=s(280),r=(s(285),s(513)),R=s(587),o=s(571),B=s(590),G=s(574),Q=s(591),d=s(578),j=s(592),p=s(584),h=s(71),u=s(369),m=s(75),O=s.n(m),f=s(84),g=s.n(f),v=s(85),N=s.n(v),y=s(10),C=s(11),S={firstName:"",lastName:"",email:"",appName:"",appDesc:"",githubUrl:""},k=function(){var A=Object(n.h)().id,e=parseInt(A),s=Object(w.useState)(!1),b=Object(t.a)(s,2),m=b[0],f=b[1],v=Object(w.useState)({}),k=Object(t.a)(v,2),I=k[0],P=k[1],Z=Object(w.useState)(""),Y=Object(t.a)(Z,2),J=Y[0],L=(Y[1],x.a.filter((function(A){return parseInt(A.id)===e}))),T=l.a.filter((function(A){return parseInt(A.id)===e})),F=Object(w.useState)(""),H=Object(t.a)(F,2),W=H[0],z=H[1],X=Object(w.useState)(""),V=Object(t.a)(X,2),K=V[0],U=V[1],_=Object(w.useState)(""),q=Object(t.a)(_,2),$=q[0],AA=q[1],eA=Object(w.useState)(""),sA=Object(t.a)(eA,2),wA=sA[0],DA=sA[1],MA=Object(w.useState)(""),EA=Object(t.a)(MA,2),tA=EA[0],bA=EA[1],cA=Object(w.useState)(""),nA=Object(t.a)(cA,2),aA=nA[0],iA=nA[1],xA=Object(w.useState)(S),lA=Object(t.a)(xA,2),rA=(lA[0],lA[1],D.a.useState(!1)),RA=Object(t.a)(rA,2),oA=RA[0],BA=RA[1],GA=Object(w.useState)([]),QA=Object(t.a)(GA,2),dA=QA[0],jA=QA[1],pA=Object(w.useState)([]),hA=Object(t.a)(pA,2),uA=hA[0],mA=hA[1],OA=Object(w.useState)(!1),fA=Object(t.a)(OA,2),gA=fA[0],vA=fA[1],NA=Object(w.useState)(!1),yA=Object(t.a)(NA,2),CA=(yA[0],yA[1]),SA=Object(w.useState)({}),kA=Object(t.a)(SA,2),IA=kA[0],PA=kA[1],ZA=Object(w.useState)(!1),YA=Object(t.a)(ZA,2),JA=YA[0],LA=YA[1],TA=function(){CA(!1),P({})};Object(w.useEffect)((function(){FA()}),[]),Object(w.useEffect)((function(){return dA&&dA.forEach((function(A){WA(A)})),vA(!0),function(){mA([])}}),[dA]),Object(w.useEffect)((function(){Object(y.e)().then((function(A){return PA(A)}))}),[]);var FA=function(){var A=Object(E.a)(c.a.mark((function A(){var e;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:T[0].apps})},A.next=3,fetch("/platform/api/app/searchFunctionId",e).then((function(A){return A.json()})).then((function(A){return jA(A.fields.Apps)}));case 3:vA(!0);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),HA=0,WA=function(){var A=Object(E.a)(c.a.mark((function A(e){var s;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return mA([]),vA(!0),s={id:e},A.next=5,fetch("/platform/api/app/searchId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(A){return A.json()})).then((function(A){mA((function(e){return[].concat(Object(M.a)(e),[A])})),++HA===dA.length&&vA(!1)}));case 5:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),zA=function(){var A=Object(E.a)(c.a.mark((function A(){var e,s;return c.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return TA(),e={firstName:IA.firstName,lastName:IA.lastName,email:IA.email,githubUrl:aA,appName:wA,appDesc:tA},A.next=4,fetch("/platform/api/app/addcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(A){return jA(A)})).catch((function(A){return console.error(A)}));case 4:return s={firstName:IA.firstName,toSend:IA.email,appName:wA,githubUrl:aA},A.next=7,fetch("/platform/api/app/sendMail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),XA=Object(r.a)({palette:{primary:{main:"#5c31ff"},secondary:{main:u.a[400]}}});Object(w.useEffect)((function(){x.b.filter((function(A){return""===J||A.name.toLowerCase().includes(J.toLowerCase())?A:void 0}))}),[J]);var VA=function(){var A=Object(w.useState)(""),e=Object(t.a)(A,2),s=e[0],D=e[1],M=function(){BA(!1)};return Object(C.jsx)("div",{children:Object(C.jsxs)(R.a,{fullWidth:!0,maxWidth:"md",open:oA,onClose:M,children:[Object(C.jsx)(o.a,{children:"Feedback Form"}),Object(C.jsx)(B.a,{children:Object(C.jsx)(G.a,{autoFocus:!0,margin:"dense",id:"name",label:"Enter your feedback",multiline:!0,minRows:4,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:s,onChange:function(A){return D(A.target.value)}})}),Object(C.jsxs)(Q.a,{children:[Object(C.jsx)(d.a,{onClick:M,children:"Cancel"}),Object(C.jsx)(d.a,{onClick:function(){Object(y.a)(IA,s,I.fields.Name),M()},children:"Submit Feedback"})]})]})})},KA=function(){var A=Object(r.a)({components:{MuiDialogTitle:{styleOverrides:{root:{padding:0,borderBottom:"1px solid lightgray"}}},MuiDialogContent:{styleOverrides:{root:{padding:0}}}}}),e=D.a.useState("body"),s=Object(t.a)(e,2),w=s[0];s[1];f(!0);var M=function(){f(!1),P({})},E=D.a.useRef(null);return D.a.useEffect((function(){if(m){var A=E.current;null!==A&&A.focus()}}),[m]),Object(C.jsx)(h.c,{theme:A,children:Object(C.jsx)("div",{children:Object(C.jsxs)(R.a,{sx:{height:"100vh",margin:"0 auto",overflow:"hidden"},open:m,maxWidth:"lg",onClose:M,scroll:w,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",className:"dialogBox",children:[Object(C.jsx)(o.a,{id:"scroll-dialog-title",children:Object(C.jsxs)("div",{className:"dialogTop",children:[Object(C.jsx)("img",{src:I.fields.AppICON[0].url,alt:""}),Object(C.jsxs)("div",{className:"topDesc",children:[Object(C.jsx)("h3",{children:I.fields.Name}),Object(C.jsx)("p",{className:"shortDesc",children:I.fields.ShortDescription}),Object(C.jsxs)("div",{className:"categoryDesc",children:[Object(C.jsxs)("p",{children:[Object(C.jsx)("img",{className:"pricingIcon",src:I.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),"Built by ",I.fields.BuiltBy]}),Object(C.jsxs)("p",{children:[Object(C.jsx)("img",{className:"pricingIcon",src:I.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),I.fields.Pricing]})]})]}),Object(C.jsx)("span",{className:"closeSpan",onClick:M,children:"x"})]})}),Object(C.jsx)(B.a,{dividers:"body"===w,children:Object(C.jsx)(j.a,{id:"scroll-dialog-description",ref:E,tabIndex:-1,children:Object(C.jsx)("div",{className:"appDialogContent",children:Object(C.jsxs)("div",{className:"appContentTop",children:[Object(C.jsxs)("div",{className:"contentLeft",children:[Object(C.jsx)("h1",{children:"App Description"}),Object(C.jsx)("p",{children:I.fields.LongDescription}),Object(C.jsxs)("a",{target:"_blank",rel:"noreferrer",href:I.fields.LinkToLearnMore,children:["Learn more about ",I.fields.Name," App here"]})]}),Object(C.jsxs)("div",{className:"contentRight",children:[Object(C.jsx)("h4",{children:"Try this yourself"}),Object(C.jsx)("p",{style:{fontSize:"15px"}}),Object(C.jsxs)("ol",{children:[Object(C.jsx)("li",{children:"Get access to the notebook: Modify the code, add lines, and make it yours."}),Object(C.jsx)("li",{children:"Review the Prediction Results: Customise the results with your work data."}),Object(C.jsx)("li",{children:"Interact with model with the Prebuilt App. Modify and showcase the app with others."})]}),Object(C.jsxs)("button",{className:"feedbackBtn",children:[Object(C.jsx)(O.a,{})," ",Object(C.jsx)("span",{onClick:function(){return BA(!0)},children:"Send Feedback"})]}),I.fields.NotebookExists&&Object(C.jsxs)("button",{className:"feedbackBtn",children:[Object(C.jsx)(g.a,{})," ",Object(C.jsx)("a",{rel:"noreferrer",target:"_blank",href:I.fields.NotebookLink,children:"Launch Notebook"})]}),I.fields.AppExists&&Object(C.jsxs)("button",{className:"feedbackBtn",children:[Object(C.jsx)(N.a,{})," ",Object(C.jsx)("a",{rel:"noreferrer",target:"_blank",href:I.fields.AppLink,children:"Launch App"})]}),I.fields.Category>0&&Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("h4",{style:{marginBottom:"10px"},children:"Categories"})})]})]})})})})]})})})};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"collectionPage",children:[Object(C.jsx)("div",{className:"collectionPageTop",children:Object(C.jsxs)("div",{className:"appHead collectionHead",children:[Object(C.jsxs)("div",{className:"appHeadLeft collectionHeadLeft",children:[Object(C.jsxs)("h1",{style:{fontSize:"23px"},className:"appHeading",children:[" ",Object(C.jsx)("i",{className:"simple-icon-grid",style:{color:"#5c31ff",marginRight:"5px"}}),"App Store"]}),Object(C.jsx)("p",{className:"appDesc",children:"Marketplace of Solution Accelerators including Pre Built Code, Notebooks, and step by step instructions to get started."}),Object(C.jsxs)("button",{onClick:function(){CA(!0)},style:{fontSize:"15px",color:"#5c31ff",marginTop:"15px",marginBottom:"-10px",border:"none"},children:[Object(C.jsx)("i",{className:"iconsminds-open-book"})," Submit to App Catalogue"]})]}),Object(C.jsx)("div",{className:"appHeadRight collectionHeadRight"})]})}),Object(C.jsxs)("div",{className:"collectionPageBottom",children:[Object(C.jsxs)("div",{className:"leftInfo",children:[Object(C.jsxs)(a.c,{style:{color:"".concat(e>10?L[0].color:T[0].color),fontSize:"18px",fontWeight:"600"},to:"".concat(i.a,"/apps"),children:[Object(C.jsx)("i",{style:{fontSize:"14px",fontWeight:"700"},className:"simple-icon-arrow-left"})," ","Back to App Store"]}),Object(C.jsx)("br",{}),Object(C.jsx)("h1",{style:{color:"".concat(e>10?L[0].color:T[0].color)},children:e>10?L[0].name:T[0].shortDesc}),Object(C.jsx)("p",{style:{color:"".concat(e>10?L[0].color:T[0].color)},children:e>10?L[0].longDesc:T[0].longDesc})]}),Object(C.jsx)("img",{src:e>10?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAAPvCAYAAAAS7AKnAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMS0yMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4yODNhNDhjMS1mZGEwLTRiYjgtYmY0Yy00NjQzYmQ0ZDI2YTk8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+U2lkZGhhcnRoIFNhdHlhbTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PpPTYZkAABPPSURBVHic7dZBDYAwAMDAMVOzhmNkMBNrSMidgj573et5BwAAcNz8OgAAAP7KbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEBkA1DzCnMrlHbAAAAAAElFTkSuQmCC":T[0].bgImage,alt:"imagebg",className:"collectionImage"}),gA?Object(C.jsx)("div",{className:"loading"}):Object(C.jsxs)(p.a,{container:!0,className:"collectionRight",children:[" ",e>10?L[0].apps.map((function(A){var e,s;return Object(C.jsx)(p.a,{item:!0,xs:6,children:Object(C.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){P(A),f(!0)},children:Object(C.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(C.jsxs)("div",{className:"appSmallInfo",children:[Object(C.jsx)("img",{className:"appLogo",style:{height:"60px"},src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"}),Object(C.jsx)("h4",{children:(null===(e=A.fields.Name)||void 0===e?void 0:e.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(C.jsx)("p",{children:(null===(s=A.fields.ShortDescription)||void 0===s?void 0:s.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(C.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(C.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})})):uA.filter((function(A){return"Katonic"===A.fields.BuiltBy})).map((function(A){var e,s;return Object(C.jsx)(p.a,{item:!0,xs:4,children:Object(C.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){P(A),f(!0)},children:Object(C.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(C.jsxs)("div",{className:"appSmallInfo",children:[Object(C.jsx)("img",{className:"appLogo",src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"},A),Object(C.jsx)("h4",{children:(null===(e=A.fields.Name)||void 0===e?void 0:e.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(C.jsx)("p",{children:(null===(s=A.fields.ShortDescription)||void 0===s?void 0:s.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(C.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(C.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})}))]})]}),m&&Object(C.jsx)(KA,{})]}),Object(C.jsx)(h.c,{theme:XA,children:Object(C.jsxs)(R.a,{open:JA,onClose:function(){LA(!1)},children:[Object(C.jsx)(o.a,{children:"App Suggestion"}),Object(C.jsxs)(B.a,{children:[Object(C.jsx)(j.a,{children:"Submit your item suggestions to the Katonic team and we will review it as soon as possible."}),Object(C.jsxs)(p.a,{container:!0,spacing:2,children:[Object(C.jsx)(p.a,{item:!0,xs:6,children:Object(C.jsx)(G.a,{autoFocus:!0,margin:"dense",id:"name",label:"First Name",type:"text",fullWidth:!0,variant:"standard",name:"firstName",value:W,onChange:function(A){return z(A.target.value)}})}),Object(C.jsx)(p.a,{item:!0,xs:6,children:Object(C.jsx)(G.a,{margin:"dense",id:"name",label:"Last Name",type:"text",fullWidth:!0,variant:"standard",name:"lastName",value:K,onChange:function(A){return U(A.target.value)}})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(G.a,{margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,variant:"standard",name:"email",value:$,onChange:function(A){return AA(A.target.value)}})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(G.a,{margin:"dense",id:"name",label:"App Name",type:"text",fullWidth:!0,variant:"standard",name:"appName",value:wA,onChange:function(A){return DA(A.target.value)}})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(G.a,{margin:"dense",id:"name",label:"App Description",multiline:!0,minRows:3,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:tA,onChange:function(A){return bA(A.target.value)}})}),Object(C.jsx)(p.a,{item:!0,xs:12,children:Object(C.jsx)(G.a,{margin:"dense",id:"name",label:"Link to Github",type:"text",fullWidth:!0,variant:"standard",name:"githubUrl",value:aA,onChange:function(A){return iA(A.target.value)}})})]})]}),Object(C.jsxs)(Q.a,{children:[Object(C.jsx)(d.a,{onClick:TA,children:"Cancel"}),Object(C.jsx)(d.a,{variant:"contained",onClick:zA,children:"Submit"})]})]})})]}),oA&&Object(C.jsx)(VA,{})]})};e.default=function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(k,{})})}}}]);
//# sourceMappingURL=31.e95ff953.chunk.js.map