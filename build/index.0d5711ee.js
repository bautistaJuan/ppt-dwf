var e=globalThis,t={},a={},s=e.parcelRequire7796;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequire7796=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>a,set:e=>a=e,enumerable:!0,configurable:!0});var a,s=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)s.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.0d5711ee.js","b2iW0","star-1.f2d62d9f.png","6ZmME","star-2.f26942fe.png","5mdmA","papel.a18e2c61.png","hbeyn","piedra.083177db.png","cnU0O","tijera.a063bb16.png"]'));const n={data:{currentGame:{myPlay:"",computerPlay:"",result:""},history:{myHistoryPlay:0,computerHistoryPlay:0}},listeners:[],getState(){return this.data},setState(e){this.data=e||this.data,localStorage.setItem("saved-state",JSON.stringify(e))},setMoves(e,t){let a=this.getState();n.setState({...a,currentGame:{...a.currentGame,myPlay:e,computerPlay:t}})},setResult(e){let t=this.getState();n.setState({...t,currentGame:{...t.currentGame,result:e}})},resultOfTheGame(e,t){"Piedra"==e&&"Tijera"==t||"Papel"==e&&"Piedra"==t||"Tijera"==e&&"Papel"==t?(n.pushToHistory(1,0),n.setResult("Ganaste")):"Piedra"==t&&"Tijera"==e||"Papel"==t&&"Piedra"==e||"Tijera"==t&&"Papel"==e?(n.pushToHistory(0,1),n.setResult("Perdiste")):e==t&&(n.pushToHistory(0,0),n.setResult("Empate"))},getHistory(){let e=localStorage.getItem("saved-state"),t=JSON.parse(e);return this.setState(t),t},pushToHistory(e,t){let a=this.getState();n.setState({...a,history:{...a.history,myHistoryPlay:a.history.myHistoryPlay+e,computerHistoryPlay:a.history.computerHistoryPlay+t}})},restartPoints(){n.setState({history:{myHistoryPlay:0,computerHistoryPlay:0}})}};var r={};r=new URL("star-1.f2d62d9f.png",import.meta.url).toString();var i={};i=new URL("star-2.f26942fe.png",import.meta.url).toString();const o="/dwf-m5-desafio-final";function l(){return location.host.includes("bautistajuan.github.io")}const c=[{path:/\/welcome/,component:function(e){let t=document.createElement("div");t.className="home-page-container",t.innerHTML=`
    <div class="container-title">
      <h1 class="title">Piedra <br>
      Papel <span>\xf3</span><br>
      Tijera</h1>
    </div>
    <div class="container-btn">
      <my-button class="change-page">Empezar</my-button>
    </div>
    <div class="container-hands">
      <my-hands></my-hands>
    </div>

  `;let a=t.querySelector(".change-page");return a?.addEventListener("click",t=>(t.preventDefault(),e.goTo("/introductions"))),t}},{path:/\/introductions/,component:function(e){let t=document.createElement("div");t.className="intro",t.innerHTML=`
    <div class="container-instructions">
      <h2 class="sub-instruction">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      <div class="play-btn">
      <my-button class="change-page">Play!</my-button>
      </div>
      <div class="hands">
        <my-hands></my-hands>
      </div>
    </div>
  `;let a=t.querySelector(".change-page");return a?.addEventListener("click",t=>{t.preventDefault(),e.goTo("/game")}),t}},{path:/\/game/,component:function(e){let t,a=!0,s=document.createElement("div");s.className="container",s.innerHTML=`
    
    <div class="container-timer">
      <my-timer></my-timer>
    </div>
    <div class="container-game">
    <my-hands class="hands"></my-hands>
    </div>
  `;let r=s.querySelector(".hands");return t=["Piedra","Papel","Tijera"][Math.floor(3*Math.random())],r?.addEventListener("handSelected",s=>{// Efecto en mano seleccionado, junto
s.detail.addClass.add("click","nextPage"),n.setMoves(s.detail.selectionPlayer,t),n.resultOfTheGame(s.detail.selectionPlayer,t),"nextPage"==s.detail.addClass[2]&&(a=!1,setTimeout(()=>{e.goTo("/result")},1e3))}),!function(){let t=3,s=setInterval(()=>{--t<1&&!0==a&&(clearInterval(s),e.goTo("/introductions"))},1e3)}(),s}},{path:/\/result/,component:function(e){let t=n.getHistory(),a=t.history,s=document.createElement("div");s.className="result-page-container",s.innerHTML=`
    <div class="container-result-end">
      <div class="img-container">
        <p class="text-result">${t.currentGame.result}</p>   
        <img class="img-result" > 
      </div>
      <div class="score">
        <div class="score-data">
          <h2 class="score-h2">Score<h2>
          <p>Tu puntaje: <span class="user-points">${a.myHistoryPlay}</span></p>
          <p>Maquina: <span class="mach-points">${a.computerHistoryPlay}</span> </p>    
          </div>
      </div>
      <div class="container_button-try-again">
        <my-button class="button-try-again">Volver a Jugar</my-button>
        <my-button class="button-restart">Reiniciar</my-button>
      </div>
    </div>
  
  `;let o=s.querySelector(".img-result"),l=document.querySelector("body");"Ganaste"==t.currentGame.result?(l.classList.add("ganaste"),o.src=new URL(r).toString()):"Perdiste"==t.currentGame.result?(o.src=new URL(i).toString(),l.classList.add("perdiste")):(l.classList.add("empate"),o.src=new URL(i).toString()),//logica para quitar color de fondo si vuelve para atras
window.addEventListener("popstate",e=>{e.state&&(l.classList.remove("ganaste"),l.classList.remove("empate"),l.classList.remove("perdiste"))});let c=s.querySelector(".button-try-again"),d=s.querySelector(".button-restart");return d?.addEventListener("click",()=>{n.restartPoints(),e.goTo("/welcome"),l.classList.remove("ganaste"),l.classList.remove("empate"),l.classList.remove("perdiste")}),c?.addEventListener("click",()=>{e.goTo("/introductions"),l.classList.remove("ganaste"),l.classList.remove("empate"),l.classList.remove("perdiste")}),s}}];customElements.define("my-timer",class extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className="container-timer";let a=document.createElement("style");t.innerHTML=`
        <div class="countdown-number"></div>
        <svg class="svg">
         <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
        </svg>
      `;let s=3;var n=t.querySelector(".countdown-number");n.textContent=s;let r=setInterval(()=>{0==--s&&clearInterval(r),n.textContent=s},1e3);a.innerHTML=`
        .container-timer{
          text-align: center;
        }      

        .countdown-number {
          position: relative;
          top: 169px;
          font-weight: 400;
          font-size: 70px;
          text-align: center;
          color: black;
        }
        .svg {
          width: 260px;
          height: 280px;
          transform: rotateY(-180deg) rotateZ(-90deg);
        }
        .svg-circle {
          stroke-dasharray: 570px;
          stroke-dashoffset: 0px;
          stroke-linecap: round;
          stroke-width: 10px;
          stroke: black ;
          fill: none;
          animation: countdown 3s linear infinite forwards;
        }
        @keyframes countdown {
        from {
         stroke-dashoffset: 0px;
        }
        to {
         stroke-dashoffset: 580px;
        }
      }`,e.appendChild(t),e.appendChild(a)}});var d={};d=new URL("papel.a18e2c61.png",import.meta.url).toString();var m={};m=new URL("piedra.083177db.png",import.meta.url).toString();var p={};p=new URL("tijera.a063bb16.png",import.meta.url).toString(),customElements.define("my-hands",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
      .piedra,
      .papel,
      .tijera {
        height: 150px; 
        margin-right: 5px;
      }
      .click{
        height: 200px;
      }
      `,this.shadow.appendChild(e)}render(){let e=document.createElement("div");e.className="hands-container",e.innerHTML=`
        <img class="piedra" id="Piedra"  alt="Piedra">
        <img class="papel" id="Papel" alt="Pepel">
        <img class="tijera" id="Tijera" alt="Tijera">

      `;let t=e.querySelectorAll("img");t.forEach(e=>{"papel"==e.className?e.src=new URL(d).toString():"piedra"==e.className?e.src=new URL(m).toString():"tijera"==e.className&&(e.src=new URL(p).toString()),e.addEventListener("click",e=>{let t=new CustomEvent("handSelected",{detail:{selectionPlayer:e.target.id,addClass:e.target.classList}});this.dispatchEvent(t)})}),this.shadow.appendChild(e)}}),customElements.define("my-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
        .button {
          color: #D8FCFC;
          text-align: center;
          font-family: 'Odibee Sans';
          font-size: 45px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 2.25px;
          width: 322px;
          height: 87px;
          flex-shrink: 0;
          border-radius: 10px;
          border: 10px solid #001997;
          background: #006CFC;
        }
      `,this.shadow.appendChild(e)}render(){this.shadow.innerHTML=`
        <button class="button" type="button">${this.textContent}</button>

      `}});const u=document.querySelector(".root");!function(e){function t(e){let t=l()?o+e:e;history.pushState({},"",t),a(t)}function a(a){console.log("el handle Route recibio una nueva ruta y es",a);let s=l()?a.replace(o,""):a;for(let a of c)if(a.path.test(s)){let s=a.component({goTo:t});e.firstChild?.remove(),e.appendChild(s)}}"/"==location.pathname||"/dwf-m5-desafio-final/"==location.pathname?t("/welcome"):a(location.pathname),window.onpopstate=function(){a(location.pathname)}}(u);//# sourceMappingURL=index.0d5711ee.js.map

//# sourceMappingURL=index.0d5711ee.js.map
