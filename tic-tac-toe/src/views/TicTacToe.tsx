import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
// import { GamePlayerKey, GamePlayerName } from '../types/types';
import { useNavigate } from 'react-router-dom';

import GamePlayerOnTurnView from '../components/GamePlayerOnTurnView.tsx';
import YouVsOpponentView from '../components/YouVsOpponentView.tsx';
// import useConstants from '../lib/useConstants.ts';
import { GamePlayersContext } from '../contexts/GamePlayers.tsx';

export default function TicTacToe() {
  const navigate = useNavigate();
  // const { GAME_PLAYER_KEYS } = useConstants();

  const {
    gamePlayers,
    getYourName,
    getOpponentName,
    getGamePlayerNameOnTurn,
    initGamePlayerNames,
    gamePlayerKeyOnTurn,
    toggleGamePlayerKeyOnTurn,
    setGamePlayerKeyOnTurnRandomly,
  } = useContext(GamePlayersContext);

  const yourName = getYourName();
  const opponentName = getOpponentName();
  const gamePlayerNameOnTurn = getGamePlayerNameOnTurn();

  const toggle = useCallback(() => {
    toggleGamePlayerKeyOnTurn();
  }, [gamePlayerKeyOnTurn]);

  const goBack = useCallback(() => {
    initGamePlayerNames();
    navigate('/');
  }, [gamePlayers]);

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
      <button type="button" onClick={toggle}>
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
