export type Jugada = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
      currentResult: "",
    },
    historyScore: {
      player: 0,
      computer: 0,
    },
  },
  listeners: [] as (() => void)[],
  subscribe(callback: () => void) {
    this.listeners.push(callback);
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const functions of this.listeners) {
      functions();
    }
    console.log("cambio el state", newState);
  },
  setMove(myMove: Jugada) {
    const currentGame = this.getState();
    const moves: Jugada[] = ["piedra", "papel", "tijera"];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    // this.setState({
    //   ...this.getState(),
    //   currentGame: {
    //     myPlay: myMove,
    //     computerPlay: computerMove,
    //   },
    // });
  },
  theWinnerIs(currentState) {},
};

export { state };
