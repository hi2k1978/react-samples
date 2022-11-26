import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from 'react';

import useConstants from '../hooks/useConstants.ts';
import useGameTurn from '../hooks/useGameTurn.ts';
import useGamePlayerKeyOnTurn from '../hooks/useGamePlayerKeyOnTurn.ts';

type Props = {
  children: ReactNode;
};

type ContextType = {
  // Game Turn
  gameTurn: number;
  gamePlayerKeyOnTurn: GamePlayerKey;
  initGameTurn: (firstGamePlayerKey) => void;
  advanceGameTurn: () => void;
  rewindedGameTurn: () => void;
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
