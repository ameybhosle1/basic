(this.webpackJsonpnginx_use=this.webpackJsonpnginx_use||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(30),o=n.n(a),s=(n(38),n.p,n(39),n(6)),j=r.a.createContext(),u=n(1),i=function(t){var e=Object(c.useState)({mname:"Go To Russia",Agent:"007",accept:!1}),n=Object(s.a)(e,2),r=n[0];n[1];return Object(u.jsx)(j.Provider,{value:{data:r},children:t.children})};function b(){return Object(u.jsx)(j.Consumer,{children:function(t){return Object(u.jsx)(c.Fragment,{children:Object(u.jsxs)("h3",{children:["AgentInfoo ",t.data.mname]})})}})}function O(){return Object(u.jsx)(b,{})}function d(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(j.Consumer,{children:function(t){return Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h1",{children:"I am in Agents"}),Object(u.jsx)("h2",{children:t.data.Agent})]})}}),Object(u.jsx)(O,{})]})}var l=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Context API"}),Object(u.jsx)(i,{children:Object(u.jsx)(d,{})})]})},h=n(12),x=n(2),p=n(19),f=n.n(p),m=n(31),v=n(14),g=n.n(v);var I=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),o=Object(s.a)(a,2),j=o[0],i=o[1];function b(){return(b=Object(m.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,g.a.post("http://localhost:4000/login",{uname:n,pass:j}).then((function(t){console.log(t),t.data.token?(localStorage.setItem("userID",t.data.token),window.location="/dashboard"):alert("Please Check Your Name or Password")}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){return b.apply(this,arguments)},children:[Object(u.jsxs)("label",{children:[" USERNAME",Object(u.jsx)("input",{name:"uname",value:n,onChange:function(t){return r(t.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["PASSWORD",Object(u.jsx)("input",{name:"pass",value:j,onChange:function(t){return i(t.target.value)}})]}),Object(u.jsx)("button",{children:"Submit"})]})})},S=n(15);var A=function(){var t=Object(c.useState)([{userId:1,id:1,title:"delectus aut autem",completed:!1}]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){g.a.get("http://localhost:4000/todos").then((function(t){console.log(t.data.DATA),r(Object(S.a)(t.data.DATA)),console.log(n)}))}),[]),Object(u.jsx)("h1",{children:"dbbsdbhs"})};var D=function(){return Object(u.jsx)("div",{children:"HII"})},C=n(7),E=n(16),P=["component"];var T=function(t){var e=t.component,n=Object(E.a)(t,P);return Object(u.jsx)(x.b,Object(C.a)(Object(C.a)({},n),{},{render:function(t){return localStorage.getItem("userID")?Object(u.jsx)(e,Object(C.a)({},t)):Object(u.jsx)(x.a,{to:"/login"})}}))},y=["component"];var w=function(t){var e=t.component,n=Object(E.a)(t,y);return Object(u.jsx)(x.b,Object(C.a)(Object(C.a)({},n),{},{render:function(t){return localStorage.getItem("userID")?Object(u.jsx)(x.a,{to:"/dashboard"}):Object(u.jsx)(e,{})}}))};var R=function(){return Object(c.useEffect)((function(){localStorage.removeItem("userID")}),[]),Object(u.jsx)("div",{children:"Plaese LOGIN AGAIN USING THIS ROUTE"})},N="ADD_TODO",k=function(t,e){switch(e.type){case N:return[].concat(Object(S.a)(t),[e.payload]);case"REMOVE_TODO":return t.filter((function(t){return t.id!==e.payload}));default:return t}},G=n(70),U=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(c.useContext)(j).dispatch;return Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""==n)return alert("Add String");var e={todostring:n,id:Object(G.a)()};a({type:N,payload:e}),r("")},children:[Object(u.jsx)("input",{type:"text",name:"todo",id:"todo",value:n,onChange:function(t){return r(t.target.value)}}),Object(u.jsx)("button",{children:"Submit"})]})};o.a.render(Object(u.jsx)(h.a,{children:Object(u.jsxs)(x.d,{children:[Object(u.jsx)(w,{exact:!0,path:"/",component:l}),Object(u.jsx)(w,{exact:!0,path:"/test",component:function(){var t=Object(c.useReducer)(k,[]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(j.Provider,{value:{todos:n,dispatch:r},children:[Object(u.jsx)("h1",{children:"APP WITH REDUCER AND CONTEXT API"}),n.map((function(t){return Object(u.jsx)("h4",{children:t.todoString})})),Object(u.jsx)(U,{})]})}}),Object(u.jsx)(w,{exact:!0,path:"/login",component:I}),Object(u.jsx)(T,{exact:!0,path:"/dashboard",component:A}),Object(u.jsx)(T,{exact:!0,path:"/logout",component:R}),Object(u.jsx)(w,{exact:!0,path:"/register",component:D})]})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.b6f7a36c.chunk.js.map