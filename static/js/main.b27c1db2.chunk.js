(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(8),r=n.n(c),a=n(7),i=n(9),s=n(2),l=n(3),d=n(5),u=n(4),h=(n(14),n(0)),f=function(e){var t=e.form,n=e.palette,o=e.children;return Object(h.jsxs)("main",{className:"todo-list-template",children:[Object(h.jsx)("div",{className:"title",children:"\uc624\ub298 \ud560 \uc77c"}),Object(h.jsx)("section",{className:"palette-wrapper",children:n}),Object(h.jsx)("section",{className:"form-wrapper",children:t}),Object(h.jsx)("section",{className:"todos-wrapper",children:o})]})},j=(n(16),function(e){var t=e.value,n=e.onChange,o=e.onCreate,c=e.onKeyPress,r=e.color;return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("input",{value:t,onChange:n,onKeyPress:c,style:{color:r}}),Object(h.jsx)("div",{className:"create-button",onClick:o,children:"\ucd94\uac00"})]})}),v=(n(17),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,o=e.id,c=e.color,r=e.onToggle,a=e.onRemove;return Object(h.jsxs)("div",{className:"todo-item",onClick:function(){return r(o)},children:[Object(h.jsx)("div",{className:"remove",onClick:function(e){e.stopPropagation(),a(o)},children:"\xd7"}),Object(h.jsx)("div",{style:{color:c},className:"todo-text ".concat(n&&"checked"),children:Object(h.jsx)("div",{children:t})}),n&&Object(h.jsx)("div",{className:"check-mark",children:"\u2713"})]})}}]),n}(o.Component)),p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,o=e.onRemove,c=t.map((function(e){var t=e.id,c=e.text,r=e.checked,a=e.color;return Object(h.jsx)(v,{id:t,text:c,checked:r,color:a,onToggle:n,onRemove:o},t)}));return Object(h.jsx)("div",{children:c})}}]),n}(o.Component),b=(n(18),function(e){var t=e.color,n=e.active,o=e.onClick;return Object(h.jsx)("div",{className:"color ".concat(n&&"active"),style:{background:t},onClick:o})}),m=function(e){var t=e.colors,n=e.selected,o=e.onSelect,c=t.map((function(e){return Object(h.jsx)(b,{color:e,active:n===e,onClick:function(){return o(e)}},e)}));return Object(h.jsx)("div",{className:"palette",children:c})},g=["#343a40","#f03e3e","#12b886","#228ae6"],O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).id=3,e.state={input:"",todos:[],color:"#343a40"},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t=e.state,n=t.input,o=t.todos,c=t.color;e.setState({input:"",todos:o.concat({id:e.id++,text:n,checked:!1,color:c})})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e.handleToggle=function(t){var n=e.state.todos,o=n.findIndex((function(e){return e.id===t})),c=n[o],r=Object(i.a)(n);r[o]=Object(a.a)(Object(a.a)({},c),{},{checked:!c.checked}),e.setState({todos:r})},e.handleRemove=function(t){var n=e.state.todos;e.setState({todos:n.filter((function(e){return e.id!==t}))})},e.handleSelectColor=function(t){e.setState({color:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,o=e.color,c=this.handleChange,r=this.handleCreate,a=this.handleKeyPress,i=this.handleToggle,s=this.handleRemove,l=this.handleSelectColor;return Object(h.jsx)(f,{form:Object(h.jsx)(j,{value:t,onKeyPress:a,onChange:c,onCreate:r,color:o}),palette:Object(h.jsx)(m,{colors:g,selected:o,onSelect:l}),children:Object(h.jsx)(p,{todos:n,onToggle:i,onRemove:s})})}}]),n}(o.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(19);r.a.render(Object(h.jsx)(O,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ReactTest",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ReactTest","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):x(e)}))}}()}],[[20,1,2]]]);
//# sourceMappingURL=main.b27c1db2.chunk.js.map