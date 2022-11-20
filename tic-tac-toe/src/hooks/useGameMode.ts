import React, { useCallback, useState } from 'react';
import { GameResult } from '../types/types';
import useConstants from '../hooks/useConstants.ts';

const useGameMode = () => {
  const [{ GAME_RESULT }] = useConstants();
  const [onGame, setOnGame] = useState<boolean>(true);
  const [gameResult, setGameResult] = useState<GameResult>(GAME_RESULT.ON_GAME);
  const initGameProgress = () => {
    setOnGame(true);
    setGameResult(GAME_RESULT.ON_GAME);
  };
  const toggleOnGame = () => {
    setOnGame(!onGame);
  };

  return [onGame, gameResult, { initGameProgress, toggleOnGame, setGameResult }];
};
export default useGameMode;
