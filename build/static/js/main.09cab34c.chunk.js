(this.webpackJsonpdoodle=this.webpackJsonpdoodle||[]).push([[0],{104:function(e){e.exports=JSON.parse('["bird","book","car","cat","chair","flower","plane","sheep","ship","strawberry"]')},109:function(e,t,n){e.exports=n(201)},120:function(e,t){},122:function(e,t){},153:function(e,t){},154:function(e,t){},201:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(106),c=n.n(l),o=n(13),u=n(39),i=n(16),m=(n(65),n(7)),s=n(61),d=n.n(s),E=n(30);function f(e,t){var n,a=(n=e.current,E.b(n).resizeNearestNeighbor([28,28]).mean(2).expandDims(2).expandDims().toFloat().div(255));return t.then((function(e){return e.predict(a).data()})).then((function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(E.a(e).data());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}))}var h=r.a.forwardRef((function(e,t){var l,c,u=!1,i=n(104);return Object(a.useEffect)((function(){var e=t.current,n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,e.height,e.width)})),r.a.createElement("canvas",{height:300,width:300,ref:t,onMouseDown:function(){return u=!0},onMouseUp:function(){u=!1,l=void 0,c=void 0,f(t,e.model).then((function(t){i[t[0]]===e.currentLabel&&e.pointEvaluation(!0)}))},onMouseMove:function(e){return function(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top;if(u){var r=function(e,t,n,a,r){var l=e.getContext("2d");return l.strokeStyle="#000000",l.lineWidth=8,l.lineJoin="round",l.beginPath(),l.moveTo(a,r),l.lineTo(t,n),l.closePath(),l.stroke(),[t,n]}(e.target,n,a,l,c),i=Object(o.a)(r,2);l=i[0],c=i[1]}}(e)}})}));function b(){return Object(a.useContext)(G).points>=m.b}function v(){var e=Object(a.useContext)(G);return r.a.createElement("div",null,r.a.createElement("h2",null,"Yes you won!"),r.a.createElement("h2",null,"Congratulations! YOU ARE THE BEST!"),r.a.createElement("h3",null,"Score: ",e.points))}function p(){var e=Object(a.useContext)(G);return r.a.createElement("div",null,r.a.createElement("h2",null,"Oh no, you lost!"),r.a.createElement("h2",null,"Next time you'll do better!"),r.a.createElement("h3",null,"Score: ",e.points))}function w(){window.location.replace("./")}function O(){function e(){window.location.replace("./game")}return!0===b()?r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("button",{type:"submit",onClick:w},"Home"),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:e},"Play again")):r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("button",{type:"submit",onClick:w},"Home"),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:e},"Play again"))}function j(e){var t=e.theCanvas;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=t.current;e.getContext("2d").fillRect(0,0,e.height,e.width)}},"Clear the canvas."),r.a.createElement("button",{type:"submit",onClick:w},"Home"))}function g(e){var t=Object(a.useState)(m.c),n=Object(o.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){var t=setInterval((function(){0===l?(e.pointEvaluation(!1),c(m.c)):!0===e.resetCountdown?(c(m.c),e.setResetCountdownToFalse()):c(l-=1)}),1e3);return function(){return clearInterval(t)}})),e.round<=m.a?r.a.createElement("div",null,r.a.createElement("h3",null,"Countdown: ",l)):r.a.createElement("div",null)}function C(e){return e.round<=m.a?r.a.createElement("div",null,r.a.createElement("h3",null,"Round: ",e.round)):r.a.createElement("div",null)}function y(e){var t=Object(a.useContext)(G).points;return"loading"===e.currentLabel?r.a.createElement("h1",null,"Please wait a moment..."):!1===e.displayPoint?r.a.createElement("div",null,r.a.createElement("h1",null,"Oh man you can do better!"),r.a.createElement("h1",null,"Points: ",t),r.a.createElement("h1",null,"Draw a ",e.currentLabel,"!")):!0===e.displayPoint?r.a.createElement("div",null,r.a.createElement("h1",null,"Nice job!"),r.a.createElement("h1",null,"Points: ",t),r.a.createElement("h1",null,"Draw a ",e.currentLabel,"!")):r.a.createElement("div",null,r.a.createElement("h1",null,"Points: ",t),r.a.createElement("h1",null,"Draw a ",e.currentLabel,"!"))}function P(){return!0===b()?r.a.createElement("div",null,r.a.createElement("h1",null,"You are winning!"),r.a.createElement("h1",null,"GOOD JOB PLAYER!")):r.a.createElement("div",null,r.a.createElement("h1",null,"You need more points!"),r.a.createElement("h1",null,"YOU CAN DO THIS!"))}function k(e){var t,l=n(104),c=r.a.createRef(),u=Object(a.useState)(1),i=Object(o.a)(u,2),s=i[0],d=i[1],E=Object(a.useState)(!1),f=Object(o.a)(E,2),b=f[0],v=f[1],p=Object(a.useState)(null),w=Object(o.a)(p,2),k=w[0],x=w[1],T=Object(a.useState)(!1),S=Object(o.a)(T,2),R=S[0],D=S[1];if(s<=m.a)t=l[s-1];else if(s>m.a)return t="loading",r.a.createElement(O,null);function Y(){t=l[s-1]}function L(){v(!0)}function N(){d(s+1)}function B(t){!0===t?(Y(),L(),N(),x(!0),e.setThePoints(!0)):(Y(),L(),N(),x(!1),e.setThePoints(!1))}return R?r.a.createElement("div",null,r.a.createElement(y,{currentLabel:t,displayPoint:k}),r.a.createElement(g,{resetTheCountdown:L,pointEvaluation:B,resetCountdown:b,setResetCountdownToFalse:function(){v(!1)},round:s}),r.a.createElement(C,{round:s}),r.a.createElement("button",{type:"submit",onClick:function(){window.location.replace("./game")}},"New Game"),r.a.createElement("div",null,r.a.createElement(h,{ref:c,pointEvaluation:B,currentLabel:t,model:e.model,labels:l}),r.a.createElement(j,{theCanvas:c}),r.a.createElement(P,null))):r.a.createElement("div",null,r.a.createElement("h2",null,"You'll have to draw the requested thing!"),r.a.createElement("h3",null,"For each correct answer you'll get a point. ",m.a," rounds it will take! ",m.b," points to win! But beware of the countdown!"),r.a.createElement("button",{id:"startGameButton",type:"submit",onClick:function(){return D(!0)}},"Start Game"))}var x=n(40),T=n(41),S=n(43),R=n(42),D=n(44),Y=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sketch"),r.a.createElement(L,null),r.a.createElement(N,null))}}]),t}(a.Component),L=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to Sketch the Drawing Game!"),r.a.createElement("h3",null,"This is a game inspired by Google's \"Quick, Draw!\" - You'll have to draw quickly!"),r.a.createElement("br",null))}}]),t}(a.Component),N=function(e){function t(){return Object(x.a)(this,t),Object(S.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(u.b,{to:"./game"},"Proceed")}}]),t}(a.Component),B=E.c("./model/model.json"),G=r.a.createContext();function J(e,t){switch(t.transferredPoint){case"increment":return e+1;case"decrement":return e-1}}function H(){var e=Object(a.useReducer)(J,0),t=Object(o.a)(e,2),n=t[0],l=t[1];function c(e){l(!0===e?{transferredPoint:"increment"}:{transferredPoint:"decrement"})}return r.a.createElement(G.Provider,{value:{points:n,setThePoints:c}},r.a.createElement(A,{setThePoints:c}))}function F(){return r.a.createElement(Y,null)}function I(e){return r.a.createElement(k,{setThePoints:e.setThePoints,model:B})}function M(){return r.a.createElement(O,null)}function W(){return r.a.createElement(Y,null)}function A(e){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:F}),r.a.createElement(i.a,{path:"/game",render:function(t){return r.a.createElement(I,Object.assign({},t,e,{setThePoints:e.setThePoints}))}}),r.a.createElement(i.a,{path:"/end",component:M}),r.a.createElement(i.a,{component:W}))))}G.Provider,G.Consumer;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement("div",null,r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(H,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){},7:function(e){e.exports=JSON.parse('{"c":20,"a":10,"b":3}')}},[[109,1,2]]]);
//# sourceMappingURL=main.09cab34c.chunk.js.map