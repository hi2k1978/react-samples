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
        return (
          <div>
            ○○○
            <br />
            ○○○
            <br />
            ○○○
          </div>
        );
      case false:
        return (
          <div>
            ×××
            <br />
            ×××
            <br />
            ×××
          </div>
        );
    }
  }
  // gameGrid.occupied is true
  const nn = 1 + row * 3 + col;
  return (
    <div onClick={onClick}>
      {nn}
      {nn}
      {nn}
      <br />
      {nn}
      {nn}
      {nn}
      <br />
      {nn}
      {nn}
      {nn}
    </div>
  );
});
export default GameGridView;
