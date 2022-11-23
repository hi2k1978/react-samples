import React, { useCallback, useState } from 'react';
import useConstants from '../hooks/useConstants.ts';

const useGameTurn = () => {
  const [{ GAME_TURN }] = useConstants();
  const [gameTurn, setGameTurn] = useState<number>(null);

  const setFirstGameTurn = () => {
    setGameTurn(GAME_TURN.FIRST_TURN);
  };

  const increaseGameTurn = () => {
    setGameTurn(gameTurn + GAME_TURN.TURN_ADVANCE);
  };

  const decreaseGameTurn = () => {
    const rewindedGameTurn = gameTurn - GAME_TURN.TURN_REWIND;
    if (rewindedGameTurn < 1) {
      const errorMessage = 'Game Turn is less than 1.';
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    setGameTurn(rewindedGameTurn);
  };

  return [gameTurn, { setFirstGameTurn, increaseGameTurn, decreaseGameTurn }];
};
export default useGameTurn;
