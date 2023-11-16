(this["webpackJsonp@socialgouv/webseal"]=this["webpackJsonp@socialgouv/webseal"]||[]).push([[0],{170:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return E}));var c=n(11),a=n(21),r=n(15),s=n(1),l=(n(99),n(0)),o=n(319),i=n(321),u=n(318),j=n(97),b=n(44),d=n(171),O=n(172),p=n(320),m=n(62),f=n(95),A=n.n(f),h=(n(297),n(177)),x=n(175),g=n(3);A.a.config({multiline:!0,debug:!0,path:!1});var v=function(){return Object(g.jsxs)(o.a,{style:{padding:"2rem 1rem"},children:[Object(g.jsx)("h1",{children:"WebSeal"}),Object(g.jsx)("p",{children:"Client-side sealed-secrets generation"})]})},w=function(e){return Object(g.jsx)("textarea",Object(s.a)(Object(s.a)({},e),{},{style:Object(s.a)({fontSize:"0.8rem",fontFamily:"Courier",border:"1px solid #ccc",width:"100%",padding:5,height:400},e.style||{})}))},D=function(e){var t=e.text,n=Object(l.useState)(!1),c=Object(r.a)(n,2),a=c[0],s=c[1];return Object(g.jsx)(O.CopyToClipboard,{text:t,onCopy:function(){s(!0),setTimeout((function(){return s(!1)}),2e3)},children:Object(g.jsx)(p.a,{style:{marginLeft:10,cursor:"pointer",transition:"all 0.2s ease-in"},color:a?"green":"black",title:"Copy",size:16})})},S=function(t){var n={};return t.match(/^([\w_\.-\d]+)=(.+)$/im)?n=A.a.parse(e.from(t)):n.VALUE=t,n},C=function(){var e=Object(l.useState)({cluster:"dev",value:"",namespace:"",name:""}),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(l.useState)(null),O=Object(r.a)(o,2),p=O[0],f=O[1],A=Object(l.useState)(null),C=Object(r.a)(A,2),E=C[0],I=C[1],B=function(){var e=Object(a.a)(Object(c.a)().mark((function e(t){var a,r,l,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(t),I(""),f(""),!t.value||t.value===n.value){e.next=27;break}if(a=x.a[t.cluster],r=S(t.value),("prod"!==t.cluster||t.namespace)&&t.name){e.next=13;break}return console.log("namespace and name are mandatory"),I(""),f(""),e.abrupt("return");case 13:if(t.value){e.next=20;break}return console.log("value is mandatory"),I(""),f(""),e.abrupt("return");case 20:return e.next=22,Object(d.getSealedSecret)({pemKey:a,namespace:t.namespace||null,name:t.name||"some-secret-name",scope:t.scope,values:r});case 22:l=e.sent,1===(o=Object.keys(r)).length?f(l.spec.encryptedData[o[0]]):f("Not available for multiple values, use the below secret"),"prod"!==t.cluster&&delete l.metadata.namespace,I(m.a.dump(l,{noRefs:!0,lineWidth:-1}));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(v,{}),Object(g.jsx)(u.a,{children:Object(g.jsxs)(j.a,{xs:12,children:[Object(g.jsx)(h.a,{onSubmit:B,initialFormData:n}),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{style:{marginTop:10,display:"none"},children:Object(g.jsxs)(b.a.Body,{children:[Object(g.jsxs)(b.a.Title,{children:["Encrypted ",Object(g.jsx)(D,{text:p})]}),Object(g.jsx)(w,{defaultValue:p,style:{height:200}})]})}),Object(g.jsx)(b.a,{style:{marginTop:10},children:Object(g.jsxs)(b.a.Body,{children:[Object(g.jsxs)(b.a.Title,{children:["SealedSecret ",Object(g.jsx)(D,{text:E})]}),Object(g.jsx)(w,{defaultValue:E})]})})]})]})})]})};function E(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(C,{})})}}).call(this,n(12).Buffer)},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={dev:"-----BEGIN CERTIFICATE-----\nMIIErjCCApagAwIBAgIRAOqAV9ZpCl1cwMunTHirqXwwDQYJKoZIhvcNAQELBQAw\nADAeFw0yMDA1MjYwODQxMTBaFw0zMDA1MjQwODQxMTBaMAAwggIiMA0GCSqGSIb3\nDQEBAQUAA4ICDwAwggIKAoICAQDc5wz/el5+ghmNAsQzpFK3jtLRIDcoYgyeGHaG\nLH/FCuatiE3qhFeJt2uYQ+GFmEg3e9N/6xDY8NgUMvLdUlAfl5TqV5H96EXTSsGE\naRL2K4EIIdmFflas+r7dh5IYtmV8NTXW2ESLkyOe3PufK/OhdD/xcxglYLM+JnR2\npbKqFvFcsk+LHK3FTWt0xSeqgd+6G9PIxUAbHtoKYI9R41rWnCXY7n0zp+zWD/6j\nEDsbCgFJ657Zwwn0XXGkQqItdZsN+ETIcBVIdqemzcksd7RRUZQiJF8imM5S/wj/\n1o55JwAPLqg5Odj5T/pQq4gSG+UG1P0eJxBQpUCgmtW1SAjS2Gv9kkuw/PAMmLAa\nN0uHnM8TY9OPLLMENjmn9IhvYrhj5lKff4NXNC4nHFSDUAVfu5kNHrYn9WnCCw/f\nZE81p5Do7IcsbfmgEq3Ttg7p1eqXpH9NE9TWSZTz3HW/0lmEuIsNxjX/692DBeP/\nCCUiYlAef704Woo84jwIz4jEwfjonsFVaHbbtIGyqjvTlWcYfQnCLvnB+Plqutc/\n/p8/ViXXfuAwj/K3lYvhGWt2TNLo963XG/pqBVbZxYVI4m7IzrZ0vhbhck1oGYN8\nyX8sYPBUn5/5X/bJ8Xz1KsAeCfSXAvCjAZ3MfQDwxbsEURVQAeiDcF61G75/Lq/Z\nBm74hwIDAQABoyMwITAOBgNVHQ8BAf8EBAMCAAEwDwYDVR0TAQH/BAUwAwEB/zAN\nBgkqhkiG9w0BAQsFAAOCAgEAKLvQtDV5QVNUEcg3ywL03IwtNWmU8EqqASgckVAc\ndmeGnFwV7+7VnrIHI34xCZDhAVEnlMAb0oELgTDSstTx4p25rjqOLQfPcb0TsPko\ncpJHS00trLsLX4DYoZ1dLprgySGrC9jQ/FMYMK1oZ0M04gA/U9alNVNu2DWKosHu\nJGRYBbXVnse5rZi3hl4GV5Vq2ZR/3GHL9xgcjMcSLqHhXoSULLm5qEBUA5flV0BJ\nbY2FEfpm1NHSh5vOaA5t7lrW/XqiAuo8lJM2Ztg/dsX6Zxq7Memq8nqMRpoMFbdj\ni0jTxlPL1ssVHvvmWcLsdx9fHX7XaNGZ4ulA6BIL4DZQMPxvtFk9alqbc9WnjsqL\n/8QA3STXkTSzWrSsTUcabxlp5+MLHRf31iE1dlGVv7FVLjPy29T145eSzoNPM9sN\n1+aBLnXDCj5HUwto8+iKJn7VTURty5KceUFSeURXM2IKYYTec8MElLX0PeXi+SvO\nW37ZCn0RMnljus5aTUPbRHNvJ3Ut/1WDLQu8X0wIm509F1A80Udg5FTxHasBizM2\nL+rpr2923MG1JSitDfvNj1rxx1FLdynP84SOEJDCtbB8YRcDUC4bHKrAcG4FBAFX\nUDzbbsoR58onjcZW3QH4mvV9K3+llwHSo8zfYyKRhF8pUUJHp7A/8DgMYQyYAv2z\nbag=\n-----END CERTIFICATE-----",prod:"-----BEGIN CERTIFICATE-----\nMIIErTCCApWgAwIBAgIQXJCfJIfF/fpww3KcvD0j1TANBgkqhkiG9w0BAQsFADAA\nMB4XDTIwMDUyNjA4NDkyN1oXDTMwMDUyNDA4NDkyN1owADCCAiIwDQYJKoZIhvcN\nAQEBBQADggIPADCCAgoCggIBAK8tTm78wfObpDaAa00eli9TwZfjbSO+Bis6DqNX\nto+tddnEBuEmnOlTKKoODZwnuph/G8JELKwbaTJ1bdYKasKDdgYju52ZMjBNexs4\nOX1L+YLiJEkwYBSkmYR/ARAulXIAolozjvub888OdWWOuZfX3DeNh/AI24uc+nrw\nsiKMyRZSsW9OXhRpBFe1BY8xofvnf1Ts5+OZWeNEmTbAKROKDd3rJpaKzxsJJwQ+\nSmRUQnxmwNxOfjFFxJx6n1jRloqwpLTOkCX/iSp6Nhnprcs8dvFjSH7l+gQU8XVY\nVXRWfXdJ6hBZd6fOjhKxlIrPz5+mUsMhyzON3ZS83XG9imFrWgSh3nBCifZRs4YF\nwxtGL1Qwm6CM+OsjLHM4lo6hrh9eEZVO8TwrXWKDU1CKkBgXVA5irGJ7NbGKtzih\nBZMRZ5pqQQ6ptiLXxfiB6DgvIJqvL8+yrt22j/QFZtyKkVW02n+dNiI7ltxb9RdS\nhyv3wBbHORgw6DbPrpoRpabDfUDEGJnd7+gY0Z5P9wHeX1vtt4g+XR5z/ERWIkFR\nuK2cLpflhGv4zE5DkI/2Pp4EAsQirUPlbdelvEz6NPtJk6ws5gQgBorRPaDhZojz\ntcYkFzRv3gkNHCMCMEAPEgU1OdUqslJVwi9P+/cxe9Piwwd9WWTu7mg6OB0cjhPI\ntYzhAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwIAATAPBgNVHRMBAf8EBTADAQH/MA0G\nCSqGSIb3DQEBCwUAA4ICAQAjGgAz92xGNjbcIxsn2B/URYTBcsKd9RcgmzB3kDWq\nEKUV3KbgAItq4c2WB9bc0IG1Icp9bYOXZy1ldPoGib4edMUZuOU4xUAFVCrALGbk\ng8ldoEuIiSGAjQDuvWxl6XK8/FcBK93tR591zuJHS2KXspnV3FWi1tE8lr2zEd+G\nwuFzm0/uAyg+A+SEZVGwSBSH0fMWcCEk+yGyb4zmM3VW8D5zQvbialiqdmycZWoi\nC7Ldto5dBeFCCL7ndh1U0//UqaDmRCLazSeU6wCilWT4RvejBwNcojIYd0wk9keS\n8z92wpKj5Hv+OPn1r4fAmMnc3ObwtkVnka+QvuhKZOXmNInJSqdsZFToS6TaQOO6\n/W/urXYlcILJPlbTMlpjzxYVCi93yMcSrrdZ3MADlPhgtN+clVIRSQ/7eIDkh7j9\n9C+Dsz9nKa7FBSngDheJEEPcG2jNeRvO9kM2hgkMfcNdmTZUNyE19p1bdnTFoWCs\nq22fGvXZi6kkZTMDcSYDBZ8OkWK20GuZAs1mxrz9HfMdZobH7yNOj7Oj+0bNf5Ef\ntN6We84bWM+Xh7wlZxXPHpos5JDC5PV1Kmbwf3riLtTVe2W7hy+oKULS+WO59KJz\niKzeAM8CuUQixJtSmrNjp1nAsSR6/BZXWRvmZShksQ4kwFm/PlsWLEKgtzxtP0tN\nfg==\n-----END CERTIFICATE-----"}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c,a=n(15),r=n(26),s=n(1),l=n(35),o=n(0),i=n.n(o),u=n(325),j=n(318),b=n(97),d=n(324),O=n(176),p=n(96),m=n(62),f=n(3),A=["name","value"],h=i.a.forwardRef((function(e,t){var n=e.name,c=e.value,a=Object(l.a)(e,A);return Object(f.jsx)(u.a.Check,Object(s.a)({inline:!0,ref:t,name:n,id:"".concat(n,"-").concat(c),label:c,type:"radio",value:c},a))})),x=(c=function(e){return["namespace","scope","cluster","name"].includes(e)},function(e){return Object.keys(e).filter(c).reduce((function(t,n){return Object(s.a)(Object(s.a)({},t),{},Object(r.a)({},n,e[n]))}),{})}),g=function(e){var t=e.onSubmit,n=e.initialFormData,c=function(){var e=Object(p.parse)(window.location.search),t=Object(o.useState)(e),n=Object(a.a)(t,2),c=n[0],r=n[1];return[c,Object(o.useCallback)((function(e){window.history.replaceState({},window.title,document.location.href.split("?")[0]+"?"+Object(p.stringify)(e)),r(e)}),[r])]}(),r=Object(a.a)(c,2),l=r[0],A=r[1],g=x(l),v=Object(s.a)(Object(s.a)(Object(s.a)({},n),g),{},{scope:"prod"===g.cluster?"namespace":"cluster"}),w=Object(O.a)({mode:"onChange",defaultValues:v}),D=w.register,S=w.handleSubmit,C=w.watch,E=w.setValue,I=w.trigger,B=w.getValues,M=function(e){A(x(e)),t(e)},T=C("cluster"),N=(C("scope"),C("value"));i.a.useEffect((function(){var e=C((function(e){e.name,e.type;var t=B();M(t)}));return function(){return e.unsubscribe()}}),[C]),i.a.useEffect((function(){var e=C((function(e){e.name,e.type;var t=B();M(t)}));return function(){return e.unsubscribe()}}),[C]);return Object(f.jsxs)(u.a,{onSubmit:S(M),children:[Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{xs:12,md:6,children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{sm:"3",children:Object(f.jsx)(u.a.Label,{children:"Cluster"})}),Object(f.jsxs)(b.a,{sm:"9",children:[Object(f.jsx)(h,Object(s.a)(Object(s.a)({name:"cluster",value:"dev",label:"dev / preprod"},D("cluster")),{},{onChange:function(e){E("cluster",e.target.value),E("scope","cluster"),I()}})),Object(f.jsx)(h,Object(s.a)(Object(s.a)({name:"cluster",value:"prod"},D("cluster")),{},{onChange:function(e){E("cluster",e.target.value),E("scope","namespace"),I()}}))]})]})}),Object(f.jsx)(b.a,{style:{display:"none"},children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{xs:12,sm:3,children:Object(f.jsx)(u.a.Label,{children:"Scope"})}),Object(f.jsxs)(b.a,{sm:9,children:[Object(f.jsx)(h,Object(s.a)(Object(s.a)({name:"scope",value:"cluster",disabled:"prod"===T},D("scope")),{},{onChange:function(e){E("scope",e.target.value),I()}})),Object(f.jsx)(h,Object(s.a)(Object(s.a)({name:"scope",value:"namespace"},D("scope")),{},{onChange:function(e){E("scope",e.target.value),I()}})),Object(f.jsx)(h,Object(s.a)(Object(s.a)({name:"scope",value:"strict",disabled:"prod"===T},D("scope")),{},{onChange:function(e){E("scope",e.target.value),I()}}))]})]})})]}),"prod"===T&&Object(f.jsxs)(u.a.Group,{as:j.a,children:[Object(f.jsxs)(u.a.Label,{column:!0,children:["Namespace ","prod"===T?"*":""]}),Object(f.jsx)(b.a,{sm:"9",children:Object(f.jsx)(u.a.Control,Object(s.a)(Object(s.a)({name:"namespace"},D("namespace",{required:!0})),{},{required:!0,type:"text",placeholder:"K8s Namespace (optional in dev)"}))})]}),Object(f.jsxs)(u.a.Group,{as:j.a,children:[Object(f.jsx)(u.a.Label,{column:!0,children:"Secret name *"}),Object(f.jsx)(b.a,{sm:"9",children:Object(f.jsx)(u.a.Control,Object(s.a)(Object(s.a)({name:"name"},D("name",{required:!0})),{},{type:"text",placeholder:"K8s secret name"}))})]}),"prod"===T&&Object(f.jsx)(d.a,{variant:"warning",children:"\u26a0\ufe0f En production, pensez \xe0 re-sceller l'ensemble de vos valeurs et r\xe9cup\xe9rer le fichier YAML complet ci-dessous."}),Object(f.jsx)(u.a.Group,{children:Object(f.jsx)(u.a.Control,Object(s.a)(Object(s.a)({as:"textarea",name:"value",value:N,id:"value",style:{marginTop:10},rows:8},D("value",{required:!0,value:N})),{},{onPaste:function(e){var t=e.clipboardData.getData("Text"),n=0===e.target.selectionStart&&e.target.selectionEnd===N.length;t&&(""===N.trim()||n)&&(e.preventDefault(),E("value",function(t){try{var n=Object(m.b)(t);if(null!=n&&"Object"===n.constructor.name)return Object.entries(n).map((function(e){var t=Object(a.a)(e,2),n=t[0],c=t[1];return"".concat(n,"=`").concat(c,"`")})).join("\n")}catch(e){return console.error(e),t}return t}(t)))},onChange:function(e){E("value",e.target.value),I()},placeholder:"MY_TOKEN=SomeSuperSecretToken\nMY_PASSWORD=SomeSuperSecretPassword"}))})]})}},179:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(34),r=n.n(a),s=n(170),l=n(3),o=document.getElementById("root");r.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(s.a,{})}),o)},202:function(e,t){},204:function(e,t){},214:function(e,t){},216:function(e,t){},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},256:function(e,t){},275:function(e,t){},67:function(e,t){}},[[179,1,2]]]);
//# sourceMappingURL=main.b64ef9fd.chunk.js.map