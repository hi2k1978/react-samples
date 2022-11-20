import React, { useCallback, useState } from 'react';

const useGameMode = () => {
  const [onGame, setOnGame] = useState<boolean>(true);
  const [gameResult, setGameResult] = useState<GameResult>('hoge');
  const toggleOnGame = () => {
    setOnGame(!onGame);
  };

  return [onGame, gameResult, { toggleOnGame, setGameResult }];
};
export default useGameMode;
