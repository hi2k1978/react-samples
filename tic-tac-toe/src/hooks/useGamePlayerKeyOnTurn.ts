import React, { useState, useCallback } from 'react';
import { GamePlayerKey } from '../types/types';
import useConstants from '../hooks/useConstants';

const useGamePlayerKeyOnTurn = (gamePlayerKey: GamePlayerKey) => {
  const [{ GAME_PLAYER_KEYS }] = useConstants();

  const [gamePlayerKeyOnTurn, setGamePlayerKeyOnTurn] =
    useState<GamePlayerKey>(gamePlayerKey);

  const toggleGamePlayerKeyOnTurn = useCallback(() => {
    const key =
      gamePlayerKeyOnTurn === GAME_PLAYER_KEYS.YOU
        ? GAME_PLAYER_KEYS.OPPONENT
        : GAME_PLAYER_KEYS.YOU;
    setGamePlayerKeyOnTurn(key);
  }, [gamePlayerKeyOnTurn]);

  const setGamePlayerKeyOnTurnRandomly = useCallback(() => {
    const values = Object.values(GAME_PLAYER_KEYS);
    const ii = Math.floor(Math.random() * values.length);
    setGamePlayerKeyOnTurn(values[ii]);
  }, []);

  return [
    gamePlayerKeyOnTurn,
    { toggleGamePlayerKeyOnTurn, setGamePlayerKeyOnTurnRandomly },
  ];
};
export default useGamePlayerKeyOnTurn;
