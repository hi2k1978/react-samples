import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import { GamePlayerKey } from '../types/types';

const useGamePlayerKeyOnTurn = () => {
  const [{ GAME_PLAYER_KEYS }] = useConstants();

  const [gamePlayerKeyOnTurn, setGamePlayerKeyOnTurn] = useState<GamePlayerKey>(
    GAME_PLAYER_KEYS.YOU,
  );

  const initGamePlayerKeyOnTurn = (firstGamePlayerKey: GamePlayerKey) => {
    setGamePlayerKeyOnTurn(firstGamePlayerKey);
  };

  const toggleGamePlayerKeyOnTurn = useCallback(() => {
    const key =
      gamePlayerKeyOnTurn === GAME_PLAYER_KEYS.YOU
        ? GAME_PLAYER_KEYS.OPPONENT
        : GAME_PLAYER_KEYS.YOU;
    setGamePlayerKeyOnTurn(key);
  }, [gamePlayerKeyOnTurn]);

  return [gamePlayerKeyOnTurn, { initGamePlayerKeyOnTurn, toggleGamePlayerKeyOnTurn }];
};
export default useGamePlayerKeyOnTurn;
