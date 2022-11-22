(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[11],{177:function(e,t,n){"use strict";t.a="http://localhost:8000"},384:function(e,t){},519:function(e,t,n){"use strict";n.r(t);var i=n(49),r=n(2),o=n(55),a=n(194),c=n(105),s=n(123),d=n(166),l=n(195),u=n(197),p=n(196),b=n(103),g=n(289),O=n(222),j=n(232),h=n(119),f=n(61),m=n(177),x=n(384),I=n.n(x),y=n(56),N=n(14),F=n.n(N),S=n(385),P=n.n(S),C=n(416),v=n.n(C),k=n(510),w=n.n(k),D={sourceDefinitionId:"decd338e-5647-4c0b-adf4-da0e75f5a750",documentationUrl:"https://docs.airbyte.io/integrations/sources/postgres",connectionSpecification:{$schema:"http://json-schema.org/draft-07/schema#",title:"Postgres Source Spec",type:"object",required:["host","port","database","username"],additionalProperties:!1,properties:{host:{title:"Host",description:"Hostname of the database.",type:"string",order:0},port:{title:"Port",description:"Port of the database.",type:"integer",minimum:0,maximum:65536,default:5432,examples:["5432"],order:1},database:{title:"DB Name",description:"Name of the database.",type:"string",order:2},username:{title:"User",description:"Username to use to access the database.",type:"string",order:3},password:{title:"Password",description:"Password associated with the username.",type:"string",airbyte_secret:!0,order:4},ssl:{title:"Connect using SSL",description:"Encrypt client/server communications for increased security.",type:"boolean",default:!1,order:5},replication_method:{type:"object",title:"Replication Method",description:"Replication method to use for extracting data from the database.",order:6,oneOf:[{title:"Standard",additionalProperties:!1,description:"Standard replication requires no setup on the DB side but will not be able to represent deletions incrementally.",required:["method"],properties:{method:{type:"string",enum:["Standard"],default:"Standard",order:0}}},{title:"Logical Replication (CDC)",additionalProperties:!1,description:'Logical replication uses the Postgres write-ahead log (WAL) to detect inserts, updates, and deletes. This needs to be configured on the source database itself. Only available on Postgres 10 and above. Read the <a href="https://docs.airbyte.io/integrations/sources/postgres">Postgres Source</a> docs for more information.',required:["method","replication_slot","publication"],properties:{method:{type:"string",enum:["CDC"],default:"CDC",order:0},replication_slot:{type:"string",description:"A pgoutput logical replication slot.",order:1},publication:{type:"string",description:"A Postgres publication used for consuming changes.",order:2}}}]}}},jobInfo:{id:"5e971d42-8c2a-41c3-88b1-cf93df5849d7",configType:"get_spec",configId:"Optional.empty",createdAt:1631857039345,endedAt:1631857096488,succeeded:!0,logs:{logLines:["2021-09-17 05:37:19 INFO  Executing worker wrapper. Airbyte version: 0.27.2-alpha","2021-09-17 05:37:19 INFO  stdoutLocalPort = 9002","2021-09-17 05:37:19 INFO  stderrLocalPort = 9003","2021-09-17 05:37:19 INFO  Creating stdout socket server...","2021-09-17 05:37:19 INFO  Creating pod...","2021-09-17 05:37:19 INFO  Creating stderr socket server...","2021-09-17 05:37:19 INFO  Waiting until command fetcher pod completes...","2021-09-17 05:37:39 INFO  Found entrypoint: /airbyte/base.sh","2021-09-17 05:37:39 INFO  Creating pod...","2021-09-17 05:37:39 INFO  Waiting for init container to be ready before copying files...","2021-09-17 05:37:39 INFO  Init container present..","2021-09-17 05:37:40 INFO  Init container ready..","2021-09-17 05:37:40 INFO  Copying files...","2021-09-17 05:37:40 INFO  Uploading file: FINISHED_UPLOADING","2021-09-17 05:37:40 INFO  Waiting until pod is ready...","2021-09-17 05:37:45 INFO  Setting stdout...","2021-09-17 05:37:45 INFO  Setting stderr...","2021-09-17 05:37:46 INFO  Reading pod IP...","2021-09-17 05:37:46 INFO  Pod IP: 10.244.5.239","2021-09-17 05:37:46 INFO  Using null stdin output stream...","2021-09-17 05:37:46 INFO  2021-09-17 05:37:46 \x1b[32mINFO\x1b[m i.a.i.s.p.PostgresSource(main):264 - {} - starting source: class io.airbyte.integrations.source.postgres.PostgresSource","2021-09-17 05:37:46 INFO  2021-09-17 05:37:46 \x1b[32mINFO\x1b[m i.a.i.b.IntegrationRunner(run):81 - {} - Running integration: io.airbyte.integrations.source.postgres.PostgresSource","2021-09-17 05:37:46 INFO  2021-09-17 05:37:46 \x1b[32mINFO\x1b[m i.a.i.b.IntegrationCliParser(parseOptions):135 - {} - integration args: {spec=null}","2021-09-17 05:37:46 INFO  2021-09-17 05:37:46 \x1b[32mINFO\x1b[m i.a.i.b.IntegrationRunner(run):85 - {} - Command: SPEC","2021-09-17 05:37:46 INFO  2021-09-17 05:37:46 \x1b[32mINFO\x1b[m i.a.i.b.IntegrationRunner(run):86 - {} - Integration config: IntegrationConfig{command=SPEC, configPath='null', catalogPath='null', statePath='null'}","2021-09-17 05:38:16 INFO  Exit code for pod airbyte-worker-ff81ae9c-cbe1-44b7-a88f-513ae0ce1446-0-nbcev is 0","2021-09-17 05:38:16 INFO  Port consumer releasing: 9002","2021-09-17 05:38:16 INFO  Port consumer releasing: 9003","2021-09-17 05:38:16 INFO  Stopping cancellation check scheduling..."]}}},q=n(11),R=function(e){var t=e.select,n=D.connectionSpecification.properties,o=Object(r.useState)([]),a=Object(i.a)(o,2),d=a[0],l=a[1],b=function(){var e=[];if(n)for(var t=0,r=Object.entries(n);t<r.length;t++){var o=Object(i.a)(r[t],2),a=o[0],c=o[1];e.push({title:c.title,type:c.type,key:a})}return l(e),0};Object(r.useEffect)(Object(y.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b();case 1:case"end":return e.stop()}}),e)}))),[t]);return Object(q.jsx)("div",{children:Object(q.jsx)(c.a,{className:"mb-5",children:Object(q.jsxs)(s.a,{children:[Object(q.jsx)("h1",{children:t.name}),Object(q.jsx)("br",{}),Object(q.jsx)("h1",{children:D.connectionSpecification.title}),Object(q.jsx)("br",{}),Object(q.jsx)(v.a,{className:"av-tooltip tooltip-label-right",onSubmit:function(e,t,n){return function(e,t,n){t.length}(0,t)},children:d.map((function(e){return console.log(e.title),Object(q.jsxs)(w.a,{children:[Object(q.jsxs)(u.a,{children:[e.title,D.connectionSpecification.required.includes(e.key)&&"*"]}),Object(q.jsx)(p.a,{type:e.type,name:e.title,required:D.connectionSpecification.required.includes(e.key)}),D.connectionSpecification.required.includes(e.key)&&Object(q.jsxs)(P.a,{children:[e.title," is required!"]})]},e.key)}))})]})})})};t.default=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],x=t[1],y=Object(r.useState)(I.a.at(0)),N=Object(i.a)(y,2),F=N[0],S=N[1],P=Object(r.useState)(""),C=Object(i.a)(P,2),v=C[0],k=C[1],w=Object(o.g)(),D=function(){!function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:"\n        {\n          sourceDefinitionId: ".concat(F.sourceDefinitionId,",\n          connectionConfiguration: {missing-type-info},\n          workspaceId: uuid,\n          name: ").concat(v,",\n          }\n      ")};fetch("".concat(m.a,"/platform/connectors/sources/create"),e)}(),w.push("/app/connectors/new-destination")};return Object(q.jsxs)(a.a,{children:[Object(q.jsx)(c.a,{className:"mb-5",children:Object(q.jsxs)(s.a,{children:[Object(q.jsx)(d.a,{children:Object(q.jsx)(f.a,{xxs:"12",children:Object(q.jsx)("h1",{children:"Create a Source"})})}),Object(q.jsx)(d.a,{children:Object(q.jsx)(f.a,{xxs:"12",children:Object(q.jsxs)(l.a,{children:[Object(q.jsx)(u.a,{for:"sourceName",children:"Name of Source"}),Object(q.jsx)(p.a,{type:"text",name:"source",id:"sourceName",value:v,onChange:function(e){return k(e.target.value)},placeholder:"Enter name of source"})]})})}),Object(q.jsx)(d.a,{children:Object(q.jsx)(f.a,{xxs:"12",children:Object(q.jsxs)(b.a,{isOpen:n,toggle:function(){return x((function(e){return!e}))},children:[Object(q.jsx)(g.a,{caret:!0,children:F.name}),Object(q.jsx)(O.a,{children:I.a.map((function(e){return Object(q.jsx)(j.a,{onClick:function(){S(e)},children:e.name},I.a.indexOf(e))}))})]})})})]})}),Object(q.jsx)(d.a,{children:Object(q.jsx)(f.a,{xxs:"12",children:Object(q.jsx)(R,{select:F})})}),Object(q.jsx)(d.a,{children:Object(q.jsxs)(f.a,{xxs:"12",children:[Object(q.jsx)(h.a,{className:"my-4",color:"primary",onClick:function(){D()},children:"Create a source"})," "]})})]})}}}]);
//# sourceMappingURL=new-source.865bd8c6.chunk.js.map