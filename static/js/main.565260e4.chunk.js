(this["webpackJsonp@socialgouv/webseal"]=this["webpackJsonp@socialgouv/webseal"]||[]).push([[0],{165:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return I}));var c=n(10),a=n.n(c),r=n(16),s=n(15),l=n(11),i=n(0),o=n(315),u=n(317),j=n(314),b=n(94),d=n(42),O=n(166),p=n(167),A=n(316),m=n(168),f=n(92),x=n.n(f),h=(n(295),n(173)),g=n(171),v=n(2);x.a.config({multiline:!0,debug:!0,path:!1});var w=function(){return Object(v.jsxs)(o.a,{style:{padding:"2rem 1rem"},children:[Object(v.jsx)("h1",{children:"WebSeal"}),Object(v.jsx)("p",{children:"Client-side sealed-secrets generation"})]})},S=function(e){return Object(v.jsx)("textarea",Object(l.a)(Object(l.a)({},e),{},{style:Object(l.a)({fontSize:"0.8rem",fontFamily:"Courier",border:"1px solid #ccc",width:"100%",padding:5,height:400},e.style||{})}))},C=function(e){var t=e.text,n=Object(i.useState)(!1),c=Object(s.a)(n,2),a=c[0],r=c[1];return Object(v.jsx)(p.CopyToClipboard,{text:t,onCopy:function(){r(!0),setTimeout((function(){return r(!1)}),2e3)},children:Object(v.jsx)(A.a,{style:{marginLeft:10,cursor:"pointer",transition:"all 0.2s ease-in"},color:a?"green":"black",title:"Copy",size:16})})},D=function(t){var n={};return t.match(/^([\w_-\d]+)=(.+)$/im)?n=x.a.parse(e.from(t)):n.VALUE=t,n},E=function(){var e=Object(i.useState)({cluster:"dev",value:"",namespace:"",name:""}),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(i.useState)(null),o=Object(s.a)(l,2),p=o[0],A=o[1],f=Object(i.useState)(null),x=Object(s.a)(f,2),E=x[0],I=x[1],B=function(){var e=Object(r.a)(a.a.mark((function e(t){var r,s,l,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(t),I(""),A(""),!t.value||t.value===n.value){e.next=26;break}if(r=g.a[t.cluster],s=D(t.value),("prod"!==t.cluster||t.namespace)&&t.name){e.next=13;break}return console.log("namespace and name are mandatory"),I(""),A(""),e.abrupt("return");case 13:if(t.value){e.next=20;break}return console.log("value is mandatory"),I(""),A(""),e.abrupt("return");case 20:return e.next=22,Object(O.getSealedSecret)({pemKey:r,namespace:t.namespace||null,name:t.name||"some-secret-name",scope:t.scope,values:s});case 22:l=e.sent,1===(i=Object.keys(s)).length?A(l.spec.encryptedData[i[0]]):A("Not available for multiple values, use the below secret"),I(m.a.dump(l,{noRefs:!0,lineWidth:-1}));case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(u.a,{children:[Object(v.jsx)(w,{}),Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a,{xs:12,children:[Object(v.jsx)(h.a,{onSubmit:B,initialFormData:n}),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a,{style:{marginTop:10,display:"none"},children:Object(v.jsxs)(d.a.Body,{children:[Object(v.jsxs)(d.a.Title,{children:["Encrypted ",Object(v.jsx)(C,{text:p})]}),Object(v.jsx)(S,{defaultValue:p,style:{height:200}})]})}),Object(v.jsx)(d.a,{style:{marginTop:10},children:Object(v.jsxs)(d.a.Body,{children:[Object(v.jsxs)(d.a.Title,{children:["SealedSecret ",Object(v.jsx)(C,{text:E})]}),Object(v.jsx)(S,{defaultValue:E})]})})]})]})})]})};function I(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(E,{})})}}).call(this,n(12).Buffer)},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={dev:"-----BEGIN CERTIFICATE-----\nMIIErjCCApagAwIBAgIRAOqAV9ZpCl1cwMunTHirqXwwDQYJKoZIhvcNAQELBQAw\nADAeFw0yMDA1MjYwODQxMTBaFw0zMDA1MjQwODQxMTBaMAAwggIiMA0GCSqGSIb3\nDQEBAQUAA4ICDwAwggIKAoICAQDc5wz/el5+ghmNAsQzpFK3jtLRIDcoYgyeGHaG\nLH/FCuatiE3qhFeJt2uYQ+GFmEg3e9N/6xDY8NgUMvLdUlAfl5TqV5H96EXTSsGE\naRL2K4EIIdmFflas+r7dh5IYtmV8NTXW2ESLkyOe3PufK/OhdD/xcxglYLM+JnR2\npbKqFvFcsk+LHK3FTWt0xSeqgd+6G9PIxUAbHtoKYI9R41rWnCXY7n0zp+zWD/6j\nEDsbCgFJ657Zwwn0XXGkQqItdZsN+ETIcBVIdqemzcksd7RRUZQiJF8imM5S/wj/\n1o55JwAPLqg5Odj5T/pQq4gSG+UG1P0eJxBQpUCgmtW1SAjS2Gv9kkuw/PAMmLAa\nN0uHnM8TY9OPLLMENjmn9IhvYrhj5lKff4NXNC4nHFSDUAVfu5kNHrYn9WnCCw/f\nZE81p5Do7IcsbfmgEq3Ttg7p1eqXpH9NE9TWSZTz3HW/0lmEuIsNxjX/692DBeP/\nCCUiYlAef704Woo84jwIz4jEwfjonsFVaHbbtIGyqjvTlWcYfQnCLvnB+Plqutc/\n/p8/ViXXfuAwj/K3lYvhGWt2TNLo963XG/pqBVbZxYVI4m7IzrZ0vhbhck1oGYN8\nyX8sYPBUn5/5X/bJ8Xz1KsAeCfSXAvCjAZ3MfQDwxbsEURVQAeiDcF61G75/Lq/Z\nBm74hwIDAQABoyMwITAOBgNVHQ8BAf8EBAMCAAEwDwYDVR0TAQH/BAUwAwEB/zAN\nBgkqhkiG9w0BAQsFAAOCAgEAKLvQtDV5QVNUEcg3ywL03IwtNWmU8EqqASgckVAc\ndmeGnFwV7+7VnrIHI34xCZDhAVEnlMAb0oELgTDSstTx4p25rjqOLQfPcb0TsPko\ncpJHS00trLsLX4DYoZ1dLprgySGrC9jQ/FMYMK1oZ0M04gA/U9alNVNu2DWKosHu\nJGRYBbXVnse5rZi3hl4GV5Vq2ZR/3GHL9xgcjMcSLqHhXoSULLm5qEBUA5flV0BJ\nbY2FEfpm1NHSh5vOaA5t7lrW/XqiAuo8lJM2Ztg/dsX6Zxq7Memq8nqMRpoMFbdj\ni0jTxlPL1ssVHvvmWcLsdx9fHX7XaNGZ4ulA6BIL4DZQMPxvtFk9alqbc9WnjsqL\n/8QA3STXkTSzWrSsTUcabxlp5+MLHRf31iE1dlGVv7FVLjPy29T145eSzoNPM9sN\n1+aBLnXDCj5HUwto8+iKJn7VTURty5KceUFSeURXM2IKYYTec8MElLX0PeXi+SvO\nW37ZCn0RMnljus5aTUPbRHNvJ3Ut/1WDLQu8X0wIm509F1A80Udg5FTxHasBizM2\nL+rpr2923MG1JSitDfvNj1rxx1FLdynP84SOEJDCtbB8YRcDUC4bHKrAcG4FBAFX\nUDzbbsoR58onjcZW3QH4mvV9K3+llwHSo8zfYyKRhF8pUUJHp7A/8DgMYQyYAv2z\nbag=\n-----END CERTIFICATE-----",prod:"-----BEGIN CERTIFICATE-----\nMIIErTCCApWgAwIBAgIQXJCfJIfF/fpww3KcvD0j1TANBgkqhkiG9w0BAQsFADAA\nMB4XDTIwMDUyNjA4NDkyN1oXDTMwMDUyNDA4NDkyN1owADCCAiIwDQYJKoZIhvcN\nAQEBBQADggIPADCCAgoCggIBAK8tTm78wfObpDaAa00eli9TwZfjbSO+Bis6DqNX\nto+tddnEBuEmnOlTKKoODZwnuph/G8JELKwbaTJ1bdYKasKDdgYju52ZMjBNexs4\nOX1L+YLiJEkwYBSkmYR/ARAulXIAolozjvub888OdWWOuZfX3DeNh/AI24uc+nrw\nsiKMyRZSsW9OXhRpBFe1BY8xofvnf1Ts5+OZWeNEmTbAKROKDd3rJpaKzxsJJwQ+\nSmRUQnxmwNxOfjFFxJx6n1jRloqwpLTOkCX/iSp6Nhnprcs8dvFjSH7l+gQU8XVY\nVXRWfXdJ6hBZd6fOjhKxlIrPz5+mUsMhyzON3ZS83XG9imFrWgSh3nBCifZRs4YF\nwxtGL1Qwm6CM+OsjLHM4lo6hrh9eEZVO8TwrXWKDU1CKkBgXVA5irGJ7NbGKtzih\nBZMRZ5pqQQ6ptiLXxfiB6DgvIJqvL8+yrt22j/QFZtyKkVW02n+dNiI7ltxb9RdS\nhyv3wBbHORgw6DbPrpoRpabDfUDEGJnd7+gY0Z5P9wHeX1vtt4g+XR5z/ERWIkFR\nuK2cLpflhGv4zE5DkI/2Pp4EAsQirUPlbdelvEz6NPtJk6ws5gQgBorRPaDhZojz\ntcYkFzRv3gkNHCMCMEAPEgU1OdUqslJVwi9P+/cxe9Piwwd9WWTu7mg6OB0cjhPI\ntYzhAgMBAAGjIzAhMA4GA1UdDwEB/wQEAwIAATAPBgNVHRMBAf8EBTADAQH/MA0G\nCSqGSIb3DQEBCwUAA4ICAQAjGgAz92xGNjbcIxsn2B/URYTBcsKd9RcgmzB3kDWq\nEKUV3KbgAItq4c2WB9bc0IG1Icp9bYOXZy1ldPoGib4edMUZuOU4xUAFVCrALGbk\ng8ldoEuIiSGAjQDuvWxl6XK8/FcBK93tR591zuJHS2KXspnV3FWi1tE8lr2zEd+G\nwuFzm0/uAyg+A+SEZVGwSBSH0fMWcCEk+yGyb4zmM3VW8D5zQvbialiqdmycZWoi\nC7Ldto5dBeFCCL7ndh1U0//UqaDmRCLazSeU6wCilWT4RvejBwNcojIYd0wk9keS\n8z92wpKj5Hv+OPn1r4fAmMnc3ObwtkVnka+QvuhKZOXmNInJSqdsZFToS6TaQOO6\n/W/urXYlcILJPlbTMlpjzxYVCi93yMcSrrdZ3MADlPhgtN+clVIRSQ/7eIDkh7j9\n9C+Dsz9nKa7FBSngDheJEEPcG2jNeRvO9kM2hgkMfcNdmTZUNyE19p1bdnTFoWCs\nq22fGvXZi6kkZTMDcSYDBZ8OkWK20GuZAs1mxrz9HfMdZobH7yNOj7Oj+0bNf5Ef\ntN6We84bWM+Xh7wlZxXPHpos5JDC5PV1Kmbwf3riLtTVe2W7hy+oKULS+WO59KJz\niKzeAM8CuUQixJtSmrNjp1nAsSR6/BZXWRvmZShksQ4kwFm/PlsWLEKgtzxtP0tN\nfg==\n-----END CERTIFICATE-----"}},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c,a=n(15),r=n(26),s=n(11),l=n(174),i=n(0),o=n.n(i),u=n(321),j=n(314),b=n(94),d=n(320),O=n(172),p=n(93),A=n(2),m=o.a.forwardRef((function(e,t){var n=e.name,c=e.value,a=Object(l.a)(e,["name","value"]);return Object(A.jsx)(u.a.Check,Object(s.a)({inline:!0,ref:t,name:n,id:"".concat(n,"-").concat(c),label:c,type:"radio",value:c},a))})),f=(c=function(e){return["namespace","scope","cluster","name"].includes(e)},function(e){return Object.keys(e).filter(c).reduce((function(t,n){return Object(s.a)(Object(s.a)({},t),{},Object(r.a)({},n,e[n]))}),{})}),x=function(e){var t=e.onSubmit,n=e.initialFormData,c=function(){var e=Object(p.parse)(window.location.search),t=Object(i.useState)(e),n=Object(a.a)(t,2),c=n[0],r=n[1];return[c,Object(i.useCallback)((function(e){window.history.replaceState({},window.title,document.location.href.split("?")[0]+"?"+Object(p.stringify)(e)),r(e)}),[r])]}(),r=Object(a.a)(c,2),l=r[0],x=r[1],h=f(l),g=Object(s.a)(Object(s.a)(Object(s.a)({},n),h),{},{scope:"prod"===h.cluster?"namespace":"cluster"}),v=Object(O.a)({mode:"onChange",defaultValues:g}),w=v.register,S=v.handleSubmit,C=v.watch,D=v.setValue,E=v.trigger,I=v.getValues,B=function(e){x(f(e)),t(e)},M=C("cluster"),T=(C("scope"),C("value"));return o.a.useEffect((function(){var e=C((function(e){e.name,e.type;var t=I();B(t)}));return function(){return e.unsubscribe()}}),[C]),o.a.useEffect((function(){var e=C((function(e){e.name,e.type;var t=I();B(t)}));return function(){return e.unsubscribe()}}),[C]),Object(A.jsxs)(u.a,{onSubmit:S(B),children:[Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{xs:12,md:6,children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{sm:"3",children:Object(A.jsx)(u.a.Label,{children:"Cluster"})}),Object(A.jsxs)(b.a,{sm:"9",children:[Object(A.jsx)(m,Object(s.a)(Object(s.a)({name:"cluster",value:"dev",label:"dev / preprod"},w("cluster")),{},{onChange:function(e){D("cluster",e.target.value),D("scope","cluster"),E()}})),Object(A.jsx)(m,Object(s.a)(Object(s.a)({name:"cluster",value:"prod"},w("cluster")),{},{onChange:function(e){D("cluster",e.target.value),D("scope","namespace"),E()}}))]})]})}),Object(A.jsx)(b.a,{style:{display:"none"},children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)(b.a,{xs:12,sm:3,children:Object(A.jsx)(u.a.Label,{children:"Scope"})}),Object(A.jsxs)(b.a,{sm:9,children:[Object(A.jsx)(m,Object(s.a)(Object(s.a)({name:"scope",value:"cluster",disabled:"prod"===M},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}})),Object(A.jsx)(m,Object(s.a)(Object(s.a)({name:"scope",value:"namespace"},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}})),Object(A.jsx)(m,Object(s.a)(Object(s.a)({name:"scope",value:"strict",disabled:"prod"===M},w("scope")),{},{onChange:function(e){D("scope",e.target.value),E()}}))]})]})})]}),Object(A.jsxs)(u.a.Group,{as:j.a,children:[Object(A.jsxs)(u.a.Label,{column:!0,children:["Namespace ","prod"===M?"*":""]}),Object(A.jsx)(b.a,{sm:"9",children:Object(A.jsx)(u.a.Control,Object(s.a)(Object(s.a)({name:"namespace"},w("namespace",{required:!0})),{},{required:!0,type:"text",placeholder:"K8s Namespace (optional in dev)"}))})]}),Object(A.jsxs)(u.a.Group,{as:j.a,children:[Object(A.jsx)(u.a.Label,{column:!0,children:"Secret name *"}),Object(A.jsx)(b.a,{sm:"9",children:Object(A.jsx)(u.a.Control,Object(s.a)(Object(s.a)({name:"name"},w("name",{required:!0})),{},{type:"text",placeholder:"K8s secret name"}))})]}),"prod"===M&&Object(A.jsx)(d.a,{variant:"warning",children:"\u26a0\ufe0f En production, pensez \xe0 re-sceller l'ensemble de vos valeurs et r\xe9cup\xe9rer le fichier YAML complet ci-dessous."}),Object(A.jsx)(u.a.Group,{children:Object(A.jsx)(u.a.Control,Object(s.a)(Object(s.a)({as:"textarea",name:"value",id:"value",style:{marginTop:10},rows:8},w("value",{required:!0,value:T})),{},{placeholder:"MY_TOKEN=SomeSuperSecretToken\nMY_PASSWORD=SomeSuperSecretPassword"}))})]})}},176:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(41),r=n.n(a),s=n(165),l=n(2),i=document.getElementById("root");r.a.render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(s.a,{})}),i)},200:function(e,t){},202:function(e,t){},212:function(e,t){},214:function(e,t){},239:function(e,t){},240:function(e,t){},245:function(e,t){},247:function(e,t){},254:function(e,t){},273:function(e,t){},64:function(e,t){}},[[176,1,2]]]);
//# sourceMappingURL=main.565260e4.chunk.js.map