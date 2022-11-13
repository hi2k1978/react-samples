import { createContext, useContext } from 'react';

const defaultTicTacToe = {
  onPlay: true,
};

export type TicTacToe = typeof defaultTicTacToe;
export const TicTacToeContext = createContext({ ...defaultTicTacToe });

const useTicTacToe = () => {
  const ticTacToe = useContext<TicTacToe>(TicTacToeContext);
  setHoge = () => {
    console.log('hoge');
  };
  return { setHoge };
};
export default useTicTacToe;
