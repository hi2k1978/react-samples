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
  gamePlayers: Map<GamePlayerKey, GamePlayerName>;
  getYourName: () => void;
  getOpponentName: () => void;
  getGamePlayerNameOnTurn: () => void;
  setGamePlayerNames: (you: GamePlayerName, opponent: GamePlayerName) => void;
  initGamePlayerNames: () => void;
  // Game Player On Turn
  gamePlayerKeyOnTurn: GamePlayerKey;
  toggleGamePlayerKeyOnTurn: () => void;
  setGamePlayerKeyOnTurnRandomly: () => void;
};

export const GamePlayersContext = createContext<ContextType>({} as ContextType);
export const GamePlayersProvider: FC<Props> = ({ children }) => {
  const [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES }] = useConstants();
  const [
    gamePlayerKeyOnTurn,
    { toggleGamePlayerKeyOnTurn, setGamePlayerKeyOnTurnRandomly },
  ] = useGamePlayerKeyOnTurn(GAME_PLAYER_KEYS.YOU);

  const [gamePlayers, { getYourName, getOpponentName, setGamePlayerNames }] =
    useGamePlayers(GAME_PLAYER_NAMES.YOU, GAME_PLAYER_NAMES.OPPONENT);

  const initGamePlayerNames = useCallback(() => {
    setGamePlayerNames(GAME_PLAYER_NAMES.YOU, GAME_PLAYER_NAMES.OPPONENT);
  }, [gamePlayers]);

  const getGamePlayerNameOnTurn = useCallback((): GamePlayerName => {
    return gamePlayers.get(gamePlayerKeyOnTurn);
  }, [gamePlayers, gamePlayerKeyOnTurn]);

  return (
    <GamePlayersContext.Provider
      value={{
        gamePlayers,
        getYourName,
        getOpponentName,
        getGamePlayerNameOnTurn,
        setGamePlayerNames,
        initGamePlayerNames,
        gamePlayerKeyOnTurn,
        toggleGamePlayerKeyOnTurn,
        setGamePlayerKeyOnTurnRandomly,
      }}
    >
      {children}
    </GamePlayersContext.Provider>
  );
};
