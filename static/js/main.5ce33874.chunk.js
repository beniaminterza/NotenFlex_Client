(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,s){},27:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var c=s(0),l=s(1),a=s.n(l),n=s(28),o=s.n(n),r=s(30),i=s(2),j=(s(17),s(6));function d(e){return Object(c.jsxs)(j.b,{to:e.link,className:e.url===e.link&&e.url||void 0!==e.altLink&&e.altLink===e.url?"sidebarElement selected":"sidebarElement",children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{className:e.icon})}),Object(c.jsx)("p",{children:e.name})]})}function b(e){return Object(c.jsxs)("div",{className:"sidebarElement",onClick:function(){localStorage.setItem("password",""),localStorage.setItem("username",""),window.location.replace("/NotenFlex_Client/login")},children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{className:e.icon})}),Object(c.jsx)("p",{children:e.name})]})}function u(e){var t=e.name;return Object(c.jsx)("div",{className:"userLogo",children:Object(c.jsx)("p",{children:t})})}function h(e){return Object(c.jsxs)("div",{className:"sidebarElement account",children:[Object(c.jsx)(u,{name:e.character}),Object(c.jsx)("p",{children:e.name})]})}var O=s.p+"static/media/logo.cbf6562a.svg";function x(e){return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("div",{className:"logoContainer",children:Object(c.jsx)("img",{src:O,alt:"logo",className:"logo"})}),Object(c.jsx)("div",{className:"linie"}),Object(c.jsx)("h3",{children:"Menu"}),Object(c.jsx)(d,{icon:"fas fa-home",name:"Home",link:"/",url:e.url,setUrl:e.setUrl}),Object(c.jsx)(d,{icon:"fas fa-arrow-circle-up",name:"Upload",link:"/NotenFlex_Client/upload",url:e.url,setUrl:e.setUrl}),Object(c.jsx)(d,{icon:"fas fa-user",name:"Profile",link:"/NotenFlex_Client/profile/".concat(e.user),altLink:"/NotenFlex_Client/profile",url:e.url,setUrl:e.setUrl}),Object(c.jsx)("h3",{children:"Account"}),Object(c.jsx)(h,{character:"B",name:e.user,url:e.url}),Object(c.jsx)(b,{icon:"fas fa-arrow-alt-circle-right",name:"Log out"})]})}s(41),s(42);function m(e){var t=e.fach,s=e.note,l=e.beschreibung,a=e.datum,n=e.color,o=new Map;return o.set("blue","#B2EDFF"),o.set("green","#D6FFB2"),o.set("yellow","#FFFAB2"),o.set("orange","#FFBDB2"),o.set("pink","#FFB2DE"),o.set("violet","#B2B7FF"),o.set("blueLight","#e6f9ff"),o.set("greenLight","#f1ffe6"),o.set("yellowLight","#fffde3"),o.set("orangeLight","#ffe9e6"),o.set("pinkLight","#ffe3f3"),o.set("violetLight","#e8eaff"),Object(c.jsxs)("div",{className:"post",children:[Object(c.jsx)("div",{className:"mark",style:{backgroundColor:o.get(n)},children:Object(c.jsx)("h1",{style:s.length<2?{fontSize:"6rem"}:s.length<3?{fontSize:"5rem"}:(s.length,{fontSize:"4rem"}),children:s})}),Object(c.jsxs)("div",{className:"informations",style:{backgroundColor:o.get(n+"Light")},children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("h4",{children:l}),Object(c.jsx)("p",{className:"date",children:a})]})]})}var f=s(4),p=s.n(f);function g(e){var t=e.user,s=e.fach,a=e.note,n=e.beschreibung,o=e.datum,r=e.likes,d=e.liked,b=e.color,h=e.myUser,O=e.postID,x=Object(l.useState)(d),f=Object(i.a)(x,2),g=f[0],v=f[1],N=Object(l.useState)(r),w=Object(i.a)(N,2),F=w[0],S=w[1];return Object(l.useEffect)((function(){console.log("user: "+h)}),[h]),Object(c.jsxs)("div",{className:"postComplete",onDoubleClick:function(){p.a.get("http://localhost:9998/NFlex/likePost?user=".concat(t,"&postID=").concat(O,"&myUser=").concat(h)).then((function(e){console.log(e.data),e.data.status&&(S(g?F-1:F+1),v(!g),console.log(h+" liked "+O+" from "+t))}))},children:[Object(c.jsx)(m,{fach:s,note:a,beschreibung:n,datum:o,color:b}),Object(c.jsxs)("div",{className:"postInformations",children:[Object(c.jsxs)(j.b,{to:"/NotenFlex_Client/profile/".concat(t),className:"user",children:[Object(c.jsx)(u,{name:Array.from(t)[5].toUpperCase()}),Object(c.jsx)("p",{children:t})]}),Object(c.jsxs)("div",{className:"like",style:g?{color:"#FF6D6D"}:{color:"#9BA6C4"},children:[Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)("i",{className:"fas fa-heart"})}),Object(c.jsxs)("p",{style:g?{color:"#FF6D6D"}:{color:"#9BA6C4"},children:[F," Likes"]})]})]})]})}function v(e){var t=e.setUrl,s=Object(l.useState)([]),a=Object(i.a)(s,2),n=a[0],o=a[1],r=Object(l.useState)("Newest"),j=Object(i.a)(r,2),d=j[0],b=j[1],u=Object(l.useState)("http://localhost:9998/NFlex/getFollowingPosts"),h=Object(i.a)(u,2),O=h[0],x=h[1],m=Object(l.useState)(!1),f=Object(i.a)(m,2),v=f[0],N=f[1];function w(e){b(e.target.innerHTML)}return Object(l.useEffect)((function(){t("/")}),[]),Object(l.useEffect)((function(){console.log(d),"Popular"===d?x("http://localhost:9998/NFlex/getPopularPosts"):"Best"===d?x("http://localhost:9998/NFlex/getBestPosts"):"Newest"===d?x("http://localhost:9998/NFlex/getNewestPosts"):"Following"===d&&x("http://localhost:9998/NFlex/getFollowingPosts")}),[d]),Object(l.useEffect)((function(){console.log("refresh"),p.a.get("".concat(O,"?user=").concat(localStorage.getItem("username"))).then((function(e){o([]),o(e.data.map((function(e){return Object(c.jsx)(g,{user:e.username,note:e.note.toString(),beschreibung:e.beschreibung,fach:e.fach,datum:e.date,liked:e.liked,likes:e.likeCounter,color:e.color,postID:e.postID,myUser:localStorage.getItem("username")},e.postID)})))})),setTimeout((function(){return N((function(e){return!e}))}),2e3)}),[O,v]),Object(c.jsx)("div",{className:"home main",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("h2",{children:"Feed"}),Object(c.jsxs)("div",{className:"filter",children:[Object(c.jsx)("p",{className:"Best"===d?"selected":"",onClick:w,children:"Best"}),Object(c.jsx)("p",{className:"Popular"===d?"selected":"",onClick:w,children:"Popular"}),Object(c.jsx)("p",{className:"Following"===d?"selected":"",onClick:w,children:"Following"}),Object(c.jsx)("p",{className:"Newest"===d?"selected":"",onClick:w,children:"Newest"})]})]}),Object(c.jsx)("div",{className:"posts",children:n})]})})}function N(e){var t=e.type,s=e.placeholder,l=e.width,a=e.name,n=e.value,o=e.setValue;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:t,placeholder:s,style:{width:l},className:a,onChange:function(e){o(e.target.value)},value:n})})}s(61);function w(e){var t=e.name,s=e.colorValue,l=e.color,a=e.setColor;return Object(c.jsx)("div",{className:l===t?"color selected":"color",style:{backgroundColor:s},onClick:function(){console.log(t),a(t)}})}function F(e){var t=e.setUrl,s=Object(l.useState)("green"),a=Object(i.a)(s,2),n=a[0],o=a[1],r=Object(l.useState)("Informatik"),j=Object(i.a)(r,2),d=j[0],b=j[1],u=Object(l.useState)("Describe the exam"),h=Object(i.a)(u,2),O=h[0],x=h[1],f=Object(l.useState)(new Date),g=Object(i.a)(f,1)[0],v=Object(l.useState)(new Date(g.getTime()+-60*(new Date).getTimezoneOffset()*1e3).toISOString().slice(0,19)),F=Object(i.a)(v,2),S=F[0],k=F[1],C=Object(l.useState)("9"),y=Object(i.a)(C,2),U=y[0],I=y[1];return Object(l.useEffect)((function(){t("/NotenFlex_Client/upload")}),[]),Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"head",children:Object(c.jsx)("h2",{children:"Upload"})}),Object(c.jsxs)("div",{className:"create",children:[Object(c.jsxs)("div",{className:"section",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Mark"}),Object(c.jsx)(N,{type:"text",placeholder:"f.ex. 9",width:"50px",name:"middle",value:U,setValue:I})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Subject"}),Object(c.jsx)(N,{type:"text",placeholder:"f.ex Informatik",width:"250px",name:"",value:d,setValue:b})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Date"}),Object(c.jsx)(N,{type:"datetime-local",placeholder:"Informatik",width:"250px",name:"",value:S,setValue:k})]})]}),Object(c.jsxs)("div",{className:"section",children:[Object(c.jsxs)("div",{className:"divS2",children:[Object(c.jsx)("p",{children:"Description"}),Object(c.jsx)("textarea",{className:"description",name:"Text1",cols:"40",rows:"5",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(c.jsxs)("div",{className:"divS2",children:[Object(c.jsx)("p",{children:"Color"}),Object(c.jsxs)("div",{className:"colors",children:[Object(c.jsx)(w,{colorValue:"#B2EDFF",name:"blue",color:n,setColor:o}),Object(c.jsx)(w,{colorValue:"#D6FFB2",name:"green",color:n,setColor:o}),Object(c.jsx)(w,{colorValue:"#FFFAB2",name:"yellow",color:n,setColor:o}),Object(c.jsx)(w,{colorValue:"#FFBDB2",name:"orange",color:n,setColor:o}),Object(c.jsx)(w,{colorValue:"#FFB2DE",name:"pink",color:n,setColor:o}),Object(c.jsx)(w,{colorValue:"#B2B7FF",name:"violet",color:n,setColor:o})]}),Object(c.jsx)("button",{onClick:function(){var e={user:localStorage.getItem("username"),fach:d,beschreibung:O,note:U,color:n,date:S};console.log(e),p.a.post("http://localhost:9998/NFlex/addPost",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then((function(e){window.location.replace("/")}))},children:"Publish"})]})]})]}),Object(c.jsxs)("div",{className:"preview",children:[Object(c.jsx)("h3",{id:"title",children:"Preview"}),Object(c.jsx)(m,{note:U,fach:d,beschreibung:O,datum:S.replace("T"," "),color:n})]})]})})}s(62);function S(e){var t=e.user,s=e.likes,a=e.posts,n=e.avgMark,o=e.setSearch,r=e.link,d=e.setUser,b=e.follow,h=e.main,O=Object(l.useState)(b),x=Object(i.a)(O,2),m=x[0],f=x[1],g=Object(l.useState)(""),v=Object(i.a)(g,2),N=v[0],w=v[1];function F(){o(""),d(t)}function S(){p.a.post("http://localhost:9998/NFlex/followUser?followUser=".concat(t,"&myUser=").concat(localStorage.getItem("username"))).then((function(e){console.log("follow ausgef\xfchrt"),f(!m)}))}return Object(l.useEffect)((function(){void 0!==h&&p.a.get("http://localhost:9998/NFlex/getUserInfo?user=".concat(t,"&myUser=").concat(localStorage.getItem("username"))).then((function(e){f(e.data.isFollowing)}))}),[s]),Object(l.useEffect)((function(){w(m?"unfollow":"")}),[m]),Object(c.jsxs)("div",{className:"profile",children:[void 0===r?Object(c.jsx)(u,{name:Array.from(t)[5].toUpperCase()}):Object(c.jsx)(j.b,{to:r,onClick:F,style:{textDecoration:"none"},children:Object(c.jsx)(u,{name:Array.from(t)[5].toUpperCase()})}),Object(c.jsxs)("div",{className:"informations",children:[void 0===r?Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{children:t}),localStorage.getItem("username")!==t?Object(c.jsx)("button",{onClick:S,className:N,children:"unfollow"===N?"Unfollow":"Follow"}):null]}):Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)(j.b,{to:r,onClick:F,style:{textDecoration:"none"},children:Object(c.jsx)("h2",{children:t})}),localStorage.getItem("username")!==t?Object(c.jsx)("button",{onClick:S,className:N,children:"unfollow"===N?"Unfollow":"Follow"}):null]}),void 0===r?Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:s}),Object(c.jsx)("p",{children:"Likes"})]}),Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:a}),Object(c.jsx)("p",{children:"Posts"})]}),Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:n}),Object(c.jsx)("p",{children:"Average Mark"})]})]}):Object(c.jsx)(j.b,{to:r,onClick:F,style:{textDecoration:"none"},children:Object(c.jsxs)("div",{className:"data",children:[Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:s}),Object(c.jsx)("p",{children:"Likes"})]}),Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:a}),Object(c.jsx)("p",{children:"Posts"})]}),Object(c.jsxs)("div",{className:"dataElement",children:[Object(c.jsx)("h4",{children:n}),Object(c.jsx)("p",{children:"Average Mark"})]})]})})]})]})}function k(e){var t=e.match,s=e.setUrl,a=Object(l.useState)(t.params.id),n=Object(i.a)(a,2),o=n[0],r=n[1],j=Object(l.useState)(),d=Object(i.a)(j,2),b=d[0],u=d[1],h=Object(l.useState)(),O=Object(i.a)(h,2),x=O[0],m=O[1],f=Object(l.useState)(),v=Object(i.a)(f,2),w=v[0],F=v[1],k=Object(l.useState)(""),C=Object(i.a)(k,2),y=C[0],U=C[1],I=Object(l.useState)([]),D=Object(i.a)(I,2),E=D[0],P=D[1],L=Object(l.useState)([]),B=Object(i.a)(L,2),V=B[0],_=B[1],A=Object(l.useState)(!1),M=Object(i.a)(A,2),T=M[0];M[1];return Object(l.useEffect)((function(){s("/NotenFlex_Client/profile")}),[]),Object(l.useEffect)((function(){p.a.get("http://localhost:9998/NFlex/getUserInfo?user=".concat(o,"&myUser=").concat(localStorage.getItem("username"))).then((function(e){var t=e.data;u(t.likes),m(t.posts),F(t.averageMark)})),p.a.get("http://localhost:9998/NFlex/getAllUserPosts?user=".concat(o,"&myUser=").concat(localStorage.getItem("username"))).then((function(e){_(e.data.map((function(e){return Object(c.jsx)(g,{user:e.username,note:e.note.toString(),beschreibung:e.beschreibung,fach:e.fach,datum:e.date,liked:e.liked,likes:e.likeCounter,color:e.color,follow:e.isFollowing,postID:e.postID,myUser:localStorage.getItem("username")},e.postID)})))}))}),[o]),Object(l.useEffect)((function(){0!==y.length&&p.a.get("http://localhost:9998/NFlex/searchUser?search=".concat(y,"&myUser=").concat(localStorage.getItem("username"))).then((function(e){console.log(e.data),P(e.data.map((function(e){return Object(c.jsx)(S,{user:e.user,likes:e.likes,posts:e.posts,avgMark:e.averageMark,setSearch:U,link:"/NotenFlex_Client/profile/".concat(e.user),setUser:r,follow:e.isFollowing},1e4*Math.random())})))}))}),[y]),Object(c.jsx)("div",{className:"main profile",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsxs)("div",{className:"head",children:[Object(c.jsx)("h2",{children:"Profile"}),Object(c.jsx)(N,{type:"text",width:"150px",value:y,setValue:U,placeholder:"Search"})]}),0===y.length?Object(c.jsxs)("div",{className:"mainInfos",children:[Object(c.jsx)(S,{user:o,likes:b,posts:x,avgMark:w,follow:T,main:!0}),V]}):Object(c.jsxs)("div",{className:"search",children:[Object(c.jsxs)("h3",{children:["Search Profiles: ",y]}),E]})]})})}s(27);function C(e){var t=e.name;return Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:t})})}function y(){return Object(c.jsxs)("div",{className:"presentation",children:[Object(c.jsx)("div",{className:"circle"}),Object(c.jsx)("div",{className:"square"}),Object(c.jsx)("div",{className:"triangle"}),Object(c.jsxs)("div",{className:"infos",children:[Object(c.jsx)("img",{src:O,alt:"Logo"}),Object(c.jsxs)("div",{className:"description",children:[Object(c.jsx)("h2",{children:"NotenFlex"}),Object(c.jsx)("div",{className:"linie"}),Object(c.jsx)("h3",{children:"See the Flexes of others"}),Object(c.jsx)("h3",{children:"Flex with your marks"}),Object(c.jsx)("h3",{children:"Like other Flexes"})]})]})]})}var U=s(3);function I(e){var t=e.setUser,s=Object(l.useState)(""),a=Object(i.a)(s,2),n=a[0],o=a[1],r=Object(l.useState)(""),d=Object(i.a)(r,2),b=d[0],u=d[1],h=Object(l.useState)(""),O=Object(i.a)(h,2),x=O[0],m=O[1],f=Object(l.useState)(!1),g=Object(i.a)(f,2),v=g[0],w=g[1];return Object(c.jsx)("div",{className:"log",children:v?Object(c.jsx)(U.a,{to:"/"}):Object(c.jsxs)("div",{className:"fullLogin",children:[Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("h1",{children:"Login"}),Object(c.jsx)("div",{className:"linie"}),Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Username"}),Object(c.jsx)(N,{type:"text",width:"284px",name:"",placeholder:"Username",value:n,setValue:o})]}),Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Password"}),Object(c.jsx)(N,{type:"password",width:"284px",name:"",placeholder:"Password",value:b,setValue:u})]}),Object(c.jsxs)("div",{className:"input button",children:[Object(c.jsx)("div",{onClick:function(){""===n&&""===b?m("Enter a username + password"):""===n?m("Enter a username"):""===b?m("Enter a password"):(m(""),p.a.get("http://localhost:9998/NFlex/checkLogin?user=".concat(n,"&password=").concat(b)).then((function(e){e.data.status?(t(n),localStorage.setItem("username",n),localStorage.setItem("password",b),w(!0)):m("Username or Password is incorrect")})))},children:Object(c.jsx)(C,{name:"Login"})}),Object(c.jsx)("p",{style:{color:"#FF6D6D"},className:"error",children:x})]}),Object(c.jsxs)("div",{className:"input button grey",children:[Object(c.jsx)("p",{style:{color:"#9ba6c4"},children:"New NFlex user?"}),Object(c.jsx)(j.b,{to:"/NotenFlex_Client/register/",children:Object(c.jsx)(C,{name:"Register"})})]})]}),Object(c.jsx)(y,{})]})})}function D(e){var t=e.setUser,s=Object(l.useState)(""),a=Object(i.a)(s,2),n=a[0],o=a[1],r=Object(l.useState)(""),d=Object(i.a)(r,2),b=d[0],u=d[1],h=Object(l.useState)(""),O=Object(i.a)(h,2),x=O[0],m=O[1],f=Object(l.useState)(!1),g=Object(i.a)(f,2),v=g[0],w=g[1],F=Object(l.useState)(""),S=Object(i.a)(F,2),k=S[0],I=S[1];return Object(c.jsx)("div",{className:"log",children:v?Object(c.jsx)(U.a,{to:"/"}):Object(c.jsxs)("div",{className:"fullLogin",children:[Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("h1",{children:"Register"}),Object(c.jsx)("div",{className:"linie"}),Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Username"}),Object(c.jsx)(N,{type:"text",width:"284px",name:"",placeholder:"Username",value:n,setValue:o})]}),Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Password"}),Object(c.jsx)(N,{type:"password",width:"284px",name:"",placeholder:"Password",value:b,setValue:u})]}),Object(c.jsxs)("div",{className:"input",children:[Object(c.jsx)("p",{children:"Confirm Password"}),Object(c.jsx)(N,{type:"password",width:"284px",name:"",placeholder:"Confirm Password",value:x,setValue:m})]}),Object(c.jsxs)("div",{className:"input button",children:[Object(c.jsx)("div",{onClick:function(){if(""===n&&""===b)I("Enter a username + password");else if(""===n)I("Enter a username");else if(""===b)I("Enter a password");else if(""===x)I("Confirm your password");else if(b!==x)I("Passwords do not match");else{I("");var e={user:n,password:b};p.a.post("http://localhost:9998/NFlex/register",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then((function(e){e.data.status?(t(n),localStorage.setItem("username",n),localStorage.setItem("password",b),w(!0)):I("Username or Password is incorrect")}))}},children:Object(c.jsx)(C,{name:"Register"})}),Object(c.jsx)("p",{style:{color:"#FF6D6D"},className:"error",children:k})]}),Object(c.jsxs)("div",{className:"input button grey",children:[Object(c.jsx)("p",{style:{color:"#9ba6c4"},children:"Already a NFlex user?"}),Object(c.jsx)(j.b,{to:"/NotenFlex_Client/login/",children:Object(c.jsx)(C,{name:"Login"})})]})]}),Object(c.jsx)(y,{})]})})}function E(){var e=Object(l.useState)(window.location.pathname),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(l.useState)(),o=Object(i.a)(n,2),d=o[0],b=o[1],u=Object(l.useState)(!1),h=Object(i.a)(u,2),O=h[0],m=h[1];function f(){window.location.replace("/NotenFlex_Client/login")}return Object(l.useEffect)((function(){if(console.log("Check Server"),"/NotenFlex_Client/login"!==s&&"/NotenFlex_Client/register"!==s)if(function(){if("undefined"!==localStorage.getItem("username")&&"undefined"!==localStorage.getItem("password"))return!0;return!1}()){b(localStorage.getItem("username"));var e=localStorage.getItem("username"),t=localStorage.getItem("password");p.a.get("http://localhost:9998/NFlex/checkLogin?user=".concat(e,"&password=").concat(t)).then((function(e){e.data.status?console.log("Jooooooo"):f()}),(function(e){setTimeout((function(){return m((function(e){return!e}))}),2e3)}))}else f()}),[O]),Object(c.jsx)(j.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(x,{url:s,setUrl:a,user:d}),Object(c.jsxs)(U.d,{children:[Object(c.jsx)(U.b,{path:"/",exact:!0,children:Object(c.jsx)(v,{setUrl:a})}),Object(c.jsx)(U.b,{path:"/NotenFlex_Client/upload",exact:!0,children:Object(c.jsx)(F,{setUrl:a})}),Object(c.jsx)(U.b,{path:"/NotenFlex_Client/profile/:id",exact:!0,render:function(e){return Object(c.jsx)(k,Object(r.a)({setUrl:a},e))}}),Object(c.jsx)(U.b,{path:"/NotenFlex_Client/login",exact:!0,children:Object(c.jsx)(I,{setUser:b})}),Object(c.jsx)(U.b,{path:"/NotenFlex_Client/register",exact:!0,children:Object(c.jsx)(D,{setUser:b})})]})]})})}o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.5ce33874.chunk.js.map