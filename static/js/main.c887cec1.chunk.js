(this["webpackJsonp@socialgouv/webseal"]=this["webpackJsonp@socialgouv/webseal"]||[]).push([[0],{165:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return I}));var c=t(10),a=t.n(c),s=t(16),r=t(15),l=t(11),i=t(0),o=t(315),u=t(317),j=t(314),b=t(94),d=t(42),O=t(166),p=t(167),A=t(316),m=t(168),f=t(92),h=t.n(f),x=(t(295),t(173)),g=t(171),v=t(2);h.a.config({multiline:!0,debug:!0,path:!1});var w=function(){return Object(v.jsxs)(o.a,{style:{padding:"2rem 1rem"},children:[Object(v.jsx)("h1",{children:"WebSeal"}),Object(v.jsx)("p",{children:"Client-side sealed-secrets generation"})]})},S=function(e){return Object(v.jsx)("textarea",Object(l.a)(Object(l.a)({},e),{},{style:Object(l.a)({fontSize:"0.8rem",fontFamily:"Courier",border:"1px solid #ccc",width:"100%",padding:5,height:400},e.style||{})}))},C=function(e){var n=e.text,t=Object(i.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(v.jsx)(p.CopyToClipboard,{text:n,onCopy:function(){s(!0),setTimeout((function(){return s(!1)}),2e3)},children:Object(v.jsx)(A.a,{style:{marginLeft:10,cursor:"pointer",transition:"all 0.2s ease-in"},color:a?"green":"black",title:"Copy",size:16})})},D=function(n){var t={};return n.match(/^([\w_-\d]+)=(.+)$/im)?t=h.a.parse(e.from(n)):t.VALUE=n,t},E=function(){var e=Object(i.useState)({cluster:"dev",value:"",namespace:"",name:""}),n=Object(r.a)(e,2),t=n[0],c=n[1],l=Object(i.useState)(null),o=Object(r.a)(l,2),p=o[0],A=o[1],f=Object(i.useState)(null),h=Object(r.a)(f,2),E=h[0],I=h[1],B=function(){var e=Object(s.a)(a.a.mark((function e(n){var s,r,l,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(n),I(""),A(""),!n.value||n.value===t.value){e.next=10;break}return s=g.a[n.cluster],r=D(n.value),e.next=8,Object(O.getSealedSecret)({pemKey:s,namespace:n.namespace||null,name:n.name||"some-secret-name",scope:n.scope,values:r});case 8:l=e.sent,n.namespace&&n.name?n.value?(1===(i=Object.keys(r)).length?A(l.spec.encryptedData[i[0]]):A("Not available for multiple values, use the below secret"),I(m.a.dump(l,{noRefs:!0,lineWidth:-1}))):(console.log("value is mandatory"),I(""),A("")):(console.log("namespace and name are mandatory"),I(""),A(""));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(w,{}),Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a,{xs:12,children:[Object(v.jsx)(x.a,{onSubmit:B,initialFormData:t}),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a,{style:{marginTop:10,display:"none"},children:Object(v.jsxs)(d.a.Body,{children:[Object(v.jsxs)(d.a.Title,{children:["Encrypted ",Object(v.jsx)(C,{text:p})]}),Object(v.jsx)(S,{defaultValue:p,style:{height:200}})]})}),Object(v.jsx)(d.a,{style:{marginTop:10},children:Object(v.jsxs)(d.a.Body,{children:[Object(v.jsxs)(d.a.Title,{children:["SealedSecret ",Object(v.jsx)(C,{text:E})]}),Object(v.jsx)(S,{defaultValue:E})]})})]})]})})]})};function I(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(E,{})})}}).call(this,t(12).Buffer)},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c={dev:"-----BEGIN CERTIFICATE-----\nMIIErjCCApagAwIBAgIRAOqAV9ZpCl1cwMunTHirqXwwDQYJKoZIhvcNAQELBQAw\nADAeFw0yMDA1MjYwODQxMTBaFw0zMDA1MjQwODQxMTBaMAAwggIiMA0GCSqGSIb3\nDQEBAQUAA4ICDwAwggIKAoICAQDc5wz/el5+ghmNAsQzpFK3jtLRIDcoYgyeGHaG\nLH/FCuatiE3qhFeJt2uYQ+GFmEg3e9N/6xDY8NgUMvLdUlAfl5TqV5H96EXTSsGE\naRL2K4EIIdmFflas+r7dh5IYtmV8NTXW2ESLkyOe3PufK/OhdD/xcxglYLM+JnR2\npbKqFvFcsk+LHK3FTWt0xSeqgd+6G9PIxUAbHtoKYI9R41rWnCXY7n0zp+zWD/6j\nEDsbCgFJ657Zwwn0XXGkQqItdZsN+ETIcBVIdqemzcksd7RRUZQiJF8imM5S/wj/\n1o55JwAPLqg5Odj5T/pQq4gSG+UG1P0eJxBQpUCgmtW1SAjS2Gv9kkuw/PAMmLAa\nN0uHnM8TY9OPLLMENjmn9IhvYrhj5lKff4NXNC4nHFSDUAVfu5kNHrYn9WnCCw/f\nZE81p5Do7IcsbfmgEq3Ttg7p1eqXpH9NE9TWSZTz3HW/0lmEuIsNxjX/692DBeP/\nCCUiYlAef704Woo84jwIz4jEwfjonsFVaHbbtIGyqjvTlWcYfQnCLvnB+Plqutc/\n/p8/ViXXfuAwj/K3lYvhGWt2TNLo963XG/pqBVbZxYVI4m7IzrZ0vhbhck1oGYN8\nyX8sYPBUn5/5X/bJ8Xz1KsAeCfSXAvCjAZ3MfQDwxbsEURVQAeiDcF61G75/Lq/Z\nBm74hwIDAQABoyMwITAOBgNVHQ8BAf8EBAMCAAEwDwYDVR0TAQH/BAUwAwEB/zAN\nBgkqhkiG9w0BAQsFAAOCAgEAKLvQtDV5QVNUEcg3ywL03IwtNWmU8EqqASgckVAc\ndmeGnFwV7+7VnrIHI34xCZDhAVEnlMAb0oELgTDSstTx4p25rjqOLQfPcb0TsPko\ncpJHS00trLsLX4DYoZ1dLprgySGrC9jQ/FMYMK1oZ0M04gA/U9alNVNu2DWKosHu\nJGRYBbXVnse5rZi3hl4GV5Vq2ZR/3GHL9xgcjMcSLqHhXoSULLm5qEBUA5flV0BJ\nbY2FEfpm1NHSh5vOaA5t7lrW/XqiAuo8lJM2Ztg/dsX6Zxq7Memq8nqMRpoMFbdj\ni0jTxlPL1ssVHvvmWcLsdx9fHX7XaNGZ4ulA6BIL4DZQMPxvtFk9alqbc9WnjsqL\n/8QA3STXkTSzWrSsTUcabxlp5+MLHRf31iE1dlGVv7FVLjPy29T145eSzoNPM9sN\n1+aBLnXDCj5HUwto8+iKJn7VTURty5KceUFSeURXM2IKYYTec8MElLX0PeXi+SvO\nW37ZCn0RMnljus5aTUPbRHNvJ3Ut/1WDLQu8X0wIm509F1A80Udg5FTxHasBizM2\nL+rpr2923MG1JSitDfvNj1rxx1FLdynP84SOEJDCtbB8YRcDUC4bHKrAcG4FBAFX\nUDzbbsoR58onjcZW3QH4mvV9K3+llwHSo8zfYyKRhF8pUUJHp7A/8DgMYQyYAv2z\nbag=\n-----END CERTIFICATE-----",prod:"-----BEGIN CERTIFICATE-----\nMIIErTCCApWgAwIBAgIQXJCfJIfF/fpww3KcvD0j1TANBgkqhkiG9w0BAQsFADAA\nMB4XDTIwMDUyNjA4NDkyN1oXDTMwMDUyNDA4NDkyN1owADCCAiIwDQYJKoZIhvcN\nAQEBBQADggIPADCCAgoCggIBAK8tTm78wfObpDaAa00eli9TwZfjbSO+Bis6DqNX\nto+tddnEBuEmnOlTKKoODZwnuph/G8JELKwbaTJ1bdYKasKDdgYju52ZMjBNexs4\nOX1L+YLiJEkwYBSkmYR/ARAulXIAolozjvub888OdWWOuZfX3DeNh/AI24uc+nrw\nsiKMyRZSsW9OXhRpBFe1BY8xofvnf1Ts5+OZWeNEmTbAKROKDd3rJpaKzxsJJwQ+\nSmRUQnxmwNxOfjFFxJx6n1jRloqwpLTOkCX/iSp6Nhnprcs8dvFjSH7l+gQU8XVY\nVXRWfXdJ6hBZd6fOjhKxlIrPz5+mUsMhyzON3ZS83XG9imFrWgSh3nBCifZRs4YF\nwxtGL1Qwm6CM+OsjLHM4lo6hrh9eEZVO8TwrXWKDU1CKkBgXVA5irGJ7NbGKtzih\nBZMRZ5pqQQ6ptiLXxfiB6DgvIJqvL8+yrt22j/QFZtyKkVW02n+dNiI7ltxb9RdS\nhyv3wBbHORgw6DbPrpoRpabDfUDEGJnd7+gY0Z5P9wHeX1vtt4g+XR5z/ERWIkFR\nuK2cLpflhGv4zE5DkI/2Pp4EAsQirUPlbdelvEz6NPtJk6ws5gQgBorRPaDhZojz\ntcYkFzRv3gkNHCMCMEAPEgU1OdUqslJVwi9P+/cxe9Piwwd9WWTu7mg6OB0cjhPI\ntYzhAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwIAATAPBgNVHRMBAf8EBTADAQH/MA0G\nCSqGSIb3DQEBCwUAA4ICAQAjGgAz92xGNjbcIxsn2B/URYTBcsKd9RcgmzB3kDWq\nEKUV3KbgAItq4c2WB9bc0IG1Icp9bYOXZy1ldPoGib4edMUZuOU4xUAFVCrALGbk\ng8ldoEuIiSGAjQDuvWxl6XK8/FcBK93tR591zuJHS2KXspnV3FWi1tE8lr2zEd+G\nwuFzm0/uAyg+A+SEZVGwSBSH0fMWcCEk+yGyb4zmM3VW8D5zQvbialiqdmycZWoi\nC7Ldto5dBeFCCL7ndh1U0//UqaDmRCLazSeU6wCilWT4RvejBwNcojIYd0wk9keS\n8z92wpKj5Hv+OPn1r4fAmMnc3ObwtkVnka+QvuhKZOXmNInJSqdsZFToS6TaQOO6\n/W/urXYlcILJPlbTMlpjzxYVCi93yMcSrrdZ3MADlPhgtN+clVIRSQ/7eIDkh7j9\n9C+Dsz9nKa7FBSngDheJEEPcG2jNeRvO9kM2hgkMfcNdmTZUNyE19p1bdnTFoWCs\nq22fGvXZi6kkZTMDcSYDBZ8OkWK20GuZAs1mxrz9HfMdZobH7yNOj7Oj+0bNf5Ef\ntN6We84bWM+Xh7wlZxXPHpos5JDC5PV1Kmbwf3riLtTVe2W7hy+oKULS+WO59KJz\niKzeAM8CuUQixJtSmrNjp1nAsSR6/BZXWRvmZShksQ4kwFm/PlsWLEKgtzxtP0tN\nfg==\n-----END CERTIFICATE-----"}},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var c,a=t(15),s=t(26),r=t(11),l=t(174),i=t(0),o=t.n(i),u=t(321),j=t(314),b=t(94),d=t(320),O=t(172),p=t(93),A=t(2),m=o.a.forwardRef((function(e,n){var t=e.name,c=e.value,a=Object(l.a)(e,["name","value"]);return Object(A.jsx)(u.a.Check,Object(r.a)({inline:!0,ref:n,name:t,id:"".concat(t,"-").concat(c),label:c,type:"radio",value:c},a))})),f=(c=function(e){return["namespace","scope","cluster","name"].includes(e)},function(e){return Object.keys(e).filter(c).reduce((function(n,t){return Object(r.a)(Object(r.a)({},n),{},Object(s.a)({},t,e[t]))}),{})}),h=function(e){var n=e.onSubmit,t=e.initialFormData,c=function(){var e=Object(p.parse)(window.location.search),n=Object(i.useState)(e),t=Object(a.a)(n,2),c=t[0],s=t[1];return[c,Object(i.useCallback)((function(e){window.history.replaceState({},window.title,document.location.href.split("?")[0]+"?"+Object(p.stringify)(e)),s(e)}),[s])]}(),s=Object(a.a)(c,2),l=s[0],h=s[1],x=f(l),g=Object(r.a)(Object(r.a)(Object(r.a)({},t),x),{},{scope:"prod"===x.cluster?"namespace":"cluster"}),v=Object(O.a)({mode:"onChange",defaultValues:g}),w=v.register,S=v.handleSubmit,C=v.watch,D=v.setValue,E=v.trigger,I=v.getValues,B=function(e){h(f(e)),n(e)},M=C("cluster"),T=(C("scope"),C("value"));return o.a.useEffect((function(){var e=C((function(e){e.name,e.type;var n=I();B(n)}));return function(){return e.unsubscribe()}}),[C]),o.a.useEffect((function(){var e=C((function(e){e.name,e.type;var n=I();B(n)}));return function(){return e.unsubscribe()}}),[C]),Object(A.jsxs)(u.a,{onSubmit:S(B),children:[Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{xs:12,md:6,children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{sm:"3",children:Object(A.jsx)(u.a.Label,{children:"Cluster"})}),Object(A.jsxs)(b.a,{sm:"9",children:[Object(A.jsx)(m,Object(r.a)(Object(r.a)({name:"cluster",value:"dev",label:"dev / preprod"},w("cluster")),{},{onChange:function(e){D("cluster",e.target.value),D("scope","cluster"),D("namespace",void 0),D("name",void 0),E()}})),Object(A.jsx)(m,Object(r.a)(Object(r.a)({name:"cluster",value:"prod"},w("cluster")),{},{onChange:function(e){D("cluster",e.target.value),D("scope","namespace"),E()}}))]})]})}),Object(A.jsx)(b.a,{style:{display:"none"},children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{xs:12,sm:3,children:Object(A.jsx)(u.a.Label,{children:"Scope"})}),Object(A.jsxs)(b.a,{sm:9,children:[Object(A.jsx)(m,Object(r.a)(Object(r.a)({name:"scope",value:"cluster",disabled:"prod"===M},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}})),Object(A.jsx)(m,Object(r.a)(Object(r.a)({name:"scope",value:"namespace"},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}})),Object(A.jsx)(m,Object(r.a)(Object(r.a)({name:"scope",value:"strict",disabled:"prod"===M},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}}))]})]})})]}),Object(A.jsxs)(u.a.Group,{as:j.a,children:[Object(A.jsx)(u.a.Label,{column:!0,children:"Namespace *"}),Object(A.jsx)(b.a,{sm:"9",children:Object(A.jsx)(u.a.Control,Object(r.a)(Object(r.a)({name:"namespace"},w("namespace",{required:!0})),{},{required:!0,type:"text",placeholder:"K8s Namespace"}))})]}),Object(A.jsxs)(u.a.Group,{as:j.a,children:[Object(A.jsx)(u.a.Label,{column:!0,children:"Secret name *"}),Object(A.jsx)(b.a,{sm:"9",children:Object(A.jsx)(u.a.Control,Object(r.a)(Object(r.a)({name:"name"},w("name",{required:!0})),{},{type:"text",placeholder:"K8s secret name"}))})]}),"prod"===M&&Object(A.jsx)(d.a,{variant:"warning",children:"\u26a0\ufe0f En production, pensez \xe0 re-sceller l'ensemble de vos valeurs et r\xe9cup\xe9rer le fichier YAML complet ci-dessous."}),Object(A.jsx)(u.a.Group,{children:Object(A.jsx)(u.a.Control,Object(r.a)(Object(r.a)({as:"textarea",name:"value",id:"value",style:{marginTop:10},rows:8},w("value",{required:!0,value:T})),{},{placeholder:"MY_TOKEN=SomeSuperSecretToken\nMY_PASSWORD=SomeSuperSecretPassword"}))})]})}},176:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(41),s=t.n(a),r=t(165),l=t(2),i=document.getElementById("root");s.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(r.a,{})}),i)},200:function(e,n){},202:function(e,n){},212:function(e,n){},214:function(e,n){},239:function(e,n){},240:function(e,n){},245:function(e,n){},247:function(e,n){},254:function(e,n){},273:function(e,n){},64:function(e,n){}},[[176,1,2]]]);
//# sourceMappingURL=main.c887cec1.chunk.js.map