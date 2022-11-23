import React, { createContext, FC, ReactNode, useState } from 'react';
import { GamePlayerKey, GamePlayerName, GameGrid, GameResult } from '../types/types';

import useConstants from '../hooks/useConstants';
import useGameGrids from '../hooks/useGameGrids';

type Props = {
  children: ReactNode;
};

type ContextType = {
  gameGrids: GameGrid[][];
  initGameGrids: () => void;
  getGameGrid: (col: number, row: number) => void;
  setGameGrid: (
    col: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => void;
  resetGameGrid: (col: number, row: number) => void;
  checkWin: (gamePlayerKey: GamePlayerKey) => void;
  checkAllOccupied: () => void;
};

export const GameGridsContext = createContext<ContextType>({} as ContextType);
export const GameGridsProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES, GAME_GRIDS, GAME_TURN, GAME_RESULT }] =
    useConstants();

  const [
    gameGrids,
    {
      initGameGrids,
      getGameGrid,
      setGameGrid,
      resetGameGrid,
      checkWin,
      checkAllOccupied,
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
        checkWin,
        checkAllOccupied,
      }}
    >
      {children}
    </GameGridsContext.Provider>
  );
};
