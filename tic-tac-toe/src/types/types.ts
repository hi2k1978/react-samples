import useConstants from '../lib/useConstants.ts';

const { GAME_PLAYER_KEYS, GAME_PLAYER_NAMES, GAME_GRIDS } = useConstants();

export type GamePlayerKeys = typeof GAME_PLAYER_KEYS[keyof typeof GAME_PLAYER_KEYS];
export type GamePlayerNames = typeof GAME_PLAYER_NAMES[keyof typeof GAME_PLAYER_NAMES];
export type GameGrids = typeof GAME_GRIDS[keyof typeof GAME_GRIDS];
