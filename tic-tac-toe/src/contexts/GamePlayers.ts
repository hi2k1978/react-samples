import { createContext, useContext } from 'react';

const defaultGamePlayers = {
  playerName: 'you',
  opponentName: '対戦者',
  isYourTurn: true,
};
export type GamePlayers = typeof defaultGamePlayers;
export const GamePlayersContext = createContext<GamePlayers>({ ...defaultGamePlayers });

const useGamePlayers = () => {
  const gamePlayers = useContext(GamePlayersContext);
  const setPlayerName = (newName: string) => {
    gamePlayers.playerName = newName;
  };
  const getPlayerOnTurn = () => {
    return gamePlayers.isYourTurn ? gamePlayers.playerName : gamePlayers.opponentName;
  };
  const togglePlayerOnTurn = () => {
    gamePlayers.isYourTurn = !gamePlayers.isYourTurn;
  };
  const setFirstPlayerRandomly = () => {
    const rand = Math.floor(2 * Math.random());
    gamePlayers.isYourTurn = rand ? true : false;
  };
  return { setPlayerName, getPlayerOnTurn, togglePlayerOnTurn, setFirstPlayerRandomly };
};
export default useGamePlayers;
