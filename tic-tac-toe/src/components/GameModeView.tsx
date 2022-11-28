import React, { FC } from 'react';

import useConstants from '../hooks/useConstants.ts';
import { GameMode, GamePlayerName, GameResult } from '../types/types';

type Props = {
  gameMode: GameMode;
  gameResult: GameResult;
  yourName: GamePlayerName;
  opponentName: GamePlayerName;
};
const GameModeView = React.memo(function view(props) {
  const [{ GAME_MODE, GAME_RESULT }] = useConstants();
  const { gameMode, gameResult, yourName, opponentName } = props;
  if (gameMode === GAME_MODE.ON_GAME) return <div>対戦中</div>;
  // gameMode is GAME_MODE.GAME_OVER
  if (gameResult === GAME_RESULT.YOU_WIN) return <div>{yourName}の勝利</div>;
  if (gameResult === GAME_RESULT.OPPONENT_WIN) return <div>{opponentName}の勝利</div>;
  // gameResult is GAME_RESULT.DRAW
  return <div>引分け</div>;
});
export default GameModeView;
