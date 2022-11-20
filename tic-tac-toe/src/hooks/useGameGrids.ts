import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import { GameGrid, GamePlayerKey, GamePlayerName } from '../types/types';

const unoccupiedGameGrid = {
  occupied: false,
  gamePlayerKey: undefined,
  oddTurn: false,
} as const;

const useGameGrids = () => {
  const [{ GAME_GRIDS }] = useConstants();

  let defaultGameGrids: GameGrid[][];
  defaultGameGrids = new Array<Array<GameGrid>>();
  for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
    let row: GameGrids[] = new Array<GameGrid>();
    //defaultGameGrids[ii] = new Array();
    for (let jj = GAME_GRIDS.MIN_ROW; jj < GAME_GRIDS.MAX_ROW; jj++) {
      row.push({
        ...unoccupiedGameGrid,
      });
    }
    defaultGameGrids.push(row);
  }

  const [gameGrids, setGameGrids] = useState<GameGrid[][]>(defaultGameGrids);

  const initGameGrids = () => {
    for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
      for (let jj = GAME_GRIDS.MIN_ROW; jj < GAME_GRIDS.MAX_ROW; jj++) {
        gameGrids[ii][jj] = {
          ...unoccupiedGameGrid,
        };
      }
    }
  };

  const getGameGrid = (col, row): GameGrid => {
    return gameGrid[col][row];
  };

  const setGameGrid = (
    col: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => {
    const oddTurn = !(gameTurn % 2 === 0);
    gameGrids[col][row] = {
      occupied: true,
      gamePlayerKey: gamePlayerKey,
      oddTurn: oddTurn,
    };
  };

  const resetGameGrid = (col: number, row: number) => {
    gameGrids[col][row] = {
      ...unoccupiedGameGrid,
    };
  };

  const checkGameEnd = (gamePlayerKey: GamePlayerKey): boolean => {
    let nn;

    // 横3つ揃っているかの判定
    for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
      nn = 0;
      for (let jj = GAME_GRIDS.MIN_ROW; jj < GAME_GRIDS.MAX_ROW; jj++) {
        nn += gameGrids[ii][jj].gamePlayerKey === gamePlayerKey ? 1 : 0;
      }
      if (nn == GAME_GRIDS.MAX_ROW) return true;
    }

    // 縦3つ揃っているかの判定
    for (let jj = GAME_GRIDS.MIN_ROW; jj < GAME_GRIDS.MAX_ROW; jj++) {
      nn = 0;
      for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
        nn += gameGrids[ii][jj].gamePlayerKey === gamePlayerKey ? 1 : 0;
      }
      if (nn == GAME_GRIDS.MAX_COL) return true;
    }

    // 斜め3つ揃っているかの判定：左上 → 右下
    nn = 0;
    for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
      nn += gameGrids[ii][ii].gamePlayerKey === gamePlayerKey ? 1 : 0;
    }
    if (nn == GAME_GRIDS.MAX_COL) return true;

    // 斜め3つ揃っているかの判定：右上 → 左下
    nn = 0;
    for (let ii = GAME_GRIDS.MIN_COL; ii < GAME_GRIDS.MAX_COL; ii++) {
      nn += gameGrids[ii][MAX_ROW - ii - 1].gamePlayerKey === gamePlayerKey ? 1 : 0;
    }
    if (nn == GAME_GRIDS.MAX_COL) return true;

    // 上記いずれにも該当しない場合は、ゲーム続行
    return false;
  };

  const checkAllOccupied = (): boolean => {
    const occupiedCount = gameGrids.reduce((nn, gameGrid) => {
      return gameGrid.occupied === true ? nn + 1 : nn;
    }, 0);
    return occupiedCount === MAX_COL * MAX_ROW;
  };

  return [
    gameGrids,
    {
      initGameGrids,
      getGameGrid,
      setGameGrid,
      resetGameGrid,
      checkGameEnd,
      checkAllOccupied,
    },
  ];
};
export default useGameGrids;
