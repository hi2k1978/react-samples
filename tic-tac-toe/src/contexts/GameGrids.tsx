import React, { createContext, FC, ReactNode, useState } from 'react';
import { GameGrid, GamePlayerKey, GamePlayerName } from '../types/types';

import useConstants from '../hooks/useConstants';
import useGameGrids from '../hooks/useGameGrids';
import useGameMode from '../hooks/useGameMode';
import useGameTurn from '../hooks/useGameTurn';

type Props = {
  children: ReactNode;
};

type ContextType = {
  initGameGrids: () => void;
  setGameGrid: (
    column: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => void;
  resetGameGrid: (column: number, row: number) => void;
  checkOnGame: () => void;
  toggleOnGame: () => void;
  getGameTurn: () => void;
  setGameTurnNext: () => void;
  setGameTurnPrev: (numberOfTurn: number) => void;
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

  const [onGame, gameResult, { toggleOnGame, setGameResult }] = useGameMode();

  const [gameTurn, { advanceGameTurn, rewindedGameTurn }] = useGameTurn(
    GAME_TURN.FIRST_TURN,
  );

  const checkOnGame = () => {
    return onGame;
  };
  const toggleOnGame = () => {
    setOnGame(!onGame);
  };
  const getGameTurn = () => {
    return gameTurn;
  };
  const setGameTurnNext = () => {
    setGameTurn(gameTurn + 1);
  };

  const setGameTurnPrev = (numberOfTurn: number) => {
    const nextGameTurn = gameTurn - numberOfTurn;
    if (nextGameTurn < 1) {
      const errorMessage = 'Game Turn is less than 1.';
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    setGameTurn(nextGameTurn);
  };

  return (
    <GameGrids.Provider
      value={{
        initGameGrids,
        setGameGrid,
        resetGameGrid,
        checkOnGame,
        toggleOnGame,
        getGameTurn,
        setGameTurnNext,
      }}
    >
      {children}
    </GameGrids.Provider>
  );
};
