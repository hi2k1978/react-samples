import React, { useState, useCallback } from 'react';
import { GamePlayerKey, GamePlayerName } from '../types/types';
import useConstants from '../hooks/useConstants';

const useGamePlayers = (yourName: GamePlayerName, opponentName: GamePlayerName) => {
  const [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES }] = useConstants();
  const defaultGamePlayerMap = new Map<GamePlayerKey, GamePlayerName>();
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.YOU, yourName);
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.OPPONENT, opponentName);

  const [gamePlayers, setGamePlayers] =
    useState<Map<GamePlayerKey, GamePlayerName>>(defaultGamePlayerMap);

  const getYourName = useCallback((): GamePlayerName => {
    return gamePlayers.get(GAME_PLAYER_KEYS.YOU);
  }, [gamePlayers]);

  const getOpponentName = useCallback((): GamePlayerName => {
    return gamePlayers.get(GAME_PLAYER_KEYS.OPPONENT);
  }, [gamePlayers]);

  const setGamePlayerNames = useCallback(
    (you: GamePlayerName, opponent: GamePlayerName) => {
      gamePlayers.set(GAME_PLAYER_KEYS.YOU, you);
      gamePlayers.set(GAME_PLAYER_KEYS.OPPONENT, opponent);
    },
    [gamePlayers],
  );

  return [gamePlayers, { getYourName, getOpponentName, setGamePlayerNames }];
};
export default useGamePlayers;
