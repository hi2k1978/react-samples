import React, { FC } from 'react';

import GameGridView from '../components/GameGridView.tsx';
import useConstants from '../hooks/useConstants';
import { GameGrid, GamePlayerKey } from '../types/types';

type Props = {
  gameGrids: GameGrid[][];
  gamePlayerKey: GamePlayerKey;
  gameTurn: number;
  selectGameGrid: () => void;
};
const GameGridsView = React.memo(function view(props) {
  const [{ GAME_GRIDS }] = useConstants();
  const { gameGrids, gamePlayerKey, gameTurn, selectGameGrid } = props;
  const rows = [];
  for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
    rows.push(ii);
  }
  const cols = [];
  for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
    cols.push(ii);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              {cols.map((col) => (
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
