(this["webpackJsonpwbdv-sp20-group2-client-react"]=this["webpackJsonpwbdv-sp20-group2-client-react"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a.n(c),s=a(16),i=a(3),u=a(2),m=a.n(u),o=a(4),p=function(e){var t=e.msg;return n.a.createElement("div",{className:"alert alert-info alert-dismissible fade show",role:"alert"},t,n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},f=a(5),d=a.n(f),b=function(){var e=Object(o.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,e.next=4,d.a.get("https://api.edamam.com/search?app_id=8c82a996&app_key=4c99b8e052177acab7281af278080f6f&q=".concat(t,"&from=0&to=1"));case 4:a=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error("There's an error while fetching the data");case 10:return e.prev=10,e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(r.useState)("Choose File"),u=Object(i.a)(l,2),f=u[0],h=u[1],v=Object(r.useState)({}),E=Object(i.a)(v,2),g=E[0],w=E[1],N=Object(r.useState)(""),j=Object(i.a)(N,2),O=j[0],x=j[1],y=Object(r.useState)([]),k=Object(i.a)(y,2),F=k[0],S=k[1],C=function(){var e=Object(o.a)(m.a.mark((function e(t){var r,n,c,l,i,u,p;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(r=new FormData).append("file",a),e.prev=3,e.next=6,d.a.post("/upload",r,{headers:{"Content-Type":"multipart/form-data"}});case 6:return n=e.sent,c=n.data,l=c.fileName,i=c.filePath,u=c.resultSummaries,e.next=10,Promise.all(u.map(function(){var e=Object(o.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t.description);case 2:if(!((a=e.sent)&&a.data&&a.data.hits)){e.next=5;break}return e.abrupt("return",Object(s.a)({},t,{recipe:a.data.hits[0].recipe}));case 5:return e.abrupt("return",{label:t,recipe:null});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 10:p=e.sent,w({fileName:l,filePath:i}),S(p),x("File Uploaded"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log({err:e.t0});case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(r.Fragment,null,O?n.a.createElement(p,{msg:O}):null,n.a.createElement("form",{onSubmit:C},n.a.createElement("div",{className:"custom-file mt-4"},n.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){c(e.target.files[0]),h(e.target.files[0].name)}}),n.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},f)),n.a.createElement("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})),g?n.a.createElement("div",{className:"row mt-5"},n.a.createElement("div",{className:"col-md-6 m-auto"},n.a.createElement("h3",{className:"text-center"},g.fileName),n.a.createElement("img",{style:{width:"100%"},src:g.filePath,alt:""}))):null,F.map((function(e){return n.a.createElement("div",null,n.a.createElement("h1",null,"Guess: ",e.description),n.a.createElement("p",null,"Score: ",e.score),e.recipe&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Matched recipe for today: ",e.recipe.label),n.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label})))})))},v=(a(40),function(){return n.a.createElement("div",{className:"container mt-4"},n.a.createElement("h4",{className:"display-4 text-center mt-4"},n.a.createElement("i",{className:"fas fa-cookie-bite"})," Recipes Finder"),n.a.createElement(h,null))});l.a.render(n.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c1709648.chunk.js.map