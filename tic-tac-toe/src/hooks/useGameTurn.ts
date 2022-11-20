import React, { useCallback, useState } from 'react';

const useGameTurn = (initialTurn: number) => {
  const [gameTurn, setGameTurn] = useState<number>(initialTurn);

  const advanceGameTurn = (nn: number) => {
    setGameTurn(gameTurn + nn);
  };

  const rewindGameTurn = (nn: number) => {
    const rewindedGameTurn = gameTurn - nn;
    if (rewindedGameTurn < 1) {
      const errorMessage = 'Game Turn is less than 1.';
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    setGameTurn(rewindedGameTurn);
  };

  return [gameTurn, { advanceGameTurn, rewindedGameTurn }];
};
export default useGameTurn;
