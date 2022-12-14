import React, { createContext, FC, ReactNode, useState } from 'react';

import useConstants from '../hooks/useConstants';
import useGameGrids from '../hooks/useGameGrids';
import { GameGrid, GamePlayerKey, GamePlayerName, GameResult } from '../types/types';

type Props = {
  children: ReactNode;
};

type ContextType = {
  gameGrids: GameGrid[][];
  initGameGrids: () => void;
  getGameGrid: (row: number, col: number) => GameGrid;
  setGameGrid: (
    row: number,
    col: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => void;
  resetGameGrid: (row: number, col: number) => void;
  checkGameEndWithWin: (gamePlayerKey: GamePlayerKey) => boolean;
  checkGameEndWithDraw: () => boolean;
};

export const GameGridsContext = createContext<ContextType>({} as ContextType);
export const GameGridsProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, GAME_GRIDS, GAME_TURN, GAME_RESULT }] = useConstants();

  const [
    gameGrids,
    {
      initGameGrids,
      getGameGrid,
      setGameGrid,
      resetGameGrid,
      checkGameEndWithWin,
      checkGameEndWithDraw,
    },
  ] = useGameGrids();

  return (
    <GameGridsContext.Provider
      value={{
        gameGrids,
        initGameGrids,
        getGameGrid,
        setGameGrid,
        resetGameGrid,
        checkGameEndWithWin,
        checkGameEndWithDraw,
      }}
    >
      {children}
    </GameGridsContext.Provider>
  );
};
