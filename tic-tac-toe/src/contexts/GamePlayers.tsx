import React, { createContext, FC, ReactNode, useState } from 'react';
import { useConstants } from '../lib/useConstants';
import { GamePlayerKey, GamePlayerName } from '../types/types';

const { GAME_PLAYER_KEYS, GAME_PLAYER_NAMES } = useConstants();

type Props = {
  children: ReactNode;
};

type ContextType = {
  // Name of Game Player
  initGamePlayerNames: () => void;
  getYourName: () => void;
  getOpponentName: () => void;
  getGamePlayerNameOnTurn: () => void;
  setGamePlayerNames: (you: GamePlayerName, opponent: GamePlayerName) => void;
  // Game Player On Turn
  getGamePlayerKeyOnTurn: () => void;
  toggleGamePlayerKeyOnTurn: () => void;
  setGamePlayerKeyOnTurnRandomly: () => void;
};

export const GamePlayersContext = createContext<ContextType>({} as ContextType);
export const GamePlayersProvider: FC<Props> = ({ children }) => {
  const defaultGamePlayerMap = new Map<GamePlayerKey, GamePlayerName>();
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.YOU, GAME_PLAYER_NAMES.YOU);
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.OPPONENT, GAME_PLAYER_NAMES.OPPONENT);

  const [gamePlayers, setGamePlayers] =
    useState<Map<GamePlayerKey, GamePlayerName>>(defaultGamePlayerMap);

  const [gamePlayerKeyOnTurn, setGamePlayerKeyOnTurn] = useState<GamePlayerKey>(
    GAME_PLAYER_KEYS.YOU,
  );

  const initGamePlayerNames = () => {
    gamePlayers.set(GAME_PLAYER_KEYS.YOU, GAME_PLAYER_NAMES.YOU);
    gamePlayers.set(GAME_PLAYER_KEYS.OPPONENT, GAME_PLAYER_NAMES.OPPONENT);
  };

  const getYourName = (): GamePlayerName => {
    return gamePlayers.get(GAME_PLAYER_KEYS.YOU);
  };

  const getOpponentName = (): GamePlayerName => {
    return gamePlayers.get(GAME_PLAYER_KEYS.OPPONENT);
  };

  const getGamePlayerNameOnTurn = (): GamePlayerName => {
    return gamePlayers.get(gamePlayerKeyOnTurn);
  };
  const setGamePlayerNames = (you: GamePlayerName, opponent: GamePlayerName) => {
    gamePlayers.set(GAME_PLAYER_KEYS.YOU, you);
    gamePlayers.set(GAME_PLAYER_KEYS.OPPONENT, opponent);
  };

  const getGamePlayerKeyOnTurn = () => {
    return gamePlayerKeyOnTurn;
  };

  const toggleGamePlayerKeyOnTurn = () => {
    const key =
      gamePlayerKeyOnTurn === GAME_PLAYER_KEYS.YOU
        ? GAME_PLAYER_KEYS.OPPONENT
        : GAME_PLAYER_KEYS.YOU;
    setGamePlayerKeyOnTurn(key);
  };

  const setGamePlayerKeyOnTurnRandomly = () => {
    const values = Object.values(GAME_PLAYER_KEYS);
    const ii = Math.floor(Math.random() * values.length);
    setGamePlayerKeyOnTurn(values[ii]);
  };

  return (
    <GamePlayersContext.Provider
      value={{
        initGamePlayerNames,
        getYourName,
        getOpponentName,
        getGamePlayerNameOnTurn,
        setGamePlayerNames,
        getGamePlayerKeyOnTurn,
        toggleGamePlayerKeyOnTurn,
        setGamePlayerKeyOnTurnRandomly,
      }}
    >
      {children}
    </GamePlayersContext.Provider>
  );
};
