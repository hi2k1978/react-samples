import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import { GamePlayerKey, GamePlayerName } from '../types/types';

const useGamePlayers = (yourName: GamePlayerName, opponentName: GamePlayerName) => {
  const [{ GAME_PLAYER_KEYS }] = useConstants();
  const defaultGamePlayerMap = new Map<GamePlayerKey, GamePlayerName>();
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.YOU, yourName);
  defaultGamePlayerMap.set(GAME_PLAYER_KEYS.OPPONENT, opponentName);

  const [gamePlayers, setGamePlayers] =
    useState<Map<GamePlayerKey, GamePlayerName>>(defaultGamePlayerMap);

  const getGamePlayerName = useCallback(
    (key: GamePlayerKey): GamePlayerName => {
      return gamePlayers.get(key) as GamePlayerName;
    },
    [gamePlayers],
  );

  const setGamePlayerNames = useCallback(
    (you: GamePlayerName, opponent: GamePlayerName) => {
      gamePlayers.set(GAME_PLAYER_KEYS.YOU, you);
      gamePlayers.set(GAME_PLAYER_KEYS.OPPONENT, opponent);
    },
    [gamePlayers],
  );

  return [
    gamePlayers,
    {
      getGamePlayerName,
      setGamePlayerNames,
    },
  ];
};
export default useGamePlayers;
