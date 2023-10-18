export type Move = "Piedra" | "Papel" | "Tijera";
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

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState || this.data;
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },
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
  resultOfTheGame(myPlay: Move, computerPlay: Move) {
    let iWin: Boolean = false;
    let computerWin: Boolean = false;
    let equal: Boolean = false;
    if (
      (myPlay == "Piedra" && computerPlay == "Tijera") ||
      (myPlay == "Papel" && computerPlay == "Piedra") ||
      (myPlay == "Tijera" && computerPlay == "Papel")
    ) {
      iWin == true;
      state.pushToHistory(1, 0);
      state.setResult("Ganaste");
    } else if (
      (computerPlay == "Piedra" && myPlay == "Tijera") ||
      (computerPlay == "Papel" && myPlay == "Piedra") ||
      (computerPlay == "Tijera" && myPlay == "Papel")
    ) {
      computerWin == true;
      state.pushToHistory(0, 1);
      state.setResult("Perdiste");
    } else if (myPlay == computerPlay) {
      equal == true;
      state.pushToHistory(0, 0);
      state.setResult("Empate");
    }
  },
  getHistory() {
    const localData = localStorage.getItem("saved-state") as any;
    this.setState(JSON.parse(localData));
  },
  pushToHistory(myPoint: number, computerPoint: number) {
    const currentState = this.getState();
    state.setState({
      ...currentState,
      history: {
        ...currentState.history,
        myHistoryPlay: currentState.history.myHistoryPlay + myPoint,
        computerHistoryPlay:
          currentState.history.computerHistoryPlay + computerPoint,
      },
    });
  },
  restartPoints() {
    state.setState({
      history: {
        myHistoryPlay: 0,
        computerHistoryPlay: 0,
      },
    });
  },
};

export { state };
