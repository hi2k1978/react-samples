import React, { FC } from 'react';
import { GameGrid, GamePlayerKey } from '../types/types';
import GameGridView from '../components/GameGridView.tsx';

type Props = {
  gameGrids: GameGrid[][];
  gamePlayerKey: GamePlayerKey;
  gameTurn: number;
  selectGameGrid: () => void;
};
const GameGridsView = React.memo(function view(props) {
  const { gameGrids, gamePlayerKey, gameTurn, selectGameGrid } = props;
  return (
    <div>
      <table>
        <tbody>
          {[0, 1, 2].map((row) => (
            <tr key={row}>
              {[0, 1, 2].map((col) => (
                <td key={col}>
                  <GameGridView
                    row={row}
                    col={col}
                    gameGrid={gameGrids[row][col]}
                    onClick={() => selectGameGrid(row, col, gamePlayerKey, gameTurn)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
export default GameGridsView;
