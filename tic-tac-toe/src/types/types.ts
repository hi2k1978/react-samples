import useConstants from '../hooks/useConstants';

const [
  { GAME_PLAYER_KEYS, DEFAULT_GAME_PLAYER_NAMES, GAME_GRIDS, GAME_MODE, GAME_RESULT },
] = useConstants();

export type GamePlayerKey = typeof GAME_PLAYER_KEYS[keyof typeof GAME_PLAYER_KEYS];
export type GamePlayerName = string;
// export type GamePlayerName =
//   typeof DEFAULT_GAME_PLAYER_NAMES[keyof typeof DEFAULT_GAME_PLAYER_NAMES];
export type GameGrids = typeof GAME_GRIDS[keyof typeof GAME_GRIDS];
export type GameMode = typeof GAME_MODE[keyof typeof GAME_MODE];
export type GameResult = typeof GAME_RESULT[keyof typeof GAME_RESULT];

export type GameGrid = {
  occupied: boolean;
  gamePlayerKey: GamePlayerKey | undefined;
  oddTurn: boolean;
};
