(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[13],{269:function(A,s,e){"use strict";e.r(s);var w=e(2),D=e.n(w),M=e(17),E=e(53),t=e(66),b=e(49),c=e(14),a=e.n(c),n=e(51),i=e(42),x=e(4),l=e(159),r=e(160),R=e(266),B=e(335),G=e(314),o=e(338),Q=e(318),d=e(339),j=e(322),h=e(340),u=e(329),p=e(62),m=e(241),O=e(67),f=e.n(O),g=e(68),v=e.n(g),N=e(69),y=e.n(N),C=e(10),S=e(11),k={firstName:"",lastName:"",email:"",appName:"",appDesc:"",githubUrl:""},I=function(){var A,s=Object(n.h)().id,e=parseInt(s),c=Object(w.useState)(!1),O=Object(b.a)(c,2),g=O[0],N=O[1],I=Object(w.useState)({}),P=Object(b.a)(I,2),Z=P[0],Y=P[1],J=Object(w.useState)(""),F=Object(b.a)(J,2),W=F[0],T=(F[1],l.a.filter((function(A){return parseInt(A.id)===e}))),L=r.a.filter((function(A){return parseInt(A.id)===e})),z=Object(w.useState)(""),H=Object(b.a)(z,2),X=H[0],V=H[1],K=Object(w.useState)(""),U=Object(b.a)(K,2),_=U[0],q=U[1],$=Object(w.useState)(""),AA=Object(b.a)($,2),sA=AA[0],eA=AA[1],wA=Object(w.useState)(""),DA=Object(b.a)(wA,2),MA=DA[0],EA=DA[1],tA=Object(w.useState)(""),bA=Object(b.a)(tA,2),cA=bA[0],aA=bA[1],nA=Object(w.useState)(""),iA=Object(b.a)(nA,2),xA=iA[0],lA=iA[1],rA=Object(w.useState)(k),RA=Object(b.a)(rA,2),BA=(RA[0],RA[1],D.a.useState(!1)),GA=Object(b.a)(BA,2),oA=GA[0],QA=GA[1],dA=Object(w.useState)([]),jA=Object(b.a)(dA,2),hA=jA[0],uA=jA[1],pA=Object(w.useState)([]),mA=Object(b.a)(pA,2),OA=mA[0],fA=mA[1],gA=Object(w.useState)(!1),vA=Object(b.a)(gA,2),NA=vA[0],yA=vA[1],CA=Object(w.useState)(!1),SA=Object(b.a)(CA,2),kA=(SA[0],SA[1]),IA=Object(w.useState)({}),PA=Object(b.a)(IA,2),ZA=PA[0],YA=(PA[1],Object(w.useState)(!1)),JA=Object(b.a)(YA,2),FA=JA[0],WA=JA[1],TA=function(){kA(!1),Y({})};Object(w.useEffect)((function(){LA()}),[]),Object(w.useEffect)((function(){return hA&&hA.forEach((function(A){HA(A)})),yA(!0),function(){fA([])}}),[hA]),Object(w.useEffect)((function(){}),[]);var LA=function(){var A=Object(t.a)(a.a.mark((function A(){var s;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:L[0].apps})},A.next=3,fetch("/platform/api/app/searchFunctionId",s).then((function(A){return A.json()})).then((function(A){return uA(A.fields.Apps)}));case 3:yA(!0);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),zA=0,HA=function(){var A=Object(t.a)(a.a.mark((function A(s){var e;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return fA([]),yA(!0),e={id:s},A.next=5,fetch("/platform/api/app/searchId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(A){return A.json()})).then((function(A){fA((function(s){return[].concat(Object(E.a)(s),[A])})),++zA===hA.length&&yA(!1)}));case 5:case"end":return A.stop()}}),A)})));return function(s){return A.apply(this,arguments)}}(),XA=function(){var A=Object(t.a)(a.a.mark((function A(){var s,e;return a.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return TA(),s={firstName:ZA.firstName,lastName:ZA.lastName,email:ZA.email,githubUrl:xA,appName:MA,appDesc:cA},A.next=4,fetch("/platform/api/app/addcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(A){return uA(A)})).catch((function(A){return console.error(A)}));case 4:return e={firstName:ZA.firstName,toSend:ZA.email,appName:MA,githubUrl:xA},A.next=7,fetch("/platform/api/app/sendMail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),VA=Object(R.a)({palette:{primary:{main:"#5c31ff"},secondary:{main:m.a[400]}}});Object(w.useEffect)((function(){l.b.filter((function(A){return""===W||A.name.toLowerCase().includes(W.toLowerCase())?A:void 0}))}),[W]);var KA=function(){var A=Object(w.useState)(""),s=Object(b.a)(A,2),e=s[0],D=s[1],M=function(){QA(!1)};return Object(S.jsx)("div",{children:Object(S.jsxs)(B.a,{fullWidth:!0,maxWidth:"md",open:oA,onClose:M,children:[Object(S.jsx)(G.a,{children:"Feedback Form"}),Object(S.jsx)(o.a,{children:Object(S.jsx)(Q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Enter your feedback",multiline:!0,minRows:4,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:e,onChange:function(A){return D(A.target.value)}})}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(j.a,{onClick:M,children:"Cancel"}),Object(S.jsx)(j.a,{onClick:function(){Object(C.a)(ZA,e,Z.fields.Name),M()},children:"Submit Feedback"})]})]})})},UA=function(){var A=Object(R.a)({components:{MuiDialogTitle:{styleOverrides:{root:{padding:0,borderBottom:"1px solid lightgray"}}},MuiDialogContent:{styleOverrides:{root:{padding:0}}}}}),s=D.a.useState("body"),e=Object(b.a)(s,2),w=e[0];e[1];N(!0);var M=function(){N(!1),Y({})},E=D.a.useRef(null);return D.a.useEffect((function(){if(g){var A=E.current;null!==A&&A.focus()}}),[g]),Object(S.jsx)(p.c,{theme:A,children:Object(S.jsx)("div",{children:Object(S.jsxs)(B.a,{sx:{height:"100vh",margin:"0 auto",overflow:"hidden"},open:g,maxWidth:"lg",onClose:M,scroll:w,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",className:"dialogBox",children:[Object(S.jsx)(G.a,{id:"scroll-dialog-title",children:Object(S.jsxs)("div",{className:"dialogTop",children:[Object(S.jsx)("img",{src:Z.fields.AppICON[0].url,alt:""}),Object(S.jsxs)("div",{className:"topDesc",children:[Object(S.jsx)("h3",{children:Z.fields.Name}),Object(S.jsx)("p",{className:"shortDesc",children:Z.fields.ShortDescription}),Object(S.jsxs)("div",{className:"categoryDesc",children:[Object(S.jsxs)("p",{children:[Object(S.jsx)("img",{className:"pricingIcon",src:Z.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),"Built by ",Z.fields.BuiltBy]}),Object(S.jsxs)("p",{children:[Object(S.jsx)("img",{className:"pricingIcon",src:Z.fields.PricingICON[0].thumbnails.small.url,alt:"logo"}),Z.fields.Pricing]})]})]}),Object(S.jsx)("span",{className:"closeSpan",onClick:M,children:"x"})]})}),Object(S.jsx)(o.a,{dividers:"body"===w,children:Object(S.jsx)(h.a,{id:"scroll-dialog-description",ref:E,tabIndex:-1,children:Object(S.jsx)("div",{className:"appDialogContent",children:Object(S.jsxs)("div",{className:"appContentTop",children:[Object(S.jsxs)("div",{className:"contentLeft",children:[Object(S.jsx)("h1",{children:"App Description"}),Object(S.jsx)("p",{children:Z.fields.LongDescription}),Object(S.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://katonic.ai/signup.html",children:["Learn more about ",Z.fields.Name," App here"]})]}),Object(S.jsxs)("div",{className:"contentRight",children:[Object(S.jsx)("h4",{children:"Try this yourself"}),Object(S.jsx)("p",{style:{fontSize:"15px"}}),Object(S.jsxs)("ol",{children:[Object(S.jsx)("li",{children:"Get access to the notebook: Modify the code, add lines, and make it yours."}),Object(S.jsx)("li",{children:"Review the Prediction Results: Customise the results with your work data."}),Object(S.jsx)("li",{children:"Interact with model with the Prebuilt App. Modify and showcase the app with others."})]}),Object(S.jsxs)("button",{className:"feedbackBtn",children:[Object(S.jsx)(f.a,{})," ",Object(S.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Send Feedback"})]}),Z.fields.NotebookExists&&Object(S.jsxs)("button",{className:"feedbackBtn",children:[Object(S.jsx)(v.a,{})," ",Object(S.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Launch Notebook"})]}),Z.fields.AppExists&&Object(S.jsxs)("button",{className:"feedbackBtn",children:[Object(S.jsx)(y.a,{})," ",Object(S.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://katonic.ai/signup.html",children:"Launch App"})]}),Z.fields.Category>0&&Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("h4",{style:{marginBottom:"10px"},children:"Categories"})})]})]})})})})]})})})};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"collectionPage",children:[Object(S.jsx)("div",{className:"collectionPageTop"}),Object(S.jsxs)("div",{className:"collectionPageBottom",children:[Object(S.jsxs)("div",{className:"leftInfo",children:[Object(S.jsxs)(i.b,{style:(A={color:"".concat(e>10?T[0].color:L[0].color),fontSize:"18px",fontWeight:"600",background:"#fff",padding:"12px",borderRadius:"8px"},Object(M.a)(A,"fontWeight",600),Object(M.a)(A,"boxShadow","rgba(0,0,0,0.1)"),A),to:"".concat(x.a),children:[Object(S.jsx)("i",{style:{fontSize:"14px",fontWeight:"700"},className:"simple-icon-arrow-left"})," ","Back to App Store"]}),Object(S.jsx)("br",{}),Object(S.jsx)("h1",{style:{color:"".concat(e>10?T[0].color:L[0].color)},children:e>10?T[0].name:L[0].shortDesc}),Object(S.jsx)("p",{style:{color:"".concat(e>10?T[0].color:L[0].color)},children:e>10?T[0].longDesc:L[0].longDesc})]}),Object(S.jsx)("img",{src:e>10?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtsAAAPvCAYAAAAS7AKnAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAAA6BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0xMS0yMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4yODNhNDhjMS1mZGEwLTRiYjgtYmY0Yy00NjQzYmQ0ZDI2YTk8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgPHBkZjpBdXRob3I+U2lkZGhhcnRoIFNhdHlhbTwvcGRmOkF1dGhvcj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiA8L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0ncic/PpPTYZkAABPPSURBVHic7dZBDYAwAMDAMVOzhmNkMBNrSMidgj573et5BwAAcNz8OgAAAP7KbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEDEbAMAQMRsAwBAxGwDAEBkA1DzCnMrlHbAAAAAAElFTkSuQmCC":L[0].bgImage,alt:"imagebg",className:"collectionImage"}),NA?Object(S.jsx)("div",{className:"loading"}):Object(S.jsxs)(u.a,{container:!0,className:"collectionRight",children:[" ",e>10?T[0].apps.map((function(A){var s,e;return Object(S.jsx)(u.a,{item:!0,xs:6,children:Object(S.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){Y(A),N(!0)},children:Object(S.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(S.jsxs)("div",{className:"appSmallInfo",children:[Object(S.jsx)("img",{className:"appLogo",style:{height:"60px"},src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"}),Object(S.jsx)("h4",{children:(null===(s=A.fields.Name)||void 0===s?void 0:s.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(S.jsx)("p",{children:(null===(e=A.fields.ShortDescription)||void 0===e?void 0:e.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(S.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(S.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})})):OA.filter((function(A){return"Katonic"===A.fields.BuiltBy})).map((function(A){var s,e;return Object(S.jsx)(u.a,{item:!0,xs:4,children:Object(S.jsx)("button",{class:"smallAppContainer col-4",onClick:function(){Y(A),N(!0)},children:Object(S.jsxs)("div",{className:"smallApp smallAppCollection",children:[Object(S.jsxs)("div",{className:"appSmallInfo",children:[Object(S.jsx)("img",{className:"appLogo",src:A.fields.CategoryIcon[0].thumbnails.large.url,alt:"asg"},A),Object(S.jsx)("h4",{children:(null===(s=A.fields.Name)||void 0===s?void 0:s.length)>=30?A.fields.Name.slice(0,30)+"...":A.fields.Name}),Object(S.jsx)("p",{children:(null===(e=A.fields.ShortDescription)||void 0===e?void 0:e.length)>=30?A.fields.ShortDescription.slice(0,30)+"...":A.fields.ShortDescription})]}),Object(S.jsx)("div",{children:"Paid"===A.fields.Pricing&&Object(S.jsx)("p",{className:"pricingTag",children:A.fields.Pricing})})]})})})}))]})]}),g&&Object(S.jsx)(UA,{})]}),Object(S.jsx)(p.c,{theme:VA,children:Object(S.jsxs)(B.a,{open:FA,onClose:function(){WA(!1)},children:[Object(S.jsx)(G.a,{children:"App Suggestion"}),Object(S.jsxs)(o.a,{children:[Object(S.jsx)(h.a,{children:"Submit your item suggestions to the Katonic team and we will review it as soon as possible."}),Object(S.jsxs)(u.a,{container:!0,spacing:2,children:[Object(S.jsx)(u.a,{item:!0,xs:6,children:Object(S.jsx)(Q.a,{autoFocus:!0,margin:"dense",id:"name",label:"First Name",type:"text",fullWidth:!0,variant:"standard",name:"firstName",value:X,onChange:function(A){return V(A.target.value)}})}),Object(S.jsx)(u.a,{item:!0,xs:6,children:Object(S.jsx)(Q.a,{margin:"dense",id:"name",label:"Last Name",type:"text",fullWidth:!0,variant:"standard",name:"lastName",value:_,onChange:function(A){return q(A.target.value)}})}),Object(S.jsx)(u.a,{item:!0,xs:12,children:Object(S.jsx)(Q.a,{margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,variant:"standard",name:"email",value:sA,onChange:function(A){return eA(A.target.value)}})}),Object(S.jsx)(u.a,{item:!0,xs:12,children:Object(S.jsx)(Q.a,{margin:"dense",id:"name",label:"App Name",type:"text",fullWidth:!0,variant:"standard",name:"appName",value:MA,onChange:function(A){return EA(A.target.value)}})}),Object(S.jsx)(u.a,{item:!0,xs:12,children:Object(S.jsx)(Q.a,{margin:"dense",id:"name",label:"App Description",multiline:!0,minRows:3,type:"text",fullWidth:!0,variant:"standard",name:"appDesc",value:cA,onChange:function(A){return aA(A.target.value)}})}),Object(S.jsx)(u.a,{item:!0,xs:12,children:Object(S.jsx)(Q.a,{margin:"dense",id:"name",label:"Link to Github",type:"text",fullWidth:!0,variant:"standard",name:"githubUrl",value:xA,onChange:function(A){return lA(A.target.value)}})})]})]}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(j.a,{onClick:TA,children:"Cancel"}),Object(S.jsx)(j.a,{variant:"contained",onClick:XA,children:"Submit"})]})]})})]}),oA&&Object(S.jsx)(KA,{})]})};s.default=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(I,{})})}}}]);
//# sourceMappingURL=13.96bba527.chunk.js.map