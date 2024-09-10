//TYPES
type Jugada = "piedra" | "papel" | "tijeras";
type User = "myPlay" | "computerPlay";
type Score = "myScore" | "computerScore";
type Game = {
  myPlay: Jugada;
  computerPlay: Jugada;
};

const state = {
  data: {
    // SE GUARDA LA JUGADA EN EL MOMENTO
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },

    // SE GUARDAN OBJETOS DENTRO DEL ARRAY CON LAS JUGADAS HECHAS
    history: [],

    // SE GUARDAN LOS RESULTADOS FINALES
    results: { myScore: 0, computerScore: 0 },
  },

  listeners: [],

  // 1 - SETEA/DEFINE LA JUGADA REALIZADA
  setMove(move: Jugada, user: User) {
    const currentState = this.getState();
    currentState.currentGame[user] = move;
  },

  // 2 - DEFINE QUIEN GANO LA PARTIDA EN BASE A SET MOVE
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    //JUGADAS DE VICTORIA
    const ganeConTijeras = myPlay == "tijeras" && computerPlay == "papel";
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijeras";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    if (ganeConPapel || ganeConTijeras || ganeConPiedra) {
      state.setPoints("myScore");
      return "victoria";
    }

    //JUGADAS DE DERROTA
    const perdiConTijeras = myPlay == "tijeras" && computerPlay == "piedra";
    const perdiConPiedra = myPlay == "piedra" && computerPlay == "papel";
    const perdiConPapel = myPlay == "papel" && computerPlay == "tijeras";
    if (perdiConPapel || perdiConTijeras || perdiConPiedra) {
      state.setPoints("computerScore");
      return "derrota";
    }

    //EMPATES
    const empateConTijeras = myPlay == "tijeras" && computerPlay == "tijeras";
    const empateConPiedras = myPlay == "piedra" && computerPlay == "piedra";
    const empateConPapel = myPlay == "papel" && computerPlay == "papel";
    if (empateConTijeras || empateConPiedras || empateConPapel) {
      return "empate";
    }
  },

  // 3 - AGREGA UN PUNTO, SE PASA QUIEN GANO COMO PARAMETRO
  setPoints(user: Score) {
    const CurrentState = state.getState();
    const score = CurrentState.results[user] + 1;
    CurrentState.results[user] = score;
  },

  // 4- AGREGA LA PARTIDA AL HISTORIAL
  pushNewGameHistory(game: Game) {
    const history = state.getState().history;
    history.push(game);
  },

  //DEFINE LA NUEVA JUGADA EN BASE A LOS ANTERIORES METODOS
  //PUEDE SER UTILIZADO O NO
  definePlay(myPlay: Jugada, computerPlay: Jugada) {
    const currentGame = state.getState().currentGame;

    // 1 - SETEA LOS MOVIMIENTOS
    state.setMove(myPlay, "myPlay");
    state.setMove(computerPlay, "computerPlay");

    //CAPTURA LOS MOVIMIENTOS
    const myMove = currentGame.myPlay;
    const computerMove = currentGame.computerPlay;

    // 2 y 3 - DEFINE QUIEN GANA
    const resulado = state.whoWins(myMove, computerMove);

    // 4 - CREA UN REGISTRO DEL JUEGO Y LO AGREGA AL HISTORIAL
    const newRecord = {
      myPlay: myMove,
      computerPlay: computerMove,
    };
    state.pushNewGameHistory(newRecord);

    //CREA EL NUEVO ESTADO
    const newState = state.getState();
    state.setState(newState);
    return resulado;
  },

  //GETTER
  getState() {
    return this.data;
  },

  //SETTER
  setState(newState) {
    this.data = newState;
    console.log("El nuevo estado es:", newState);
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("game", JSON.stringify(newState));
  },

  //SUBSCRIBER
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  //SI NO HAY REGISTRO DE "GAME", SE ASEGURA DE INICIAR EL STATE VACIO
  restoreState() {
    const firstState = state.getState();
    if (!localStorage.game) {
      state.setState(firstState);
    } else {
      const lastState = localStorage.getItem("game")!;
      const lastStateParsed = JSON.parse(lastState);
      state.data = lastStateParsed;
    }
  },
};

export { state };
