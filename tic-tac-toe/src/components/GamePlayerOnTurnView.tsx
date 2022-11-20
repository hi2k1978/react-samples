import React, { FC } from 'react';

import { GamePlayerName } from '../types/types';

type Props = {
  gamePlayerNameOnTurn: GamePlayerName;
  gameTurn: number;
};

const GamePlayerOnTurnView = React.memo(function show(props: Props) {
  const { gamePlayerNameOnTurn, gameTurn } = props;
  return (
    <div>
      TURN {gameTurn}: {props.gamePlayerNameOnTurn}
    </div>
  );
});
export default GamePlayerOnTurnView;
