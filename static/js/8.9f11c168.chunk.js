(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{43:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(49);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(47),c=a.n(n),r=a(48),s=a(8),l=a(0),i=a.n(l),m=a(50),u=a(51),o=a(14),f=a(4),p=(a(61),function(e){return i.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},i.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),E=a(43),d=(a(62),function(e){return i.a.createElement("li",{className:"user-item"},i.a.createElement(E.a,{className:"user-item__content"},i.a.createElement(f.b,{to:"/".concat(e.id,"/places")},i.a.createElement("div",{className:"user-item__image"},i.a.createElement(p,{image:"https://rei-mern.herokuapp.com"+"/".concat(e.image),alt:e.name})),i.a.createElement("div",{className:"user-item__info"},i.a.createElement("h2",null,e.name),i.a.createElement("h3",null,e.placeCount," ",1===e.placeCount?"Place":"Places")))))}),h=(a(63),function(e){return 0===e.items.length?i.a.createElement("div",{className:"center"},i.a.createElement(E.a,null,i.a.createElement("h2",null,"No users found"))):i.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return i.a.createElement(d,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))});t.default=function(){var e=Object(m.a)(),t=e.isLoading,a=e.error,n=e.sendRequest,f=e.clearError,p=Object(l.useState)(),E=Object(s.a)(p,2),d=E[0],v=E[1];Object(l.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("https://rei-mern.herokuapp.com/api/users/");case 2:t=e.sent,v(t.users);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement(u.a,{error:a,onClose:function(){f()}}),t&&i.a.createElement("div",{className:"center"},i.a.createElement(o.a,null)),!t&&d&&i.a.createElement(h,{items:d}))}}}]);
//# sourceMappingURL=8.9f11c168.chunk.js.map