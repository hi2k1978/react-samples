import React, { useCallback, useState } from 'react';
import useConstants from '../hooks/useConstants.ts';

const useGameTurn = () => {
  const [{ GAME_TURN }] = useConstants();
  const [gameTurn, setGameTurn] = useState<number>(GAME_TURN.FIRST_TURN);

  const initGameTurn = () => {
    setGameTurn(GAME_TURN.FIRST_TURN);
  };
  const advanceGameTurn = () => {
    setGameTurn(gameTurn + GAME_TURN.TURN_ADVANCE);
  };

  const rewindGameTurn = () => {
    const rewindedGameTurn = gameTurn - GAME_TURN.TURN_REWIND;
    if (rewindedGameTurn < 1) {
      const errorMessage = 'Game Turn is less than 1.';
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    setGameTurn(rewindedGameTurn);
  };

  return [gameTurn, { initGameTurn, advanceGameTurn, rewindGameTurn }];
};
export default useGameTurn;
