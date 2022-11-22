(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[2],{135:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 2018 All Rights Reserved.","user.login-title":"Login","user.register":"Register","user.forgot-password":"Forgot Password","user.email":"E-mail","user.password":"Password","user.forgot-password-question":"Forget password?","user.fullname":"Full Name","user.login-button":"LOGIN","user.register-button":"REGISTER","user.reset-password-button":"RESET","user.buy":"BUY","user.username":"Username","menu.home":"Home","menu.app":"Home","menu.dashboards":"Dashboards","menu.gogo":"Gogo","menu.dashboard":"Dashboard","menu.notebook":"Notebook","menu.connectors":"Connectors","menu.filemanager":"File Manager","menu.hyperparametricTuning":"Hyperparameter Tuning","menu.pipelines":"Pipelines","menu.experiments":"Experiments","menu.models":"Models","menu.start":"Start","menu.second-menu":"Second Menu","menu.second":"Second","menu.hpSubmit":"HP Submit","menu.hpMonitor":"HP Monitor","menu.nasSubmit":"NAS Submit","menu.nasMonitor":"NAS Monitor","menu.artifacts":"Artifacts","menu.jobs":"Jobs","menu.runs":"Runs","menu.recurringRuns":"Recurring Runs","menu.archive":"Archive","menu.ui":"UI","menu.charts":"Charts","menu.chat":"Chat","menu.survey":"Survey","menu.todo":"Todo","menu.search":"Search","menu.docs":"Docs","menu.blank-page":"Blank Page","menu.registries":"Registries","menu.servers":"Servers","pages.error-title":"Ooops... looks like an error occurred!","pages.error-code":"Error code","pages.go-back-home":"GO BACK HOME","dashboard.notebooks":"Recent Workspaces","dashboard.pipelines":"Recent Pipelines","dashboard.runs":"Recent Pipelines Runs","dashboard.modalServers":"Model Servers","model.modelServers":"Model Servers","model.modelRegistries":"Model Registries","workspace.workspaces":"Workspaces","pipelines.pipelines":"Pipelines","pipelines.artifacts":"Artifacts","pipelines.runs":"Runs","pipelines.archive":"Archive"}},197:function(e,t){e.exports={"general.copyright":"Gogo React \xa9 Todos los derechos reservados.","user.login-title":"Iniciar sesi\xf3n","user.register":"Registro","user.forgot-password":"Se te olvid\xf3 tu contrase\xf1a","user.email":"Email","user.password":"Contrase\xf1a","user.forgot-password-question":"\xbfContrase\xf1a olvidada?","user.fullname":"Nombre completo","user.login-button":"INICIAR SESI\xd3N","user.register-button":"REGISTRO","user.reset-password-button":"REINICIAR","user.buy":"COMPRAR","user.username":"Nombre de Usuario","menu.home":"Inicio","menu.app":"Inicio","menu.dashboards":"Tableros","menu.gogo":"Gogo","menu.start":"Comienzo","menu.second-menu":"Segundo men\xfa","menu.second":"Segundo","menu.ui":"IU","menu.charts":"Gr\xe1ficos","menu.chat":"Chatea","menu.survey":"Encuesta","menu.todo":"Notas","menu.search":"B\xfasqueda","menu.docs":"Docs","menu.blank-page":"Blank Page","layouts.error-title":"Vaya, parece que ha ocurrido un error!","layouts.error-code":"C\xf3digo de error","layouts.go-back-home":"REGRESAR A INICIO"}},321:function(e,t,n){"use strict";n.r(t);var s=n(5),o=n(71),r=n(72),a=n(81),i=n(86),u=n(2),c=n.n(u),l=n(18),m=n(42),d=n(51),h=n(322),p=n(135),b=n.n(p),f={messages:Object(s.a)({},b.a),locale:"en-US"},g=n(197),j=n.n(g),v={en:f,es:{messages:Object(s.a)({},j.a),locale:"es-ES"},enrtl:{messages:Object(s.a)({},b.a),locale:"en-US"}},O=n(335),y=n(325),x=n(50),C=n.n(x),k=n(11),R=function(e){var t=e.title,n=e.type,s=e.message,o=e.customClassName,r=e.timeOut,a=e.onClick,i=e.onRequestHide,c=function(){i&&i()};Object(u.useEffect)((function(){var e=null;return 0!==r&&(e=setTimeout(c,r)),function(){e&&clearTimeout(e)}}),[]);var l=function(){a&&a(),c()},m=C()(["notification","notification-".concat(n),o]),d=t?Object(k.jsx)("h4",{className:"title",children:t}):null;return Object(k.jsx)("div",{className:m,onClick:function(){return l()},children:Object(k.jsxs)("div",{className:"notification-message",role:"alert",children:[d,Object(k.jsx)("div",{className:"message",children:s})]})})};R.defaultProps={type:"info",title:null,message:null,timeOut:5e3,onClick:function(){},onRequestHide:function(){},customClassName:""};var N=R,S=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleRequestHide=function(t){return function(){var n=e.props.onRequestHide;n&&n(t)}},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.notifications,s=t.enterTimeout,o=t.leaveTimeout,r=C()("notification-container",{"notification-container-empty":0===n.length});return Object(k.jsx)("div",{className:r,children:Object(k.jsx)(O.a,{children:n.map((function(t){var n=t.id||(new Date).getTime();return Object(k.jsx)(y.a,{classNames:"notification",timeout:{exit:o,enter:s},children:Object(k.jsx)(N,{type:t.type,title:t.title,message:t.message,timeOut:t.timeOut,onClick:t.onClick,onRequestHide:e.handleRequestHide(t),customClassName:t.customClassName},n)},n)}))})})}}]),n}(c.a.Component);S.defaultProps={notifications:[],onRequestHide:function(){},enterTimeout:400,leaveTimeout:400};var w=S,T=n(198),I="change",E="primary",H="secondary",P="info",q="success",A="warning",M="error",L=new(function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).listNotify=[],e}return Object(r.a)(n,[{key:"create",value:function(e){var t={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),type:"info",title:null,message:null,timeOut:5e3,customClassName:""};e.priority?this.listNotify.unshift(Object.assign(t,e)):this.listNotify.push(Object.assign(t,e)),this.emitChange()}},{key:"primary",value:function(e,t,n,s,o,r){this.create({type:E,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"secondary",value:function(e,t,n,s,o,r){this.create({type:H,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"info",value:function(e,t,n,s,o,r){this.create({type:P,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"success",value:function(e,t,n,s,o,r){this.create({type:q,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"warning",value:function(e,t,n,s,o,r){this.create({type:A,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"error",value:function(e,t,n,s,o,r){this.create({type:M,message:e,title:t,timeOut:n,onClick:s,priority:o,customClassName:r})}},{key:"remove",value:function(e){this.listNotify=this.listNotify.filter((function(t){return e.id!==t.id})),this.emitChange()}},{key:"emitChange",value:function(){this.emit(I,this.listNotify)}},{key:"addChangeListener",value:function(e){this.addListener(I,e)}},{key:"removeChangeListener",value:function(e){this.removeListener(I,e)}}]),n}(T.EventEmitter)),G=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).componentWillUnmount=function(){L.removeChangeListener(s.handleStoreChange)},s.handleStoreChange=function(e){s.setState({notifications:e})},s.handleRequestHide=function(e){L.remove(e)},L.addChangeListener(s.handleStoreChange),s.state={notifications:[]},s}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state.notifications,t=this.props,n=t.enterTimeout,s=t.leaveTimeout;return Object(k.jsx)(w,{enterTimeout:n,leaveTimeout:s,notifications:e,onRequestHide:this.handleRequestHide})}}]),n}(c.a.Component);G.defaultProps={enterTimeout:400,leaveTimeout:400};var U=G,D=(n(199),n(4)),B=n(10),F=n(137),z=n.n(F),J=c.a.lazy((function(){return n.e(5).then(n.bind(null,332))})),W=c.a.lazy((function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,320))})),K=c.a.lazy((function(){return n.e(7).then(n.bind(null,327))})),V=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(o.a)(this,n),s=t.call(this,e),Object(B.d)().isRtl?(document.body.classList.add("rtl"),document.body.classList.remove("ltr")):(document.body.classList.add("ltr"),document.body.classList.remove("rtl")),s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){Object(B.e)().then((function(e){window.Intercom("boot",{app_id:"mh9opb7w",name:"".concat(e.firstName),email:"".concat(e.email)})})),window.Intercom("update"),z.a.init("58ac274025135a3f9ca69d98fa99a562",{debug:!0})}},{key:"render",value:function(){var e=this.props.locale,t=v[e];return Object(k.jsx)("div",{className:"h-100",children:Object(k.jsx)(h.a,{locale:t.locale,messages:t.messages,children:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(U,{}),Object(k.jsx)(u.Suspense,{fallback:Object(k.jsx)("div",{className:"loading"}),children:Object(k.jsx)(m.a,{children:Object(k.jsxs)(d.d,{children:[Object(k.jsx)(d.b,{path:D.a,render:function(e){return Object(k.jsx)(W,Object(s.a)({},e))}}),Object(k.jsx)(d.b,{path:"/error",exact:!0,render:function(e){return Object(k.jsx)(K,Object(s.a)({},e))}}),Object(k.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(k.jsx)(J,Object(s.a)({},e))}}),Object(k.jsx)(d.a,{to:"/error"})]})})})]})})})}}]),n}(c.a.Component);t.default=Object(l.b)((function(e){return{locale:e.settings.locale}}),{})(V)}}]);
//# sourceMappingURL=App.067fe278.chunk.js.map