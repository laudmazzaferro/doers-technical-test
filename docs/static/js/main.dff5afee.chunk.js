(this["webpackJsonpdoers-technical-test"]=this["webpackJsonpdoers-technical-test"]||[]).push([[0],{38:function(e,t,a){e.exports=a(50)},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),s=(a(43),a(13)),o=a(11),i=a(21),p=a(22),u=a(10),m=a(23),h=a(89),f=(a(44),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).getInputValue=a.getInputValue.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"getInputValue",value:function(e){var t=e.currentTarget.value;this.props.getInputSpell(t)}},{key:"render",value:function(){return l.a.createElement("form",{noValidate:!0,autoComplete:"off",className:"Text__form"},l.a.createElement(h.a,{className:"Text__field",id:"filled-basic",label:"Search spell",variant:"filled",onChange:this.getInputValue}))}}]),t}(l.a.Component)),d=a(85),v=a(90),b=a(86),S=a(87),g=(a(48),a(27)),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.spells,a=e.inputSpell,n=t.filter((function(e){return e.spell.toUpperCase().includes(a.toUpperCase())}));return l.a.createElement("div",{className:"spells__container"},l.a.createElement("ol",{className:"spells__list"},n.map((function(e){return l.a.createElement("li",{key:e._id,className:"spells__item"},l.a.createElement(d.a,{className:"spell__card",background:g.a},l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement(S.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.spell),l.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},"Effect:",e.effect),l.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},"Type: ",e.type)))))}))))}}]),t}(l.a.Component),y=a(88),j=(a(49),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(p.a)(t).call(this,e))).state={spells:null,inputSpell:""},a.getSpells=a.getSpells.bind(Object(u.a)(a)),a.getInputSpell=a.getInputSpell.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getSpells()}},{key:"getSpells",value:function(){var e,t=this;(e="https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty",fetch(e).then((function(e){return e.json()}))).then((function(e){t.setState({spells:e})}))}},{key:"getInputSpell",value:function(e){this.setState({inputSpell:e})}},{key:"render",value:function(){var e=this.state,t=e.spells,a=e.inputSpell;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"app_header"},l.a.createElement("h1",{className:"app__title"},"Harry Potter's Spells")),t?l.a.createElement("div",{className:"app_main"},l.a.createElement(f,{getInputSpell:this.getInputSpell}),l.a.createElement(E,{spells:t,inputSpell:a})):l.a.createElement("div",{className:"app_main"},l.a.createElement(y.a,{className:"circular__progress",color:"primary"})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.dff5afee.chunk.js.map