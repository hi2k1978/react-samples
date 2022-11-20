import React, { createContext, FC, ReactNode, useState } from 'react';
import { GamePlayerKey, GamePlayerName, GameGrid, GameResult } from '../types/types';

import useConstants from '../hooks/useConstants';
import useGameGrids from '../hooks/useGameGrids';
import useGameMode from '../hooks/useGameMode';
import useGameTurn from '../hooks/useGameTurn';

type Props = {
  children: ReactNode;
};

type ContextType = {
  gameGrids: GameGrid[][];
  gameGrids: () => void;
  initGameGrids: () => void;
  getGameGrid: (col: number, row: number) => void;
  setGameGrid: (
    col: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => void;
  resetGameGrid: (col: number, row: number) => void;
  checkGameEnd: (gamePlayerKey: GamePlayerKey) => void;
  checkAllOccupied: () => void;
  onGame: boolean;
  gameResult: GameResult;
  initGameProgress: () => void;
  toggleOnGame: () => void;
  setGameResult: (gameResult: GameResult) => void;
  gameTurn: number;
  initGameTurn: () => void;
  advanceGameTurn: (nn: number) => void;
  rewindedGameTurn: (nn: number) => void;
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
      checkGameEnd,
      checkAllOccupied,
    },
  ] = useGameGrids();
  const [onGame, gameResult, { initGameProgress, toggleOnGame, setGameResult }] =
    useGameMode();

  const [gameTurn, { initGameTurn, advanceGameTurn, rewindedGameTurn }] = useGameTurn();

  return (
    <GameGridsContext.Provider
      value={{
        gameGrids,
        initGameGrids,
        getGameGrid,
        setGameGrid,
        resetGameGrid,
        checkGameEnd,
        checkAllOccupied,
        onGame,
        gameResult,
        initGameProgress,
        toggleOnGame,
        setGameResult,
        gameTurn,
        initGameTurn,
        advanceGameTurn,
        rewindedGameTurn,
      }}
    >
      {children}
    </GameGridsContext.Provider>
  );
};
