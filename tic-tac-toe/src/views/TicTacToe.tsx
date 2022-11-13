import { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserProfile, {
  UserProfileContext,
  UserProfile,
} from '../contexts/UserProfile.ts';

import useGamePlayers, {
  GamePlayersContext,
  GamePlayers,
} from '../contexts/GamePlayers.ts';

export default function TicTacToe() {
  const navigate = useNavigate();
  const userProfile = useContext<UserProfile>(UserProfileContext);
  const { initUserProfile } = useUserProfile();
  const gamePlayers = useContext<GamePlayers>(GamePlayersContext);
  const { setPlayerName, getPlayerOnTurn, togglePlayerOnTurn, setFirstPlayerRandomly } =
    useGamePlayers();

  setPlayerName(userProfile.name);
  setFirstPlayerRandomly();
  togglePlayerOnTurn();
  const goBack = () => {
    initUserProfile();
    navigate('/');
  };
  return (
    <>
      <div>{gamePlayers.playerName}</div>
      <br />
      <div>手番：{getPlayerOnTurn()}</div>
      <br />
      <button type="submit" onClick={goBack}>
        toggle
      </button>
      <br />
      <br />
      <button type="submit" onClick={goBack}>
        戻る
      </button>
    </>
  );
}
