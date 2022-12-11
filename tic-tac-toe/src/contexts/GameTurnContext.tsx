import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import useConstants from '../hooks/useConstants';
import useGamePlayerKeyOnTurn from '../hooks/useGamePlayerKeyOnTurn';
import useGameTurn from '../hooks/useGameTurn';
import { GamePlayerKey } from '../types/types';

type Props = {
  children: ReactNode;
};

type ContextType = {
  // Game Turn
  gameTurn: number;
  gamePlayerKeyOnTurn: GamePlayerKey;
  initGameTurn: (firstGamePlayerKey: GamePlayerKey) => void;
  advanceGameTurn: () => void;
  rewindGameTurn: () => void;
};

export const GameTurnContext = createContext<ContextType>({} as ContextType);
export const GameTurnProvider: FC<Props> = ({ children }) => {
  const [{ GAME_TURN }] = useConstants();
  const [gameTurn, { setFirstGameTurn, increaseGameTurn, decreaseGameTurn }] =
    useGameTurn();
  const [gamePlayerKeyOnTurn, { initGamePlayerKeyOnTurn, toggleGamePlayerKeyOnTurn }] =
    useGamePlayerKeyOnTurn();

  const initGameTurn = (firstGamePlayerKey: GamePlayerKey) => {
    setFirstGameTurn();
    initGamePlayerKeyOnTurn(firstGamePlayerKey);
  };
  const advanceGameTurn = () => {
    increaseGameTurn();
    toggleGamePlayerKeyOnTurn();
  };
  const rewindGameTurn = () => {
    decreaseGameTurn();
    toggleGamePlayerKeyOnTurn();
  };

  return (
    <GameTurnContext.Provider
      value={{
        gameTurn,
        gamePlayerKeyOnTurn,
        initGameTurn,
        advanceGameTurn,
        rewindGameTurn,
      }}
    >
      {children}
    </GameTurnContext.Provider>
  );
};
