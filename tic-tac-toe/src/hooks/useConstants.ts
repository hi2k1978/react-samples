const useConstants = () => {
  const GAME_PLAYER_KEYS = {
    YOU: 0,
    OPPONENT: 1,
  } as const;

  const DEFAULT_GAME_PLAYER_NAMES = {
    YOU: '空条Ｑ太郎',
    OPPONENT: 'ドラムカン・ジョーンズ',
  } as const;

  const GAME_GRIDS = {
    MIN_ROW: 0,
    MAX_ROW: 3,
    MIN_COL: 0,
    MAX_COL: 3,
  } as const;

  const GAME_TURN = {
    FIRST_TURN: 1,
    TURN_ADVANCE: 1,
    TURN_REWIND: 1,
  } as const;

  const GAME_MODE = {
    GAME_OVER: 0,
    ON_GAME: 1,
  } as const;

  const GAME_RESULT = {
    NONE: 0,
    DRAW: 1,
    YOU_WIN: 2,
    OPPONENT_WIN: 3,
  } as const;

  const SLEEP_TIME = 1000;

  return [
    {
      GAME_PLAYER_KEYS,
      DEFAULT_GAME_PLAYER_NAMES,
      GAME_GRIDS,
      GAME_TURN,
      GAME_MODE,
      GAME_RESULT,
      SLEEP_TIME,
    },
  ];
};
export default useConstants;
