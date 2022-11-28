import React, { FC } from 'react';

import { GameGrid } from '../types/types';

type Props = {
  row: number;
  col: number;
  gameGrid: GameGrid;
  onClick: () => void;
};
const GameGridView = React.memo(function view(props) {
  const { row, col, gameGrid, onClick } = props;
  if (gameGrid.occupied === true) {
    switch (gameGrid.oddTurn) {
      case true:
        return <div className="game-grid game-grid-red">○</div>;
      case false:
        return <div className="game-grid game-grid-blue">×</div>;
    }
  }
  // gameGrid.occupied is true
  const nn = 1 + row * 3 + col;
  return <div onClick={onClick} className="game-grid game-grid-grey"></div>;
});
export default GameGridView;
