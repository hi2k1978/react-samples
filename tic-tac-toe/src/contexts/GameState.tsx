import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { GamePlayerKey, GameMode, GameResult } from '../types/types';

import useConstants from '../hooks/useConstants.ts';
import useGameMode from '../hooks/useGameMode.ts';
import useGameResult from '../hooks/useGameResult.ts';

type Props = {
  children: ReactNode;
};

type ContextType = {
  gameMode: GameMode;
  gameResult: GameResult;
  initGameState: () => void;
  setGameEndWithWin: (gamePlayerKey: GamePlayerKey) => void;
  setGameEndWithDraw: () => void;
};

export const GameStateContext = createContext<ContextType>({} as ContextType);
export const GameStateProvider: FC<Props> = ({ children }) => {
  const [{ GAME_TURN }] = useConstants();

  const [gameMode, { initGameMode, setGameModeToGameOver }] = useGameMode();
  const [gameResult, { initGameResult, setGameResult }] = useGameResult();

  const initGameState = () => {
    initGameMode();
    initGameResult();
  };

  const setGameEnd = (gameResult: GameResult) => {
    setGameModeToGameOver();
    setGameResult(gameResult);
  };

  const setGameEndWithWin = (gamePlayerKey: GamePlayerKey) => {
    switch (gamePlayerKey) {
      case GAME_PLAYER_KEYS.YOU:
        setGameEnd(GAME_RESULT.YOU_WIN);
        break;
      case GAME_PLAYER_KEYS.OPPONENT:
        setGameEnd(GAME_RESULT.OPPONENT_WIN);
        break;
    }
  };
  const setGameEndWithDraw = () => {
    setGameEnd(GAME_RESULT.DRAW);
  };

  return (
    <GameStateContext.Provider
      value={{
        gameMode,
        gameResult,
        initGameState,
        setGameEndWithWin,
        setGameEndWithDraw,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
