import React, { useState, useContext, useMemo, useEffect, useCallback } from 'react';
// import { GamePlayerKey, GamePlayerName } from '../types/types';
import { useNavigate } from 'react-router-dom';

// import useConstants from '../lib/useConstants.ts';
import { GamePlayersContext } from '../contexts/GamePlayers.tsx';

import YouVsOpponentView from '../components/YouVsOpponentView.tsx';
import GamePlayerOnTurnView from '../components/GamePlayerOnTurnView.tsx';

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

  const toggle = useCallback(() => {
    toggleGamePlayerKeyOnTurn();
  });

  const goBack = useCallback(() => {
    initGamePlayerNames();
    navigate('/');
  });

  useEffect(() => {
    // 最初の手番をランダムに決定
    setGamePlayerKeyOnTurnRandomly();
  }, []);

  return (
    <>
      <h4>ゲーム画面</h4>
      <YouVsOpponentView yourName={yourName} opponentName={opponentName} />
      <GamePlayerOnTurnView gamePlayerNameOnTurn={gamePlayerNameOnTurn} />
      <br />
      <button type="submit" onClick={toggle}>
        toggle
      </button>
      <br />
      <br />
      <button type="submit" onClick={goBack}>
        名前入力に戻る
      </button>
    </>
  );
}
