(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,function(e,t){e.exports={openWeatherKey:"5bdf42518b656748fdf297201fe14f53"}},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),l=(a(15),a(3)),o=a(4),s=a(8),m=a(5),u=a(9),d=(a(16),a(17),a(18),a(6)),h=a.n(d),p=function(e){var t=h()(e.reading.dt_txt);return r.a.createElement("div",{className:"card-container"},r.a.createElement("h3",null,t.format("dddd-MMM-DD-YYYY")),r.a.createElement("i",{className:"owf owf-".concat(e.reading.weather[0].id," owf-5x")}),r.a.createElement("h1",null,Math.round(e.reading.main.temp-273.15),"\xb0c"),r.a.createElement("h2",null,e.reading.weather[0].description))},f=function(e){return r.a.createElement("div",{className:"grid_cards"},e.dailyData.map((function(e,t){return r.a.createElement(p,{key:t,reading:e})})))},v=a(7),E=a.n(v),y=(a(20),a(21),function(){return r.a.createElement("div",{className:"loadingDiv spinner-box"},r.a.createElement("div",{className:"solar-system"},r.a.createElement("div",{className:"earth-orbit orbit"},r.a.createElement("div",{className:"planet earth"}),r.a.createElement("div",{className:"venus-orbit orbit"},r.a.createElement("div",{className:"planet venus"}),r.a.createElement("div",{className:"mercury-orbit orbit"},r.a.createElement("div",{className:"planet mercury"}),r.a.createElement("div",{className:"sun"}))))))}),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){e.setState({currCity:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({loading:!0}),fetch("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=".concat(e.state.currCity,"&appid=").concat(E.a.openWeatherKey)).then((function(e){return e.json()})).then((function(t){var a=t.list.filter((function(e){return e.dt_txt.includes("18:00:00")}));e.setState({fullData:t.list,dailyData:a,loading:!1})}))},e.state={dailyData:[],currCity:"",loading:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.loading,a=e.dailyData;return r.a.createElement("div",{className:"App App_background"},r.a.createElement("h1",{className:"indie"},"Blue Skies Weather App"),r.a.createElement("h3",{className:"indie"},"city:",this.state.currCity),r.a.createElement("form",{className:"Form_box",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"formDiv"},r.a.createElement("input",{className:"form_input",placeholder:"Enter City",type:"search",onChange:this.handleInput,value:this.state.currCity})),r.a.createElement("div",{className:"formDiv"},r.a.createElement("input",{className:"form_button",type:"submit"}))),r.a.createElement("div",null,t?r.a.createElement(y,null):r.a.createElement(f,{dailyData:a})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.240ad5a9.chunk.js.map