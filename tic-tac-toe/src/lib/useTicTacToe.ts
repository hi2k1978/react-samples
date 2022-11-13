export const MIN_COL = 0;
export const MAX_COL = 3;
export const MIN_ROW = 0;
export const MAX_ROW = 3;

export type Grid = {
  isOccupied: boolean;
  player?: Player;
};

const Player = {
  you: 0,
  opponent: 1,
} as const;
export type Player = typeof Player[keyof typeof Player];

const GameMode = {
  onMatch: 0,
  finished: 1,
} as const;
export type GameMode = typeof GameMode[keyof typeof GameMode];

export const useTicTacToe = () => {
  class Players {
    constructor() {
      this.player = this.randomSelectFirstPlayer();
      switch (this.player) {
        case Player.you:
          console.log(`first turn: you(${this.player})`);
          break;
        case Player.opponent:
          console.log(`first turn: opponent(${this.player})`);
          break;
      }
    }
    get playerOnTurn() {
      return this.player;
    }
    randomSelectFirstPlayer = (): Player => {
      const player = [Player.you, Player.opponent];
      return player[Math.floor(Math.random() * player.length)];
    };
    toggleTurn = () => {
      switch (this.player) {
        case Player.you:
          this.player = Player.opponent;
          break;
        case Player.opponent:
          this.player = Player.you;
          break;
      }
    };
  }
  class TicTacToe {
    constructor() {
      const defaultGrid = { isOccupied: false };
      this.gridArray = [
        [defaultGrid, defaultGrid, defaultGrid],
        [defaultGrid, defaultGrid, defaultGrid],
        [defaultGrid, defaultGrid, defaultGrid],
      ] as Array<Grid>[MAX_COL][MIN_COL];
    }
    setGrid = (col: number, row: number, player: Player) => {
      this.gridArray[col][row] = {
        isOccupied: true,
        player: player,
      };
    };
    isOccupied = (col: number, row: number) => {
      return this.gridArray[col][row].isOccupied;
    };
  }
  return { Players, TicTacToe };
};
