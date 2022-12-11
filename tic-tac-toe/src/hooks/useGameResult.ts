import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import { GameResult } from '../types/types';

const useGameResult = () => {
  const [{ GAME_RESULT }] = useConstants();
  const [gameResult, setGameResult] = useState<GameResult>(GAME_RESULT.NONE);
  const initGameResult = () => {
    setGameResult(GAME_RESULT.NONE);
  };

  return [gameResult, { initGameResult, setGameResult }];
};
export default useGameResult;
