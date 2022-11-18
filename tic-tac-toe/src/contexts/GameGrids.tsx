import React, { createContext, FC, ReactNode, useState } from 'react';
import { GamePlayerKey, GamePlayerName } from '../types/types';

import useConstants from '../hooks/useConstants';

export type GameGrid = {
  occupied: boolean;
  gamePlayerKey: GamePlayerKey | undefined;
  oddTurn: boolean;
};

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
  unsetGameGrid: (column: number, row: number) => void;
  checkOnGame: () => void;
  toggleOnGame: () => void;
  getGameTurn: () => void;
  setGameTurnNext: () => void;
  setGameTurnPrev: (numberOfTurn: number) => void;
};

export const GameGridsContext = createContext<ContextType>({} as ContextType);
export const GameGridsProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES, GAME_GRIDS, GAME_TURN }] = useConstants();
  const [gameGrids, setGameGrids] = useState('hoge');
  const [onGame, setOnGame] = useState<boolean>(true);
  const [gameTurn, setGameTurn] = useState<number>(GAME_TURN.FIRST_TURN);

  const initGameGrids = () => {
    console.log('hoge');
  };

  const setGameGrid = (column: number, row: number, gamePlayerKey: GamePlayerKey) => {
    const oddTurn = gameTurn % 2 ? false : true;
    gameGrids[column][low] = {
      occupied: true,
      gamePlayerKey: gamePlayerKey,
      oddTurn: oddTurn,
    };
  };

  const unsetGameGrid = (column: number, row: number) => {
    gameGrids[column][low] = {
      occupied: false,
      gamePlayerKey: undefined,
      oddTurn: false,
    };
  };

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
        unsetGameGrid,
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
