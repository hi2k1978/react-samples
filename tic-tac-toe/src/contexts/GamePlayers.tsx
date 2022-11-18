import React, { createContext, FC, ReactNode, useState, useCallback } from 'react';
import { GamePlayerKey, GamePlayerName } from '../types/types';

import useConstants from '../hooks/useConstants';
import useGamePlayers from '../hooks/useGamePlayers';
import useGamePlayerKeyOnTurn from '../hooks/useGamePlayerKeyOnTurn';

type Props = {
  children: ReactNode;
};

type ContextType = {
  // Name of Game Player
  getYourName: () => void;
  getOpponentName: () => void;
  getGamePlayerNameOnTurn: () => void;
  setGamePlayerNames: (you: GamePlayerName, opponent: GamePlayerName) => void;
  initGamePlayerNames: () => void;
  // Game Player On Turn
  getGamePlayerKeyOnTurn: () => void;
  toggleGamePlayerKeyOnTurn: () => void;
  setGamePlayerKeyOnTurnRandomly: () => void;
};

export const GamePlayersContext = createContext<ContextType>({} as ContextType);
export const GamePlayersProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES }] = useConstants();
  const [
    gamePlayerKeyOnTurn,
    { getGamePlayerKeyOnTurn, toggleGamePlayerKeyOnTurn, setGamePlayerKeyOnTurnRandomly },
  ] = useGamePlayerKeyOnTurn(GAME_PLAYER_KEYS.YOU);

  const [gamePlayers, { getYourName, getOpponentName, setGamePlayerNames }] =
    useGamePlayers(GAME_PLAYER_NAMES.YOU, GAME_PLAYER_NAMES.OPPONENT);

  const initGamePlayerNames = useCallback(() => {
    setGamePlayerNames(GAME_PLAYER_NAMES.YOU, GAME_PLAYER_NAMES.OPPONENT);
  });

  const getGamePlayerNameOnTurn = useCallback((): GamePlayerName => {
    return gamePlayers.get(gamePlayerKeyOnTurn);
  });

  return (
    <GamePlayersContext.Provider
      value={{
        getYourName,
        getOpponentName,
        getGamePlayerNameOnTurn,
        setGamePlayerNames,
        initGamePlayerNames,
        getGamePlayerKeyOnTurn,
        toggleGamePlayerKeyOnTurn,
        setGamePlayerKeyOnTurnRandomly,
      }}
    >
      {children}
    </GamePlayersContext.Provider>
  );
};
