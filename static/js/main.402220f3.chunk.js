(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],[,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),l=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,,,function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(4);n(30);t.a=function(e){return e.href?l.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?l.a.createElement(c.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):l.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(28);t.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},,,,function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(5),r=n.n(c);n(38);t.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,function(e,t,n){e.exports=n(40)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(5),o=n.n(r),u=(n(27),n(1)),i=n(4),s=n(9),m=n(8),E=n(14),d=(n(29),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),f=n(13),b=(n(36),function(){var e=Object(l.useContext)(s.a),t=Object(u.g)();return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(i.c,{to:"/",exact:!0},"ALL USERS")),e.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/".concat(e.userId,"/places")},"MY PLACES")),e.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/places/new"},"ADD PLACE")),e.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(f.a,{onClick:function(n){n.preventDefault(),e.logout(),t.push("/auth")}},"LOGOUT")),!e.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(i.c,{to:"/auth"},"AUTHENTICATE")))}),g=n(42),v=(n(37),function(e){var t=c.a.createElement(g.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),h=n(18),p=(n(39),function(){var e=Object(l.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],r=function(){a(!1)};return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(h.a,{onClick:r}),c.a.createElement(v,{show:n,onClick:r},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(b,null))),c.a.createElement(d,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){a(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h1",{className:"main-navigation__title"},c.a.createElement(i.b,{to:"/"},"YourPlaces")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(b,null))))}),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,71))})),I=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,68))})),O=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,72))})),N=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,69))})),x=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,70))})),C=function(){var e,t=function(){var e=Object(l.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(),o=Object(m.a)(r,2),u=o[0],i=o[1],s=Object(l.useState)(null),E=Object(m.a)(s,2),d=E[0],f=E[1],b=Object(l.useCallback)((function(e,t,n){c(t),f(e);var a=n||new Date((new Date).getTime()+36e5);i(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),g=Object(l.useCallback)((function(){c(null),f(null),i(null),localStorage.removeItem("userData")}),[]);return Object(l.useEffect)((function(){if(n&&u){var e=u.getTime()-(new Date).getTime();a=setTimeout(g,e)}else clearTimeout(a)}),[n,g,u]),Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&b(e.userId,e.token,new Date(e.expiration))}),[b]),{token:n,login:b,logout:g,userId:d}}(),n=t.token,r=t.login,o=t.logout,d=t.userId;return e=n?c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(k,null)),c.a.createElement(u.b,{path:"/places/new",exact:!0},c.a.createElement(I,null)),c.a.createElement(u.b,{path:"/places/:placeId",exact:!0},c.a.createElement(N,null)),c.a.createElement(u.b,{path:"/:userId/places",exact:!0},c.a.createElement(O,null)),c.a.createElement(u.a,{to:"/"})):c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"/",exact:!0},c.a.createElement(k,null)),c.a.createElement(u.b,{path:"/:userId/places",exact:!0},c.a.createElement(O,null)),c.a.createElement(u.b,{path:"/auth",exact:!0},c.a.createElement(x,null)),c.a.createElement(u.a,{to:"/auth"})),c.a.createElement(s.a.Provider,{value:{isLoggedIn:!!n,token:n,userId:d,login:r,logout:o}},c.a.createElement(i.a,null,c.a.createElement(p,null),c.a.createElement("main",null,c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(E.a,null))},e))))};o.a.render(c.a.createElement(C,null),document.getElementById("root"))}],[[22,2,3]]]);
//# sourceMappingURL=main.402220f3.chunk.js.map