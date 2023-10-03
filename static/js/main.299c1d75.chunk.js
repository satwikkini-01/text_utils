(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"}))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-3")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"true",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode"))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(5),m=Object(c.a)(s,2),i=m[0],u=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"myBox",style:{color:"light"===e.mode?"black":"white"},className:"form-label"},l.a.createElement("h1",null,e.heading)),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#4a4a4a":"white",color:"light"===e.mode?"black":"white"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){if(r.length>0){var t=r.toUpperCase();o(t),e.showAlert("Converted to UpperCase!","success")}else e.showAlert("Text panel is empty","warning")}},"UPPER CASE"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){if(r.length>0){var t=r.toLowerCase();o(t),e.showAlert("Converted to LowerCase!","success")}else e.showAlert("Text panel is empty","warning")}},"lower case"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){r.length>0?(o(""),e.showAlert("Cleared !","success")):e.showAlert("Text panel is already cleared!","warning")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){if(r.length>0){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard! ","success")}else e.showAlert("Text panel is empty !","warning")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){if(r.length>0){var t=r.repeat(i);o(t),e.showAlert("Repeated n times","success")}else e.showAlert("Text panel is empty !","warning")}},"Repeat times"),l.a.createElement("select",{value:i,onChange:function(e){return u(e.target.value)}},l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"),l.a.createElement("option",null,"7"),l.a.createElement("option",null,"8"),l.a.createElement("option",null,"9"),l.a.createElement("option",null,"10"))),l.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes required to read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Type something to preview")))}s.defaultProps={title:"Set Title Here",about:"Set About Here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),u=Object(c.a)(o,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",about:"About",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#29354a",p("Dark Mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",p("Light Mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{heading:"Enter the text below to analyze",mode:a,showAlert:p})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.299c1d75.chunk.js.map