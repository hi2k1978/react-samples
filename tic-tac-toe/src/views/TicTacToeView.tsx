import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GameGridsView from '../components/GameGridsView';
import GameModeView from '../components/GameModeView';
// Views
import GamePlayerOnTurnView from '../components/GamePlayerOnTurnView';
import YouVsOpponentView from '../components/YouVsOpponentView';
// Contexts
import { GameGridsContext } from '../contexts/GameGridsContext';
import { GamePlayersContext } from '../contexts/GamePlayersContext';
import { GameStateContext } from '../contexts/GameStateContext';
import { GameTurnContext } from '../contexts/GameTurnContext';
// Hooks
import useConstants from '../hooks/useConstants';
import { GamePlayerKey, GamePlayerName } from '../types/types';

export default function TicTacToe() {
  const navigate = useNavigate();
  const [{ GAME_TURN, GAME_MODE, GAME_RESULT }] = useConstants();
  const {
    gameGrids,
    initGameGrids,
    getGameGrid,
    setGameGrid,
    resetGameGrid,
    checkGameEndWithWin,
    checkGameEndWithDraw,
  } = useContext(GameGridsContext);

  const {
    gamePlayers,
    getGamePlayerName,
    setGamePlayerNames,
    getYourName,
    getOpponentName,
    getGamePlayerKeyRandomly,
    initGamePlayerNames,
  } = useContext(GamePlayersContext);

  const { gameMode, gameResult, initGameState, setGameEndWithWin, setGameEndWithDraw } =
    useContext(GameStateContext);

  const { gameTurn, gamePlayerKeyOnTurn, initGameTurn, advanceGameTurn, rewindGameTurn } =
    useContext(GameTurnContext);

  const yourName = getYourName();
  const opponentName = getOpponentName();
  const gamePlayerNameOnTurn = getGamePlayerName(gamePlayerKeyOnTurn);

  // 盤面の初期化
  const initGame = () => {
    // 盤面の初期化
    initGameGrids();
    // ターン初期化時、最初の手番をランダムに決定
    initGameTurn(getGamePlayerKeyRandomly());
    // ゲームの状態を対戦中に変更
    initGameState();
  };

  const selectGameGrid = (
    col: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => {
    console.log(gameMode, GAME_MODE.ON_GAME);
    if (gameMode !== GAME_MODE.ON_GAME) return;
    const selectedGameGrid = getGameGrid(col, row);
    if (selectedGameGrid.occupied === true) return;
    // プレイヤーがGridを選択
    setGameGrid(col, row, gamePlayerKey, gameTurn);
    // 勝利判定
    if (checkGameEndWithWin(gamePlayerKey)) {
      setGameEndWithWin(gamePlayerKey);
      return;
    }
    // グリッドが全て選択されたかの判定
    if (checkGameEndWithDraw()) {
      setGameEndWithDraw();
      return;
    }
    // 次のターンに進め、プレイヤーを交代
    advanceGameTurn();
  };

  const reset = useCallback(() => {
    initGame();
  }, [gameGrids, gameTurn, gamePlayerKeyOnTurn, gameMode, gameResult]);

  const goBack = useCallback(() => {
    // 名前入力画面に戻る前に、名前を初期化
    initGamePlayerNames();
    navigate('/');
  }, [gamePlayers]);

  useEffect(() => {
    initGame();
  }, []);

  return (
    <>
      <h4>ゲーム画面</h4>
      <YouVsOpponentView yourName={yourName} opponentName={opponentName} />
      <br />
      <GamePlayerOnTurnView
        gamePlayerNameOnTurn={gamePlayerNameOnTurn}
        gameTurn={gameTurn}
      />
      <GameModeView
        gameMode={gameMode}
        gameResult={gameResult}
        yourName={yourName}
        opponentName={opponentName}
      />
      <br />
      <GameGridsView
        gameGrids={gameGrids}
        gamePlayerKey={gamePlayerKeyOnTurn}
        gameTurn={gameTurn}
        selectGameGrid={selectGameGrid}
      />
      <br />
      <div>
        <button type="submit" onClick={reset}>
          リセット
        </button>
        <button type="submit" onClick={goBack} style={{ marginLeft: '8px' }}>
          戻る
        </button>
      </div>
    </>
  );
}
