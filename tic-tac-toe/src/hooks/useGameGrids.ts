import React, { useCallback, useState } from 'react';

import useConstants from '../hooks/useConstants';
import { GameGrid, GamePlayerKey, GamePlayerName } from '../types/types';

const unoccupiedGameGrid: GameGrid = {
  occupied: false,
  gamePlayerKey: undefined,
  oddTurn: false,
} as const;

const useGameGrids = () => {
  const [{ GAME_GRIDS }] = useConstants();

  let defaultGameGrids: GameGrid[][];
  defaultGameGrids = new Array<Array<GameGrid>>();
  for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
    let row: GameGrids[] = new Array<GameGrid>();
    for (let jj = GAME_GRIDS.MIN_COL; jj < GAME_GRIDS.MAX_COL; jj++) {
      row.push({
        ...unoccupiedGameGrid,
      });
    }
    defaultGameGrids.push(row);
  }

  const [gameGrids, setGameGrids] = useState<GameGrid[][]>(defaultGameGrids);

  const initGameGrids = () => {
    for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
      for (let jj = GAME_GRIDS.MIN_COL; jj < GAME_GRIDS.MAX_COL; jj++) {
        gameGrids[ii][jj] = {
          ...unoccupiedGameGrid,
        };
      }
    }
  };

  const getGameGrid = (row: number, col: number): GameGrid => {
    return gameGrids[row][col];
  };

  const setGameGrid = (
    row: number,
    col: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => {
    const oddTurn = !(gameTurn % 2 === 0);
    gameGrids[row][col] = {
      occupied: true,
      gamePlayerKey: gamePlayerKey,
      oddTurn: oddTurn,
    };
  };

  const resetGameGrid = (row: number, col: number) => {
    gameGrids[row][col] = {
      ...unoccupiedGameGrid,
    };
  };

  const checkWin = (gamePlayerKey: GamePlayerKey): boolean => {
    let nn;

    // 横3つ揃っているかの判定
    for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
      nn = 0;
      for (let jj = GAME_GRIDS.MIN_COL; jj < GAME_GRIDS.MAX_COL; jj++) {
        nn += gameGrids[ii][jj].gamePlayerKey === gamePlayerKey ? 1 : 0;
      }
      if (nn == GAME_GRIDS.MAX_COL) return true;
    }

    // 縦3つ揃っているかの判定
    for (let jj = GAME_GRIDS.MIN_COL; jj < GAME_GRIDS.MAX_COL; jj++) {
      nn = 0;
      for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
        nn += gameGrids[ii][jj].gamePlayerKey === gamePlayerKey ? 1 : 0;
      }
      if (nn == GAME_GRIDS.MAX_ROW) return true;
    }

    // 斜め3つ揃っているかの判定：左上 → 右下
    nn = 0;
    for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
      nn += gameGrids[ii][ii].gamePlayerKey === gamePlayerKey ? 1 : 0;
    }
    if (nn == GAME_GRIDS.MAX_ROW) return true;

    // 斜め3つ揃っているかの判定：右上 → 左下
    nn = 0;
    for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
      nn +=
        gameGrids[ii][GAME_GRIDS.MAX_COL - ii - 1].gamePlayerKey === gamePlayerKey
          ? 1
          : 0;
    }
    if (nn == GAME_GRIDS.MAX_ROW) return true;

    // 上記いずれにも該当しない場合は、ゲーム続行
    return false;
  };

  const checkAllOccupied = (): boolean => {
    const maxOccupiedCount = GAME_GRIDS.MAX_ROW * GAME_GRIDS.MAX_COL;
    let occupiedCount = 0;
    for (let ii = GAME_GRIDS.MIN_ROW; ii < GAME_GRIDS.MAX_ROW; ii++) {
      for (let jj = GAME_GRIDS.MIN_COL; jj < GAME_GRIDS.MAX_COL; jj++) {
        if (gameGrids[ii][jj].occupied === true) {
          occupiedCount += 1;
        }
      }
    }
    console.log(occupiedCount);
    return occupiedCount === maxOccupiedCount;
  };

  return [
    gameGrids,
    {
      initGameGrids,
      getGameGrid,
      setGameGrid,
      resetGameGrid,
      checkWin,
      checkAllOccupied,
    },
  ];
};
export default useGameGrids;
