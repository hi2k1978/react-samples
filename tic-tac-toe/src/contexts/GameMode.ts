import { createContext, useContext } from 'react';

const defaultGameMode = {
  onPlay: true,
};

export type GameMode = typeof defaultGameMode;
export const GameModeContext = createContext({ ...defaultGameMode });

const useGameMode = () => {
  const gameMode = useContext<GameMode>(GameModeContext);
  setGameSet = () => {
    gameMode.onPlay = false;
  };
  return { setGameSet };
};
export default useGameMode;
