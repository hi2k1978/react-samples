const useConstants = () => {
  const GAME_PLAYER_KEYS = {
    YOU: 0,
    OPPONENT: 1,
  } as const;
  type GamePlayerKeys = typeof GAME_PLAYER_KEYS[keyof typeof GAME_PLAYER_KEYS];

  const GAME_PLAYER_NAMES = {
    YOU: '空条Ｑ太郎',
    OPPONENT: 'ドラムカン・ジョーンズ',
  } as const;

  const GAME_GRIDS = {
    COLUMN_MIN: 0,
    COLUMN_MAX: 3,
    ROW_MIN: 0,
    ROW_MAX: 3,
  } as const;

  const GAME_TURN = {
    FIRST_TURN: 1,
  } as const;

  const SLEEP_TIME = 1000;

  return [{ GAME_PLAYER_KEYS, GAME_PLAYER_NAMES, GAME_GRIDS, GAME_TURN, SLEEP_TIME }];
};
export default useConstants;
