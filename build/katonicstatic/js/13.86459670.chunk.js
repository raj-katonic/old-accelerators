(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[13],{270:function(A,s,e){"use strict";e.r(s);var w=e(2),D=e.n(w),M=e(17),E=e(53),t=e(67),b=e(49),c=e(14),a=e.n(c),n=e(51),i=e(42),x=e(4),l=e(160),r=e(161),R=e(267),B=e(336),G=e(315),Q=e(339),o=e(319),d=e(340),j=e(323),h=e(341),u=e(330),p=e(62),m=e(242),O=e(68),f=e.n(O),g=e(69),v=e.n(g),N=e(70),y=e.n(N),C=e(10),S=e(64),k=e(11),I={firstName:"",lastName:"",email:"",appName:"",appDesc:"",githubUrl:""},P=function(){var A,s=Object(n.h)().id,e=parseInt(s),c=Object(w.useState)(!1),O=Object(b.a)(c,2),g=O[0],N=O[1],P=Object(w.useState)({}),Z=Object(b.a)(P,2),Y=Z[0],J=Z[1],F=Object(w.useState)(""),W=Object(b.a)(F,2),T=W[0],L=(W[1],l.a.filter((function(A){return parseInt(A.id)===e}))),z=r.a.filter((function(A){return parseInt(A.id)===e})),H=Object(w.useState)(""),X=Object(b.a)(H,2),V=X[0],K=X[1],U=Object(w.useState)(""),_=Object(b.a)(U,2),q=_[0],$=_[1],AA=Object(w.useState)(""),sA=Object(b.a)(AA,2),eA=sA[0],wA=sA[1],DA=Object(w.useState)(""),MA=Object(b.a)(DA,2),EA=MA[0],tA=MA[1],bA=Object(w.useState)(""),cA=Object(b.a)(bA,2),aA=cA[0],nA=cA[1],iA=Object(w.useState)(""),xA=Object(b.a)(iA,2),lA=xA[0],rA=xA[1],RA=Object(w.useState)(I),BA=Object(b.a)(RA,2),GA=(BA[0],BA[1],D.a.useState(!1)),QA=Object(b.a)(GA,2),oA=QA[0],dA=QA[1],jA=Object(w.useState)([]),hA=Object(b.a)(jA,2),uA=hA[0],pA=hA[1],mA=Object(w.useState)([]),OA=Object(b.a)(mA,2),fA=OA[0],gA=OA[1],vA=Object(w.useState)(!1),NA=Object(b.a)(vA,2),yA=NA[0],CA=NA[1],SA=Object(w.useState)(!1),kA=Object(b.a)(SA,2),IA=(kA[0],kA[1]),PA=Object(w.useState)({}),ZA=Object(b.a)(PA,2),YA=ZA[0],JA=(ZA[1],Object(w.useState)(!1)),FA=Object(b.a)(JA,2),WA=FA[0],TA=FA[1],LA=function(){IA(!1),J({})};Object(w.useEffect)((function(){S.a.pageview("/appcollection/".concat(s)),zA()}),[]),Object(w.useEffect)((function(){return uA&&uA.forEach((function(A){XA(A)})),CA(!0),function(){gA([])}}),[uA]),Object(w.useEffect)((function(){}),[]);var zA=function(){var A=Object(t.a)(a.a.mark((function A(){var s;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:z[0].apps})},A.next=3,fetch("/platform/api/app/searchFunctionId",s).then((function(A){return A.json()})).then((function(A){return pA(A.fields.Apps)}));case 3:CA(!0);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),HA=0,XA=function(){var A=Object(t.a)(a.a.mark((function A(s){var e;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return gA([]),CA(!0),e={id:s},A.next=5,fetch("/platform/api/app/searchId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(A){return A.json()})).then((function(A){gA((function(s){return[].concat(Object(E.a)(s),[A])})),++HA===uA.length&&CA(!1)}));case 5:case"end":return A.stop()}}),A)})));return function(s){return A.apply(this,arguments)}}(),VA=function(){var A=Object(t.a)(a.a.mark((function A(){var s,e;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return LA(),s={firstName:YA.firstName,lastName:YA.lastName,email:YA.email,githubUrl:lA,appName:EA,appDesc:aA},A.next=4,fetch("/platform/api/app/addcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(A){return pA(A)})).catch((function(A){return console.error(A)}));case 4:return e={firstName:YA.firstName,toSend:YA.email,appName:EA,githubUrl:lA},A.next=7,fetch("/platform/api/app/sendMail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),KA=Object(R.a)({palette:{primary:{main:"#5c31ff"},secondary:{main:m.a[400]}}});Object(w.useEffect)((function(){l.b.filter((function(A){return""===T||A.name.toLowerCase().includes(T.toLowerCase())?A:void 0}))}),[T]);var UA=function(){var A=Object(w.useState)(""),s=Object(b.a)(A,2),e=s[0],D=s[1],M=function(){dA(!1)};return Object(k.jsx)("div",{children:Object(k.jsxs)(B.a,{fullWidth:!0,maxWidth:"md",open:oA,onClose:M,children:[Object(k.jsx)(G.a,{children:"Feedback Form"}),Object(k.jsx)(Q.a,{children:Object(k.jsx)(o.a,{autoFocus:!0,margin:"dense",id:"name",label:"Enter your feedback",multiline:!0,minRows:4,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:e,onChange:function(A){return D(A.target.value)}})}),Object(k.jsxs)(d.a,{children:[Object(k.jsx)(j.a,{onClick:M,children:"Cancel"}),Object(k.jsx)(j.a,{onClick:function(){Object(C.a)(YA,e,Y.fields.Name),M()},children:"Submit Feedback"})]})]})})},_A=function(){var A=Object(R.a)({components:{MuiDialogTitle:{styleOverrides:{root:{padding:0,borderBottom:"1px solid lightgray"}}},MuiDialogContent:{styleOverrides:{root:{padding:0}}}}}),s=D.a.useState("body"),e=Object(b.a)(s,2),w=e[0];e[1];N(!0);var M=function(){N(!1),J({})},E=D.a.useRef(null);return D.a.useEffect((function(){if(g){var A=E.current;null!==A&&A.focus()}}),[g]),Object(k.jsx)(p.c,{theme:A,children:Object(k.jsx)("div",{children:Object(k.jsxs)(B.a,{sx:{height:"100vh",margin:"0 auto",overflow:"hidden"},open:g,maxWidth:"lg",onClose:M,scroll:w,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",className:"dialogBox",children:[Object(k.jsx)(G.a,{id:"scroll-dialog-title",children:Object(k.jsxs)("div",{className:"dialogTop",children:[Object(k.jsx)("img",{src:Y.fields.AppICON[0].url,alt:""}),Object(k.jsxs)("div",{className:"topDesc",children:[Object(k.jsx)("h3",{children:Y.fields.Name}),Object(k.jsx)("p",{className:"shortDesc",children:Y.fields.ShortDescription}),Object(k.jsxs)("div",{className:"categoryDesc",children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{className:"pricingIcon",src:Y.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),"Built by ",Y.fields.BuiltBy]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("img",{className:"pricingIcon",src:Y.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),Y.fields.Pricing]})]})]}),Object(k.jsx)("span",{className:"closeSpan",onClick:M,children:"x"})]})}),Object(k.jsx)(Q.a,{dividers:"body"===w,children:Object(k.jsx)(h.a,{id:"scroll-dialog-description",ref:E,tabIndex:-1,children:Object(k.jsx)("div",{className:"appDialogContent",children:Object(k.jsxs)("div",{className:"appContentTop",children:[Object(k.jsxs)("div",{className:"contentLeft",children:[Object(k.jsx)("h1",{children:"App Description"}),Object(k.jsx)("p",{children:Y.fields.LongDescription}),Object(k.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://katonic.ai/signup.html",children:["Learn more about ",Y.fields.Name," App here"]})]}),Object(k.jsxs)("div",{className:"contentRight",children:[Object(k.jsx)("h4",{children:"Try this yourself"}),Object(k.jsx)("p",{style:{fontSize:"15px"}}),Object(k.jsxs)("ol",{children:[Object(k.jsx)("li",{children:"Get access to the notebook: Modify the code, add lines, and make it yours."}),Object(k.jsx)("li",{children:"Review the Prediction Results: Customise the results with your work data."}),Object(k.jsx)("li",{children:"Interact with model with the Prebuilt App. Modify and showcase the app with others."})]}),Object(k.jsxs)("button",{className:"feedbackBtn",children:[Object(k.jsx)(f.a,{})," ",Object(k.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Send Feedback"})]}),Y.fields.NotebookExists&&Object(k.jsxs)("button",{className:"feedbackBtn",children:[Object(k.jsx)(v.a,{})," ",Object(k.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Launch Notebook"})]}),Y.fields.AppExists&&Object(k.jsxs)("button",{className:"feedbackBtn",children:[Object(k.jsx)(y.a,{})," ",Object(k.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Launch App"})]}),Y.fields.Category>0&&Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("h4",{style:{marginBottom:"10px"},children:"Categories"})})]})]})})})})]})})})};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"collectionPage",children:[Object(k.jsx)("div",{className:"collectionPageTop"}),Object(k.jsxs)("div",{className:"collectionPageBottom",children:[Object(k.jsxs)("div",{className:"leftInfo",children:[Object(k.jsxs)(i.b,{style:(A={color:"black",fontSize:"18px",fontWeight:"600",background:"#fff",padding:"12px",borderRadius:"8px"},Object(M.a)(A,"fontWeight",600),Object(M.a)(A,"boxShadow","rgba(0,0,0,0.1)"),A),to:"".concat(x.a),children:[Object(k.jsx)("i",{style:{fontSize:"14px",fontWeight:"700"},className:"simple-icon-arrow-left"})," ","Back to App Store"]}),Object(k.jsx)("br",{}),Object(k.jsx)("h1",{style:{color:"".concat(e>10?L[0].color:z[0].color)},children:e>10?L[0].name:z[0].shortDesc}),Object(k.jsx)("p",{style:{color:"".concat(e>10?L[0].color:z[0].color)},children:e>10?L[0].longDesc:z[0].longDesc})]}),Object(k.jsx)("img",{src:e>10?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAAPvCAYAAAAS7AKnAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMS0yMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4yODNhNDhjMS1mZGEwLTRiYjgtYmY0Yy00NjQzYmQ0ZDI2YTk8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+U2lkZGhhcnRoIFNhdHlhbTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PpPTYZkAABPPSURBVHic7dZBDYAwAMDAMVOzhmNkMBNrSMidgj573et5BwAAcNz8OgAAAP7KbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEBkA1DzCnMrlHbAAAAAAElFTkSuQmCC":z[0].bgImage,alt:"imagebg",className:"collectionImage"}),yA?Object(k.jsx)("div",{className:"loading"}):Object(k.jsxs)(u.a,{container:!0,className:"collectionRight",children:[" ",e>10?L[0].apps.map((function(A){var s,e;return Object(k.jsx)(u.a,{item:!0,xs:6,children:Object(k.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){J(A),N(!0)},children:Object(k.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(k.jsxs)("div",{className:"appSmallInfo",children:[Object(k.jsx)("img",{className:"appLogo",style:{height:"60px"},src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"}),Object(k.jsx)("h4",{children:(null===(s=A.fields.Name)||void 0===s?void 0:s.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(k.jsx)("p",{children:(null===(e=A.fields.ShortDescription)||void 0===e?void 0:e.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(k.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(k.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})})):fA.filter((function(A){return"Katonic"===A.fields.BuiltBy})).map((function(A){var s,e;return Object(k.jsx)(u.a,{item:!0,xs:4,children:Object(k.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){J(A),N(!0)},children:Object(k.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(k.jsxs)("div",{className:"appSmallInfo",children:[Object(k.jsx)("img",{className:"appLogo",src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"},A),Object(k.jsx)("h4",{children:(null===(s=A.fields.Name)||void 0===s?void 0:s.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(k.jsx)("p",{children:(null===(e=A.fields.ShortDescription)||void 0===e?void 0:e.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(k.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(k.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})}))]})]}),g&&Object(k.jsx)(_A,{})]}),Object(k.jsx)(p.c,{theme:KA,children:Object(k.jsxs)(B.a,{open:WA,onClose:function(){TA(!1)},children:[Object(k.jsx)(G.a,{children:"App Suggestion"}),Object(k.jsxs)(Q.a,{children:[Object(k.jsx)(h.a,{children:"Submit your item suggestions to the Katonic team and we will review it as soon as possible."}),Object(k.jsxs)(u.a,{container:!0,spacing:2,children:[Object(k.jsx)(u.a,{item:!0,xs:6,children:Object(k.jsx)(o.a,{autoFocus:!0,margin:"dense",id:"name",label:"First Name",type:"text",fullWidth:!0,variant:"standard",name:"firstName",value:V,onChange:function(A){return K(A.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:6,children:Object(k.jsx)(o.a,{margin:"dense",id:"name",label:"Last Name",type:"text",fullWidth:!0,variant:"standard",name:"lastName",value:q,onChange:function(A){return $(A.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(o.a,{margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,variant:"standard",name:"email",value:eA,onChange:function(A){return wA(A.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(o.a,{margin:"dense",id:"name",label:"App Name",type:"text",fullWidth:!0,variant:"standard",name:"appName",value:EA,onChange:function(A){return tA(A.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(o.a,{margin:"dense",id:"name",label:"App Description",multiline:!0,minRows:3,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:aA,onChange:function(A){return nA(A.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(o.a,{margin:"dense",id:"name",label:"Link to Github",type:"text",fullWidth:!0,variant:"standard",name:"githubUrl",value:lA,onChange:function(A){return rA(A.target.value)}})})]})]}),Object(k.jsxs)(d.a,{children:[Object(k.jsx)(j.a,{onClick:LA,children:"Cancel"}),Object(k.jsx)(j.a,{variant:"contained",onClick:VA,children:"Submit"})]})]})})]}),oA&&Object(k.jsx)(UA,{})]})};s.default=function(){return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(P,{})})}}}]);
//# sourceMappingURL=13.86459670.chunk.js.map