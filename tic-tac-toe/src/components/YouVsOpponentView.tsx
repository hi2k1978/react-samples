import React, { FC } from 'react';
import { GamePlayerName } from '../types/types';

type Props = {
  yourName: GamePlayerName;
  opponentName: GamePlayerName;
};

const YouVsOpponentView: FC<Props> = React.memo((props) => {
  const { yourName, opponentName } = props;
  return (
    <div>
      {yourName} vs {opponentName}
    </div>
  );
});
export default YouVsOpponentView;
