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
    MIN_COL: 0,
    MAX_COL: 3,
    MIN_ROW: 0,
    MAX_ROW: 3,
  } as const;

  const GAME_TURN = {
    FIRST_TURN: 1,
    TURN_INCREMENT: 1,
    TURN_DECREMENT: 2,
  } as const;

  const GAME_RESULT = {
    ON_GAME: -1,
    DRAW: 0,
    YOU_WIN: 1,
    OPPONENT_WIN: 2,
  } as const;

  const SLEEP_TIME = 1000;

  return [
    {
      GAME_PLAYER_KEYS,
      GAME_PLAYER_NAMES,
      GAME_GRIDS,
      GAME_TURN,
      GAME_RESULT,
      SLEEP_TIME,
    },
  ];
};
export default useConstants;
