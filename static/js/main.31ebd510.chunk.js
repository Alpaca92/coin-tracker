(this["webpackJsonpmaster-class"]=this["webpackJsonpmaster-class"]||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),i=t(14),o=t(27),a=t.n(o),s=t(16),l=t(8),d=t(6),u=t(19),b=t(4),h=t(17),j=t.n(h),p=t(24),x="https://api.coinpaprika.com/v1";function f(){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins"));case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(j.a.mark((function n(e){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,fetch("".concat(x,"/coins/").concat(e));case 3:return n.next=5,n.sent.json();case 5:n.t0=n.sent,n.next=9;break;case 8:n.t0=null;case 9:return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return(m=Object(p.a)(j.a.mark((function n(e){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,fetch("".concat(x,"/tickers/").concat(e));case 3:return n.next=5,n.sent.json();case 5:n.t0=n.sent,n.next=9;break;case 8:n.t0=null;case 9:return n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(j.a.mark((function n(e){var t,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=Math.floor(Date.now()/1e3),c=t-1209600,!e){n.next=10;break}return n.next=5,fetch("".concat(x,"/coins/").concat(e,"/ohlcv/historical?start=").concat(c,"&end=").concat(t));case 5:return n.next=7,n.sent.json();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=null;case 11:return n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y,k,w,C,_,L,q,S=t(28),M=t(1),I=d.c.div(y||(y=Object(l.a)(["\n  padding: 10px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),D=d.c.header(k||(k=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Q=d.c.ul(w||(w=Object(l.a)([""]))),z=d.c.li(C||(C=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n\n  a {\n    transition: color 0.3s ease-in-out;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 20px;\n  }\n\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.chipsColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),P=d.c.h1(_||(_=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),F=d.c.span(L||(L=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),A=d.c.img(q||(q=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var T=function(n){var e=n.toggleMode,t=Object(i.useQuery)("allCoins",f),c=t.isLoading,r=t.data;return Object(M.jsxs)(I,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:"\ucf54\uc778"})}),Object(M.jsxs)(D,{children:[Object(M.jsx)(P,{children:"\ucf54\uc778"}),Object(M.jsx)("button",{onClick:e,children:"toggle mode"})]}),c?Object(M.jsx)(F,{children:"Loading..."}):Object(M.jsx)(Q,{children:null===r||void 0===r?void 0:r.slice(0,30).map((function(n){return Object(M.jsx)(z,{children:Object(M.jsxs)(u.b,{to:n.id,state:{name:n.name},children:[Object(M.jsx)(A,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:"symbol of ".concat(n.symbol)}),n.name," \u2192"]})},n.id)}))})]})},H=t(46),J=t.n(H);var R,U,B,E,N=function(n){var e=n.coinId,t=n.isLight,c=Object(i.useQuery)(["ohlcv",e],(function(){return function(n){return v.apply(this,arguments)}(e)})),r=c.isLoading,o=c.data;return console.log(null===o||void 0===o?void 0:o.map((function(n){var e=n.time_open,t=n.open,c=n.high,r=n.low,i=n.close;return{x:new Date(e),y:[t,c,r,i]}}))),Object(M.jsx)("div",{children:r?"Loading chart...":Object(M.jsx)(J.a,{type:"candlestick",series:[{name:e,data:null===o||void 0===o?void 0:o.map((function(n){return{x:n.time_open,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:t?"light":"dark"},chart:{type:"candlestick",height:500,width:500,toolbar:{show:!1}},yaxis:{show:!1},xaxis:{labels:{show:!1},categories:null===o||void 0===o?void 0:o.map((function(n){return n.time_close})),type:"datetime"},tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(3))}}}}})})},$=d.c.section(R||(R=Object(l.a)(["\n  article:nth-child(2n) {\n    background-color: #070a0a;\n  }\n"]))),G=d.c.article(U||(U=Object(l.a)(["\n  background-color: ",";\n  padding: 25px 20px;\n  margin-top: 10px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n"])),(function(n){return n.theme.chipsColor})),K=d.c.h3(B||(B=Object(l.a)(["\n  text-transform: uppercase;\n"]))),V=d.c.p(E||(E=Object(l.a)(["\n  font-weight: 700;\n"])));var W,X,Y,Z,nn,en,tn,cn,rn,on=function(n){var e=n.tickersData;return Object(M.jsxs)($,{children:[Object(M.jsxs)(G,{children:[Object(M.jsx)(K,{children:"ath_price"}),Object(M.jsx)(V,{children:null===e||void 0===e?void 0:e.ath_price})]}),Object(M.jsxs)(G,{children:[Object(M.jsx)(K,{children:"percent_change_1h"}),Object(M.jsx)(V,{children:null===e||void 0===e?void 0:e.percent_change_1h})]}),Object(M.jsxs)(G,{children:[Object(M.jsx)(K,{children:"percent_change_24h"}),Object(M.jsx)(V,{children:null===e||void 0===e?void 0:e.percent_change_24h})]}),Object(M.jsxs)(G,{children:[Object(M.jsx)(K,{children:"percent_change_30d"}),Object(M.jsx)(V,{children:null===e||void 0===e?void 0:e.percent_change_30d})]})]})},an=d.c.div(W||(W=Object(l.a)(["\n  padding: 10px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),sn=d.c.header(X||(X=Object(l.a)(["\n  position: relative;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .back-btn {\n    position: absolute;\n    top: calc(5vh - (35px / 2));\n    right: 5px;\n    width: 35px;\n    height: 35px;\n    background-color: rgba(125, 125, 125, 0.5);\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n  }\n"]))),ln=d.c.h1(Y||(Y=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),dn=d.c.div(Z||(Z=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),un=d.c.div(nn||(nn=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),bn=d.c.p(en||(en=Object(l.a)(["\n  margin: 20px 0px;\n"]))),hn=d.c.div(tn||(tn=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),jn=d.c.span(cn||(cn=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),pn=d.c.span(rn||(rn=Object(l.a)(["\n  text-align: center;\n  display: block;\n"])));var xn=function(n){var e,t,c,r,o=n.isLight,a=Object(b.h)().coinId,s=Object(b.e)().state,l=Object(b.f)("/:coinId/price"),d=Object(b.f)("/:coinId/chart"),h=Object(i.useQuery)(["info",a],(function(){return function(n){return g.apply(this,arguments)}(a)})),j=h.isLoading,p=h.data,x=Object(i.useQuery)(["tickers",a],(function(){return function(n){return m.apply(this,arguments)}(a)}),{refetchInterval:5e3}),f=x.isLoading,O=x.data,v=j||f;return Object(M.jsxs)(an,{children:[Object(M.jsx)(S.a,{children:Object(M.jsx)("title",{children:a})}),Object(M.jsxs)(sn,{children:[Object(M.jsx)(ln,{children:(null===s||void 0===s?void 0:s.name)?s.name:v?"Loading...":null===p||void 0===p?void 0:p.name}),Object(M.jsx)(u.b,{className:"back-btn",to:"..",children:"\u2190"})]}),v?Object(M.jsx)(pn,{children:"Loading..."}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(dn,{children:[Object(M.jsxs)(un,{children:[Object(M.jsx)("span",{children:"Rank:"}),Object(M.jsx)("span",{children:null===p||void 0===p?void 0:p.rank})]}),Object(M.jsxs)(un,{children:[Object(M.jsx)("span",{children:"Symbol:"}),Object(M.jsx)("span",{children:null===p||void 0===p?void 0:p.symbol})]}),Object(M.jsxs)(un,{children:[Object(M.jsx)("span",{children:"Price:"}),Object(M.jsx)("span",{children:null===O||void 0===O||null===(e=O.quotes)||void 0===e||null===(t=e.USD)||void 0===t||null===(c=t.price)||void 0===c?void 0:c.toFixed(3)})]})]}),Object(M.jsx)(bn,{children:null===p||void 0===p?void 0:p.description}),Object(M.jsxs)(dn,{children:[Object(M.jsxs)(un,{children:[Object(M.jsx)("span",{children:"Total Supply:"}),Object(M.jsx)("span",{children:null===O||void 0===O?void 0:O.total_supply})]}),Object(M.jsxs)(un,{children:[Object(M.jsx)("span",{children:"Max Supply:"}),Object(M.jsx)("span",{children:null===O||void 0===O?void 0:O.max_supply})]})]}),Object(M.jsxs)(hn,{children:[Object(M.jsx)(jn,{isActive:null!==d,children:Object(M.jsx)(u.b,{to:"chart",children:"Chart"})}),Object(M.jsx)(jn,{isActive:null!==l,children:Object(M.jsx)(u.b,{to:"price",children:"Price"})})]}),Object(M.jsxs)(b.c,{children:[Object(M.jsx)(b.a,{path:"chart",element:Object(M.jsx)(N,{isLight:o,coinId:a})}),Object(M.jsx)(b.a,{path:"price",element:Object(M.jsx)(on,{tickersData:null===O||void 0===O||null===(r=O.quotes)||void 0===r?void 0:r.USD})})]})]})]})};var fn,On=function(n){var e=n.toggleMode,t=n.isLight;return Object(M.jsx)(u.a,{basename:"/coin-tracker",children:Object(M.jsxs)(b.c,{children:[Object(M.jsx)(b.a,{path:"/",element:Object(M.jsx)(T,{toggleMode:e})}),Object(M.jsx)(b.a,{path:"/:coinId/*",element:Object(M.jsx)(xn,{isLight:t})})]})})},gn=t(47),mn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",chipsColor:"transparent"},vn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",chipsColor:"white"},yn=Object(d.b)(fn||(fn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n  font-weight: 300;\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var kn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1];return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(d.a,{theme:t?vn:mn,children:[Object(M.jsx)(yn,{}),Object(M.jsx)(On,{toggleMode:function(){return r((function(n){return!n}))},isLight:t}),Object(M.jsx)(gn.ReactQueryDevtools,{})]})})},wn=new i.QueryClient;a.a.render(Object(M.jsx)(r.a.StrictMode,{children:Object(M.jsx)(i.QueryClientProvider,{client:wn,children:Object(M.jsx)(kn,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.31ebd510.chunk.js.map