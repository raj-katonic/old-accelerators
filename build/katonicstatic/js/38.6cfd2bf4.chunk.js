(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[38],{518:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(168),s=n(57),o=n(55),r=n(48),i=n(14),l=n.n(i),b=n(65),d=n.n(b),j=n(10),p=n(42),u=n.p+"katonicstatic/media/jupyterLabWorkspace.b3a931ca.png",h=n.p+"katonicstatic/media/jupyterNotebookWorkspace.c5187b98.png",m=n.p+"katonicstatic/media/codeWorkspace.608db854.png",k=n.p+"katonicstatic/media/workspaceImg1.4367d28b.png",x=n(11),O=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),n=(t[0],t[1]),a=Object(c.useState)([]),s=Object(r.a)(a,2),i=s[0],b=s[1],O=Object(c.useState)(!1),f=Object(r.a)(O,2),v=f[0],N=f[1],g=Object(c.useState)(""),w=Object(r.a)(g,2),y=w[0],C=w[1],I=Object(c.useState)(!1),B=Object(r.a)(I,2),S=B[0],T=B[1],R={"katonic/katonic-studio:3.0":"Katonic Studio","katonic/notebook-env:base":"Katonic-base","katonic/notebook-env:pyspark":"PySpark","katonic/notebook-env:torchcpu1.8.1":"PyTorch","katonic/notebook-env:tf2.4":"Tensorflow-2","katonic/notebook-env:tf1.4":"Tensorflow-1","katonic/notebook-env:scikt-learn":"Scikt-learn","katonic/vscode:ci":"VS Code","katonic/vscode:miniconda":"VS Code (python)","katonic/lab-env:torchcpu1.8.1":"PyTorch","katonic/lab-env:tf2.4":"Tensorflow-2","katonic/lab-env:tf1.4":"Tensorflow-1","katonic/lab-env:scikt-learn":"Scikt-learn"},W=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/platform/api/notebook/".concat(t,"/delete"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/platform/api/notebook/".concat(t,"/startNb"));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={vsCodeImgs:["katonic/vscode:ci","katonic/vscode:miniconda"],jupyterLabImages:["katonic/katonic-studio:3.0","katonic/notebook-env:base","katonic/lab-env:torchcpu1.8.1","katonic/lab-env:tf2.4","katonic/lab-env:tf1.4","katonic/lab-env:scikt-learn"],jupyterNotebookImages:["katonic/notebook-env:torchcpu1.8.1","katonic/notebook-env:tf2.4","katonic/notebook-env:tf1.4","katonic/notebook-env:scikt-learn"]},P=function(e){return Object(x.jsx)("div",{className:"popup-box",style:{zIndex:1e3},children:Object(x.jsx)("div",{className:"box",children:Object(x.jsxs)("div",{className:"popup-box-content",children:[Object(x.jsxs)("div",{className:"popup-info",children:[Object(x.jsx)("div",{className:"popup-content-left",children:Object(x.jsx)("i",{className:"simple-icon-exclamation deleteIcon popup-icon"})}),Object(x.jsxs)("div",{className:"popup-content-right",children:[Object(x.jsx)("h3",{style:{marginTop:"3rem"},children:"You are about to delete a workspace!"}),Object(x.jsxs)("h3",{children:["This will delete your workspace"," ",Object(x.jsx)("strong",{style:{color:"#5c31ff"},children:e.workspace})," ","permanently"]}),Object(x.jsx)("h3",{children:"Are you sure?"})]})]}),Object(x.jsxs)("div",{className:"popup-box-btns",children:[Object(x.jsx)("button",{className:"popup-btn",onClick:e.handleClose,children:"Cancel"}),Object(x.jsx)("button",{className:"popup-btn popup-btn-delete",onClick:function(){W(e.workspace),setTimeout((function(){return window.location.reload()}),2e3)},children:"Delete"})]})]})})},e.workspace)},D=function(){return Object(x.jsxs)("div",{className:"introPage",children:[Object(x.jsx)("h3",{children:"Get Started with Workspaces"}),Object(x.jsx)("img",{className:"workspaceImg",src:k,alt:"intro"}),Object(x.jsxs)("p",{children:["Workspace sessions are Katonic hosted Interactive Development Environment (IDE) sessions where you can create notebooks with Jupyter, R Studio etc. \xa0",Object(x.jsx)("span",{children:Object(x.jsx)("a",{href:"https://learn.katonic.ai/",target:"_blank",rel:"noreferrer",children:"Learn more"})})]})]})},z=function(){return 1===i.length?Object(x.jsxs)("div",{children:[Object(x.jsxs)("button",{className:"workspaceCreateBtn disabledBtn",type:"button",children:[Object(x.jsx)("span",{children:"+"}),"Create Workspace"]}),Object(x.jsx)("p",{className:"hideMessage",children:"Upgrade to create more workspaces!"})]}):Object(x.jsx)(p.b,{to:"/platform/workspace/createWorkspace",children:Object(x.jsxs)("button",{className:"workspaceCreateBtn",children:[Object(x.jsx)("span",{children:"+"}),"Create Workspace"]})})},A=function(e,t,n,c,a){var s="";return s=M.vsCodeImgs.includes(c)?"vscode/":M.jupyterNotebookImages.includes(c)?"":"lab?",1===e?Object(x.jsx)("div",{children:Object(x.jsxs)("button",{className:"runningBtn connectBtn",children:[" ",Object(x.jsx)("a",{style:{fontSize:"12px",color:"white"},href:"/".concat(n,"-").concat(a,"/").concat(s),target:"_blank",rel:"noreferrer",children:"Connect"})]})}):t>=1?Object(x.jsx)("button",{className:"runningBtn connectBtn",disabled:!0,children:"Start"}):Object(x.jsx)("button",{onClick:function(){L(n),setTimeout((function(){return window.location.reload()}),2e3)},className:"runningBtn connectBtn",children:"Start"})},E=function(e){return"m"===e.charAt(e.length-1)?(e=e.slice(0,-1),e=parseInt(e),e=(e/=1e3).toString()):e.concat(".0")},H=function(e){var t=new Date(e);return t=Math.abs(Date.now()-t)/864e5,Math.floor(t),1===Math.floor(t)?"".concat(Math.floor(t)," day"):"".concat(Math.floor(t)," days")},J=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];T(e)}),[T]),K=Object(c.useCallback)(Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),e.next=3,fetch("/platform/api/notebook").then((function(e){return e.json()})).then((function(e){N(!0),b(e)}),(function(e){N(!0),n(e)}));case 3:case"end":return e.stop()}}),e)}))),[N,b,n]);Object(c.useEffect)((function(){Object(j.e)().then((function(e){C(e.userName)})),K()}),[K]);var U=function(){return Object(x.jsxs)("div",{className:"notebookHead",children:[Object(x.jsx)("p",{style:{fontSize:"22px",fontWeight:"500"},children:"Workspaces"}),Object(x.jsxs)("div",{className:"notebookHeadRight",children:[Object(x.jsx)(z,{}),Object(x.jsx)("button",{className:"refreshButton",type:"button",onClick:K,children:"Refresh"})]})]})};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"h-100 table-container",children:[Object(x.jsx)(U,{}),!v&&Object(x.jsx)("div",{className:"loading"}),v&&0===i.length&&Object(x.jsx)(D,{}),i.map((function(e){return Object(x.jsxs)("div",{className:"newTable",children:[Object(x.jsxs)("div",{id:"tableLeft",children:[Object(x.jsxs)("div",{className:"imgContainer",children:[""===e.stsImageName,Object(x.jsx)("img",{src:M.vsCodeImgs.includes(e.stsImageName)?m:M.jupyterNotebookImages.includes(e.stsImageName)?h:u,alt:"Workspace Icon"})]}),A(e.stsReadyReplicas,e.stsReplicas,e.stsName,e.stsImageName,y)]}),Object(x.jsxs)("div",{id:"tableRight",children:[Object(x.jsxs)("div",{className:"rightTop",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"dataLabel",children:"Name"}),Object(x.jsx)("p",{className:"dataBox",children:e.stsName})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"dataLabel",children:"Image"}),Object(x.jsx)("p",{title:e.stsImageName,className:"dataBox",children:(a=e.stsImageName,R[a]?R[a]:a)})]}),Object(x.jsx)("div",{className:"btnContainer statusIndicator",children:(n=e.stsReadyReplicas,c=e.stsReplicas,1===n?Object(x.jsx)("button",{className:"runningBtn",children:"Running"}):c>=1?Object(x.jsx)("button",{className:"processingBtn",children:"Processing"}):Object(x.jsx)("button",{className:"stoppedBtn",children:"Stopped"}))}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"dataLabel",children:"Age"}),Object(x.jsx)("p",{className:"dataBox",children:H(e.stsCreateTime)})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"dataLabel",children:"Memory"}),Object(x.jsx)("p",{className:"dataBox",children:(t=e.stsMemory,t=(t=t.slice(0,-1)).concat("B"))})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"dataLabel",children:"CPU"}),Object(x.jsx)("p",{className:"dataBox",children:E(e.stsCpu)})]})]}),Object(x.jsx)("div",{className:"bottom",style:{paddingBottom:"20px",display:"flex"},children:Object(x.jsxs)("div",{className:"btnContainer deleteBtnContainer",children:[Object(x.jsx)("button",{style:{border:"none",backgroundColor:"transparent"},onClick:function(){return J(e.stsName)},type:"button",children:Object(x.jsx)("i",{className:"simple-icon-trash deleteIcon"})}),S&&S===e.stsName&&Object(x.jsx)(P,{workspace:e.stsName,handleClose:J})]})})]})]},e.stsName);var t,n,c,a}))]})})};t.default=function(){return Object(x.jsx)(a.a,{children:Object(x.jsx)(s.a,{xxs:"12",children:Object(x.jsx)(O,{textHead:"workspace.workspaces"})})})}}}]);
//# sourceMappingURL=38.6cfd2bf4.chunk.js.map