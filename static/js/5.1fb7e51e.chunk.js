(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(45);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},45:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},46:function(e,t,n){"use strict";var a=n(15);n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},u=function(e,t){var n,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){i.e(u)}finally{i.f()}return r}},52:function(e,t,n){"use strict";var a=n(8),r=n(44),i=n(0),c=n.n(i),u=n(46),l=(n(53),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(u.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(l,{value:e.value||"",isValid:e.valid||!1,isTouched:!1}),n=Object(a.a)(t,2),r=n[0],u=n[1],o=e.id,s=e.onInput,d=r.value,p=r.isValid;Object(i.useEffect)((function(){s(o,d,p)}),[o,d,p,s]);var f=function(t){u({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){u({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},53:function(e,t,n){},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(8),r=n(45),i=n(44),c=n(0),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var n=Object(c.useReducer)(u,{inputs:e,isValid:t}),r=Object(a.a)(n,2),i=r[0],l=r[1];return[i,Object(c.useCallback)((function(e,t,n){l({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(c.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},55:function(e,t,n){"use strict";var a=n(8),r=n(0),i=n.n(r),c=n(13);n(56);t.a=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(),u=Object(a.a)(n,2),l=u[0],o=u[1],s=Object(r.useState)(),d=Object(a.a)(s,2),p=d[0],f=d[1],v=Object(r.useState)(!1),b=Object(a.a)(v,2),m=b[0],O=b[1];Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{type:"file",id:e.id,style:{display:"none"},accept:".jpg, .png, jpeg",ref:t,onChange:function(t){var n,a=m;t.target.files&&1===t.target.files.length?(n=t.target.files[0],o(n),O(!0),a=!0):(O(!1),a=!1),e.onInput(e.id,n,a)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){t.current.click()}},"PICK IMAGE")),!m&&i.a.createElement("p",null,e.errorText))}},56:function(e,t,n){},57:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a),i=n(48),c=n(8),u=n(0),l=n.n(u),o=n(1),s=n(9),d=n(46),p=n(50),f=n(55),v=n(13),b=n(52),m=n(51),O=n(14),j=n(54);n(57);t.default=function(){var e=Object(u.useContext)(s.a),t=Object(o.g)(),n=Object(p.a)(),a=n.isLoading,y=n.error,E=n.sendRequest,h=n.clearError,g=Object(j.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),I=Object(c.a)(g,2),w=I[0],T=I[1],A=function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,(i=new FormData).append("title",w.inputs.title.value),i.append("description",w.inputs.description.value),i.append("address",w.inputs.address.value),i.append("image",w.inputs.image.value),n.next=9,E("https://rei-mern.herokuapp.com/api/places/","POST",i,{Authorization:"Bearer "+e.token});case 9:t.push("/"),n.next=14;break;case 12:n.prev=12,n.t0=n.catch(1);case 14:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{error:y,onClear:h}),l.a.createElement("form",{className:"place-form",onSubmit:A},a&&l.a.createElement(O.a,{asOverlay:!0}),l.a.createElement(b.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(d.c)()],errorText:"Please enter a valid title",onInput:T}),l.a.createElement(f.a,{id:"image",center:!0,onInput:T}),l.a.createElement(b.a,{id:"description",element:"textarea",label:"Description",validators:[Object(d.c)(),Object(d.b)(5)],errorText:"Please enter a valid description (min 5 chars)",onInput:T}),l.a.createElement(b.a,{id:"address",element:"input",type:"text",label:"Address",validators:[Object(d.c)()],errorText:"Please enter a valid address",onInput:T}),l.a.createElement(v.a,{type:"submit",disabled:!w.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=5.1fb7e51e.chunk.js.map