const PlayerName = {
  YOUR: 'you',
  OPPONENT: 'oponent',
};
export type PlayerName = typeof PlayerName[keyof typeof PlayerName];
export const playerNameList = Object.values(PlayerName);
