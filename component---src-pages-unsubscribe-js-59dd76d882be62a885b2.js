(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v32E:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),c=n.n(a),i=n("7oih"),r=n("EYWl"),s=n("dI71"),o=n("wTIg"),l=n("qKvR"),u={name:"xi606m",styles:"text-align:center;"},b=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))||this).state={email:""},t.handleInputChange=function(e){var n,a=e.target,c=a.value,i=a.name;t.setState(((n={})[i]=c,n))},t.handleSubmit=function(e){e.preventDefault(),alert("You have successfully unsubscribed with the email "+t.state.email+".");var n=new FormData(e.target);fetch("https://script.google.com/macros/s/AKfycbz9MC60KNtRx2q0F5u2E_tom_3Dp2ODTEiMHogFf5me8IdzqRES/exec",{method:"POST",body:n})},t}return Object(s.a)(t,e),t.prototype.render=function(){return Object(l.c)("form",{onSubmit:this.handleSubmit,css:u},Object(l.c)("input",{type:"email",name:"email","aria-label":"Email",placeholder:"Email",value:this.state.firstName,onChange:this.handleInputChange}),Object(l.c)(m,{type:"submit"},"Unsubscribe"))},t}(c.a.Component),m=Object(o.a)("button",{target:"e1vh4fpo0"})({name:"jxodxx",styles:"color:white;background-color:black;border:none;margin:1rem;padding:5px 10px;"}),p=b,d=n("p3AD"),h={name:"xi606m",styles:"text-align:center;"};t.default=function(){return Object(l.c)(i.a,null,Object(l.c)(r.a,{title:"Unsubscribe",description:"Unsubsribe from The Student Watch website newsletter."}),Object(l.c)("div",{css:Object(l.b)("padding:0 ",Object(d.a)(2/3),";")},Object(l.c)("h1",{css:h},"Unsubscribe"),Object(l.c)("p",null,"If you no longer want to be notified when new articles are posted, please enter your email address in the form below and click Unsubscribe."),Object(l.c)(p,null)))}}}]);
//# sourceMappingURL=component---src-pages-unsubscribe-js-59dd76d882be62a885b2.js.map