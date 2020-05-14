(this["webpackJsonpchouza-index"]=this["webpackJsonpchouza-index"]||[]).push([[0],{23:function(e,a,o){e.exports=o(41)},28:function(e,a,o){},29:function(e,a,o){},41:function(e,a,o){"use strict";o.r(a);var t=o(1),r=o.n(t),n=o(7),l=o.n(n),i=(o(28),o(17)),c=o(18),s=o(9),u=o(22),d=o(21),m=(o(29),o(19)),h=o(10),b=o.n(h),g=o(20),p=o(43),f=o(44),E=o(45),M=o(46),v=o(50),y=o(47),C=o(48),D=o(49),k=b()("01-05-2020","DD-MM-YYYY").startOf("day"),z=[26.6,26.6],w=function(e){Object(u.a)(o,e);var a=Object(d.a)(o);function o(e){var t;return Object(i.a)(this,o),(t=a.call(this,e)).state={modalAbout:!1,modalDatos:!1},t.toggleAboutModal=t.toggleAboutModal.bind(Object(s.a)(t)),t.toggleDatosModal=t.toggleDatosModal.bind(Object(s.a)(t)),t}return Object(c.a)(o,[{key:"toggleAboutModal",value:function(){this.setState({modalAbout:!this.state.modalAbout})}},{key:"toggleDatosModal",value:function(){this.setState({modalDatos:!this.state.modalDatos})}},{key:"tasaCorrespondiente",value:function(e){var a=Math.floor(e/30);return z[a]/365/100}},{key:"componentDidMount",value:function(){var e=this;m.get("https://mercados.ambito.com//dolarrava/mep/grafico/anual",(function(a){var o=a.slice(1).map((function(e){return{fecha:b()(e[0],"DD-MM-YYYY"),cierre:Number(e[1]),ahorro:Number(e[1])}})).filter((function(e){return e.fecha.isAfter(k)}));o.forEach((function(a,o,t){var r=e.tasaCorrespondiente(o);t[o].ahorro=0!==o?t[o-1].ahorro*(1+r):t[o].cierre}));new g.Chart("myChart",{type:"line",data:{labels:o.map((function(e){return e.fecha.format("DD-MM-YYYY")})),datasets:[{backgroundColor:"rgba(255,0,0,0.25)",borderColor:"red",label:"Chouza Index",data:o.map((function(e){return Math.round(e.ahorro/e.cierre*100*100)/100}))},{backgroundColor:"rgba(0,0,0,0)",borderColor:"blue",label:"Ahorro en Pesos",data:o.map((function(e){return Math.round(100*e.ahorro)/100})),hidden:!0},{backgroundColor:"rgba(0,0,0,0)",borderColor:"green",label:"Precio D\xf3lar MEP",data:o.map((function(e){return Math.round(100*e.cierre)/100})),hidden:!0}]}})}))}},{key:"render",value:function(){var e=this.state,a=e.modalAbout,o=e.modalDatos;return r.a.createElement(p.a,null,r.a.createElement(f.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement("h1",null,"\xcdndice Chouza"),r.a.createElement("p",null,r.a.createElement("em",null,"(o simplemente un Plazo fijo vs. D\xf3lar)")))),r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement("canvas",{id:"myChart",width:"400",height:"200"}))),r.a.createElement(f.a,null,r.a.createElement(E.a,{className:"text-center"},r.a.createElement(M.a,{color:"primary",outline:!0,onClick:this.toggleAboutModal},"Sobre la p\xe1gina"),r.a.createElement(M.a,{color:"primary",outline:!0,onClick:this.toggleDatosModal},"Sobre el \xcdndice"))),r.a.createElement(v.a,{size:"lg",isOpen:a,toggle:this.toggleAboutModal},r.a.createElement(y.a,{toggle:this.toggleAboutModal},"\xbfQu\xe9 es esto?"),r.a.createElement(C.a,null,r.a.createElement("blockquote",{className:"blockquote text-center"},r.a.createElement("p",{className:"mb-0"},"Es que part\xeds de un error. \xbfQuer\xe9s ahorrar? \xa1Ahorr\xe1 en pesos!"),r.a.createElement("footer",{className:"blockquote-footer"},"Un economista en ",r.a.createElement("cite",{title:"Source Title"},"Twitter"))),"La humilde idea de esta p\xe1gina es mostrar  qu\xe9 hubiese pasado si un ciudadano argentino promedio hubiese le\xeddo ese twit y hubiese decidido hacer un plazo fijo en pesos a la tasa del momento (dicho twit es del 2 de Mayo de 2020, corresponde la TNA de 26,6%) y compararlo contra la evoluci\xf3n del d\xf3lar m\xe1s libre que exista en el momento (el d\xf3lar MEP es en este caso).")),r.a.createElement(v.a,{size:"lg",isOpen:o,toggle:this.toggleDatosModal},r.a.createElement(y.a,{toggle:this.toggleDatosModal},"\xbfQu\xe9 significa este \xedndice?"),r.a.createElement(C.a,null,r.a.createElement("p",null,"El \xedndice lo que hacer es comparar un ahorro en pesos y ver su evoluci\xf3n diaria al haber hecho un plazo fijo, y eso compararlo con el mismo ahorro pero si hubiese comprado d\xf3lar MEP."),r.a.createElement("p",null,"Si ",r.a.createElement(D.a,{color:"secondary"},"\xcdndice Chouza=100")," significa que hubiese sido lo mismo hacer un plazo fijo que haber comprado d\xf3lares."),r.a.createElement("p",null,"Si ",r.a.createElement(D.a,{color:"success"},"\xcdndice Chouza",">","100"),", significa que el ahorro en pesos creci\xf3 m\xe1s que si se hubiese dolarizado"),r.a.createElement("p",null,"Si ",r.a.createElement(D.a,{color:"danger"},"\xcdndice Chouza","<","100"),", significa que ese ahorro en plazo fijo fue un error, ya que hubiese sido mejor comprar d\xf3lar MEP."),r.a.createElement("p",null,"Los datos del d\xf3lar MEP es informaci\xf3n p\xfablica de ",r.a.createElement("a",{href:"https://www.ambito.com/"},"Ambito.com"),", y el ahorro en pesos se calcula diariamente en base al plazo fijo realizado el 2 de Mayo de 2020"))))}}]),o}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o(40);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5365a390.chunk.js.map