export type Move = "piedra" | "papel" | "tijera";
type Game = {
  myPlay: Move;
  computerPlay: Move;
};

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
      result: "",
    },
    history: {
      myHistoryPlay: 0,
      computerHistoryPlay: 0,
    },
  },
  listeners: [],
  setMoves(myMove: Move, computerMove: Move) {
    const lastState = this.getState();
    state.setState({
      ...lastState,
      currentGame: {
        ...lastState.currentGame,
        myPlay: myMove,
        computerPlay: computerMove,
      },
    });
  },
  setResult(result: string) {
    const lastState = this.getState();
    state.setState({
      ...lastState,
      currentGame: {
        ...lastState.currentGame,
        result: result,
      },
    });
  },

  whoWins(myPlay: Move, computerPlay: Move) {
    let iWin: Boolean = false;
    let computerWin: Boolean = false;
    let equal: Boolean = false;
    if (
      (myPlay == "piedra" && computerPlay == "tijera") ||
      (myPlay == "papel" && computerPlay == "piedra") ||
      (myPlay == "tijera" && computerPlay == "papel")
    ) {
      iWin == true;
      // this.pushToHistory(1, 0);
      this.setResult("Ganaste");
    } else if (
      (computerPlay == "piedra" && myPlay == "tijera") ||
      (computerPlay == "papel" && myPlay == "piedra") ||
      (computerPlay == "tijera" && myPlay == "papel")
    ) {
      computerWin == true;
      this.pushToHistory(0, 1);
      this.setResult("Perdiste");
    } else if (myPlay == computerPlay) {
      equal == true;
      // this.pushToHistory(0, 0);
      this.setResult("Empate");
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState || this.data;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("soy el state, he cambiado", newState);
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
