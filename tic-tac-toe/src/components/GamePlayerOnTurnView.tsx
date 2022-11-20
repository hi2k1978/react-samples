import React, { FC } from 'react';

import { GamePlayerName } from '../types/types';

type Props = {
  gamePlayerNameOnTurn: GamePlayerName;
};

const GamePlayerOnTurnView = React.memo(function show(props: Props) {
  const { gamePlayerNameOnTurn } = props;
  return <div>手番: {props.gamePlayerNameOnTurn}</div>;
});
export default GamePlayerOnTurnView;
