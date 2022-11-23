import React, { useCallback, useState } from 'react';
import { GameResult } from '../types/types';
import useConstants from '../hooks/useConstants.ts';

const useGameResult = () => {
  const [{ GAME_RESULT }] = useConstants();
  const [gameResult, setGameResult] = useState<GameResult>(GAME_RESULT.NONE);
  const initGameResult = () => {
    setGameResult(GAME_RESULT.NONE);
  };

  return [gameResult, { initGameResult, setGameResult }];
};
export default useGameResult;
