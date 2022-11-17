import { createContext, useContext } from 'react';
import { GAME_PLAYERS_ID } from './GamePlayers';

const defaultTicTacToeGrid = {
  occupied: false,
  player: GAME_PLAYERS_ID.NONE,
} as const;
export type TicTacToeGrid = typeof defaultTicTacToeGrid;

// const gamePlayersMap = new Map<number, string>();
// gamePlayersMap.set(GAME_PLAYERS.YOU, YOUR_NAME);
// gamePlayersMap.set(GAME_PLAYERS.OPPONENT, OPPONENT_NAME);
//

const defaultTicTacToeGrids = {
  onPlay: true,
} as const;

export type TicTacToeGrids = typeof defaultTicTacToeGrids;
export const TicTacToeGridsContext = createContext<TicTacToeGrids>({
  ...defaultTicTacToeGrids,
});

const useTicTacToeGrids = () => {
  console.log(GAME_PLAYERS_ID);
  const ticTacToeGrids = useContext<TicTacToeGrids>(TicTacToeGridsContext);

  const setHoge = () => {
    console.log('hoge');
  };
  return { setHoge };
};
export default useTicTacToeGrids;
