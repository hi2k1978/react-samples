import { useState, useContext, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useConstants } from '../lib/useConstants.ts';
// import { GamePlayerKey, GamePlayerName } from '../types/types';

import { GamePlayersContext } from '../contexts/GamePlayers.tsx';

export default function TicTacToe() {
  const navigate = useNavigate();
  // const { GAME_PLAYER_KEYS } = useConstants();

  const {
    initGamePlayerNames,
    // getGamePlayerName,
    getYourName,
    getOpponentName,
    getGamePlayerNameOnTurn,
    getGamePlayerKeyOnTurn,
    toggleGamePlayerKeyOnTurn,
    setGamePlayerKeyOnTurnRandomly,
  } = useContext(GamePlayersContext);

  const yourName = getYourName();
  const opponentName = getOpponentName();
  const gamePlayerNameOnTurn = getGamePlayerNameOnTurn();
  const gamePlayerKeyOnTurn = getGamePlayerKeyOnTurn();

  const toggle = () => {
    toggleGamePlayerKeyOnTurn();
  };

  const goBack = () => {
    initGamePlayerNames();
    navigate('/');
  };

  useEffect(() => {
    // 最初の手番をランダムに決定
    setGamePlayerKeyOnTurnRandomly();
  }, []);

  return (
    <>
      <h4>ゲーム画面</h4>
      <div>
        {yourName} vs {opponentName}
      </div>
      <br />
      <div>
        手番: {gamePlayerNameOnTurn} ({gamePlayerKeyOnTurn})
      </div>
      <br />
      <br />
      <button type="submit" onClick={toggle}>
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
