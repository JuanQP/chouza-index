(this["webpackJsonpchouza-index"]=this["webpackJsonpchouza-index"]||[]).push([[0],{25:function(e,a,t){e.exports=t(43)},30:function(e,a,t){},31:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var o=t(1),r=t.n(o),n=t(9),l=t.n(n),c=(t(30),t(19)),s=t(20),i=t(12),u=t(24),m=t(23),d=(t(31),t(21)),h=t(11),g=t.n(h),f=t(22),b=t(45),p=t(46),E=t(47),M=t(48),y=t(49),v=t(50),D=t(51),k=t(55),x=t(52),z=t(53),C=t(54),w=g()("01-05-2020","DD-MM-YYYY").startOf("day"),A=[26.6,30.02,30.02,33.06,33.06,34,34,37,37,37,37],Y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).state={modalAbout:!1,modalDatos:!1,registros:[]},o.toggleAboutModal=o.toggleAboutModal.bind(Object(i.a)(o)),o.toggleDatosModal=o.toggleDatosModal.bind(Object(i.a)(o)),o}return Object(s.a)(t,[{key:"toggleAboutModal",value:function(){this.setState({modalAbout:!this.state.modalAbout})}},{key:"toggleDatosModal",value:function(){this.setState({modalDatos:!this.state.modalDatos})}},{key:"tasaMensual",value:function(e){return A[e-1]/12/100}},{key:"componentDidMount",value:function(){var e=this;d.get("https://mercados.ambito.com//dolarrava/mep/grafico/anual",(function(a){var t=a.slice(1).map((function(e){return{fecha:g()(e[0],"DD-MM-YYYY"),cierre:Number(e[1]),ahorro:Number(e[1]),indice:Number(100)}})).filter((function(e){return e.fecha.isAfter(w)&&(2===e.fecha.date()||0===e.fecha.diff(g()(),"days"))}));t.forEach((function(a,t,o){var r=e.tasaMensual(t);if(0===t)return o[t].ahorro=o[t].cierre,void(o[t].indice=o[t].ahorro/o[t].cierre*100);if(t===o.length-1){var n=g()().diff(o[t-1].fecha,"days");r=e.tasaMensual(t)/30*n}o[t].ahorro=o[t-1].ahorro*(1+r),o[t].indice=parseFloat((o[t].ahorro/o[t].cierre*100).toFixed(2))})),console.log(t),e.setState({registros:t});new f.Chart("myChart",{type:"line",data:{labels:t.map((function(e,a,t){return a===t.length-1?e.fecha.format("DD-MM-YYYY")+" (Hoy)":e.fecha.format("DD-MM-YYYY")})),datasets:[{backgroundColor:"rgba(255,0,0,0.25)",borderColor:"red",label:"Chouza Index",data:t.map((function(e){return e.indice})),fill:"start",lineTension:.4},{backgroundColor:"rgba(0,0,0,0)",borderColor:"blue",label:"Ahorro en Pesos",data:t.map((function(e){return Math.round(100*e.ahorro)/100})),hidden:!0},{backgroundColor:"rgba(0,0,0,0)",borderColor:"green",label:"Precio D\xf3lar MEP",data:t.map((function(e){return e.cierre})),hidden:!0}]}})}))}},{key:"render",value:function(){var e=this.state,a=e.modalAbout,t=e.modalDatos,o=0===this.state.registros.length?0:this.state.registros[this.state.registros.length-1].indice,n=0===this.state.registros.length?0:Math.round(100*(o-100))/100;return r.a.createElement(b.a,null,r.a.createElement(p.a,{className:"text-center"},r.a.createElement(E.a,null,r.a.createElement("h1",null,"\xcdndice Chouza"),r.a.createElement("p",null,r.a.createElement("em",null,"(o simplemente un Plazo fijo vs. D\xf3lar)")))),r.a.createElement(p.a,{className:"text-center"},r.a.createElement(E.a,{className:"col-md-6 d-flex justify-content-center"},r.a.createElement(M.a,null,r.a.createElement(y.a,null,"\xcdndice hoy"),r.a.createElement(v.a,{className:"text-monospace text-primary"},o))),r.a.createElement(E.a,{className:"col-md-6 d-flex justify-content-center"},r.a.createElement(M.a,null,r.a.createElement(y.a,null,"Ahorro vs d\xf3lar"),r.a.createElement(v.a,{className:"text-monospace "+(n<0?"text-danger":"text-success")},n,"%")))),r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"col-md-12"},r.a.createElement("canvas",{id:"myChart",width:"100",height:"60"}))),r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"text-center"},r.a.createElement(D.a,{color:"primary",outline:!0,onClick:this.toggleAboutModal},"Sobre la p\xe1gina"),r.a.createElement(D.a,{color:"primary",outline:!0,onClick:this.toggleDatosModal},"Sobre el \xcdndice"))),r.a.createElement(k.a,{size:"lg",isOpen:a,toggle:this.toggleAboutModal},r.a.createElement(x.a,{toggle:this.toggleAboutModal},"\xbfQu\xe9 es esto?"),r.a.createElement(z.a,null,r.a.createElement("blockquote",{className:"blockquote text-center"},r.a.createElement("p",{className:"mb-0"},"Es que part\xeds de un error. \xbfQuer\xe9s ahorrar? \xa1Ahorr\xe1 en pesos!"),r.a.createElement("footer",{className:"blockquote-footer"},"Un economista en ",r.a.createElement("cite",{title:"Source Title"},"Twitter"))),"La humilde idea de esta p\xe1gina es mostrar  qu\xe9 hubiese pasado si un ciudadano argentino promedio hubiese le\xeddo ese twit y hubiese decidido hacer un plazo fijo en pesos a la tasa del momento (dicho twit es del 2 de Mayo de 2020, corresponde la TNA de 26,6%) y compararlo contra la evoluci\xf3n del d\xf3lar m\xe1s libre que exista en el momento (el d\xf3lar MEP es en este caso).")),r.a.createElement(k.a,{size:"lg",isOpen:t,toggle:this.toggleDatosModal},r.a.createElement(x.a,{toggle:this.toggleDatosModal},"\xbfQu\xe9 significa este \xedndice?"),r.a.createElement(z.a,null,r.a.createElement("p",null,"El \xedndice lo que hacer es comparar un ahorro en pesos y ver su evoluci\xf3n mensual al haber hecho un plazo fijo, y eso compararlo con el mismo ahorro pero si hubiese comprado d\xf3lar MEP."),r.a.createElement("p",null,"Si ",r.a.createElement(C.a,{color:"secondary"},"\xcdndice Chouza=100")," significa que hubiese sido lo mismo hacer un plazo fijo que haber comprado d\xf3lares."),r.a.createElement("p",null,"Si ",r.a.createElement(C.a,{color:"success"},"\xcdndice Chouza",">","100"),", significa que el ahorro en pesos creci\xf3 m\xe1s que si se hubiese dolarizado"),r.a.createElement("p",null,"Si ",r.a.createElement(C.a,{color:"danger"},"\xcdndice Chouza","<","100"),", significa que ese ahorro en plazo fijo fue un error, ya que hubiese sido mejor comprar d\xf3lar MEP."),r.a.createElement("p",null,"Los datos del d\xf3lar MEP es informaci\xf3n p\xfablica de ",r.a.createElement("a",{href:"https://www.ambito.com/"},"Ambito.com"),", y el ahorro en pesos se calcula diariamente en base al plazo fijo realizado el 2 de Mayo de 2020"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(42);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.321886c7.chunk.js.map