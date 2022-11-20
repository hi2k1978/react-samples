import useConstants from '../lib/useConstants.ts';

const { GAME_PLAYER_KEYS, GAME_PLAYER_NAMES, GAME_GRIDS, GAME_RESULT } = useConstants();

export type GamePlayerKey = typeof GAME_PLAYER_KEYS[keyof typeof GAME_PLAYER_KEYS];
export type GamePlayerName = typeof GAME_PLAYER_NAMES[keyof typeof GAME_PLAYER_NAMES];
export type GameGrids = typeof GAME_GRIDS[keyof typeof GAME_GRIDS];
export type GameResult = typeof GAME_RESULT[keyof typeof GAME_RESULT];

export type GameGrid = {
  occupied: boolean;
  gamePlayerKey: GamePlayerKey | undefined;
  oddTurn: boolean;
};
