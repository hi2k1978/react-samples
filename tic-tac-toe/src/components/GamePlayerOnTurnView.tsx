import React, { FC } from 'react';
import { GamePlayerName } from '../types/types';

type Props = {
  gamePlayerNameOnTurn: GamePlayerName;
};

const GamePlayerOnTurnView = React.memo((props) => {
  const { gamePlayerNameOnTurn } = props;
  return <div>手番: {gamePlayerNameOnTurn}</div>;
});
export default GamePlayerOnTurnView;
