import React, { createContext, FC, ReactNode, useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import useGamePlayers from '../hooks/useGamePlayers';
import { GamePlayerKey, GamePlayerName } from '../types/types';

type Props = {
  children: ReactNode;
};

type ContextType = {
  // Name of Game Player
  gamePlayers: Map<GamePlayerKey, GamePlayerName>;
  getGamePlayerName: () => void;
  setGamePlayerNames: (you: GamePlayerName, opponent: GamePlayerName) => void;
  getYourName: () => void;
  getOpponentName: () => void;
  getGamePlayerKeyRandomly: () => void;
  initGamePlayerNames: () => void;
};

export const GamePlayersContext = createContext<ContextType>({} as ContextType);
export const GamePlayersProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, DEFAULT_GAME_PLAYER_NAMES }] = useConstants();
  const [gamePlayers, { getGamePlayerName, setGamePlayerNames }] = useGamePlayers(
    DEFAULT_GAME_PLAYER_NAMES.YOU,
    DEFAULT_GAME_PLAYER_NAMES.OPPONENT,
  );

  const getYourName = useCallback((): GamePlayerName => {
    return getGamePlayerName(GAME_PLAYER_KEYS.YOU);
  }, [gamePlayers]);

  const getOpponentName = useCallback((): GamePlayerName => {
    return getGamePlayerName(GAME_PLAYER_KEYS.OPPONENT);
  }, [gamePlayers]);

  const getGamePlayerKeyRandomly = (): GamePlayerKey => {
    const values: GamePlayerKey[] = Object.values(GAME_PLAYER_KEYS);
    const ii: number = Math.floor(Math.random() * values.length);
    return values[ii];
  };

  const initGamePlayerNames = useCallback(() => {
    setGamePlayerNames(DEFAULT_GAME_PLAYER_NAMES.YOU, DEFAULT_GAME_PLAYER_NAMES.OPPONENT);
  }, [gamePlayers]);

  return (
    <GamePlayersContext.Provider
      value={{
        gamePlayers,
        getGamePlayerName,
        setGamePlayerNames,
        getYourName,
        getOpponentName,
        getGamePlayerKeyRandomly,
        initGamePlayerNames,
      }}
    >
      {children}
    </GamePlayersContext.Provider>
  );
};
