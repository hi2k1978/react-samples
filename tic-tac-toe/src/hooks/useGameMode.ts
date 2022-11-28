import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants.ts';
import { GameMode } from '../types/types';

const useGameMode = () => {
  const [{ GAME_MODE }] = useConstants();
  const [gameMode, setGameMode] = useState<GameMode>(GAME_MODE.ON_GAME);
  const initGameMode = () => {
    setGameMode(GAME_MODE.ON_GAME);
  };
  const setGameModeToGameOver = () => {
    setGameMode(GAME_MODE.GAME_OVER);
  };

  return [gameMode, { initGameMode, setGameModeToGameOver }];
};
export default useGameMode;
