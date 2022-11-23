import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GamePlayerKey, GamePlayerName } from '../types/types';
import { useNavigate } from 'react-router-dom';

// Contexts
import { GamePlayersContext } from '../contexts/GamePlayers.tsx';
import { GameGridsContext } from '../contexts/GameGrids.tsx';

// Hooks
import useConstants from '../hooks/useConstants.ts';

// Views
import GamePlayerOnTurnView from '../components/GamePlayerOnTurnView.tsx';
import YouVsOpponentView from '../components/YouVsOpponentView.tsx';

export default function TicTacToe() {
  const navigate = useNavigate();
  const [{ GAME_TURN }] = useConstants();

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

  const {
    gameGrids,
    initGameGrids,
    getGameGrid,
    setGameGrid,
    resetGameGrid,
    checkGameEnd,
    checkAllOccupied,
    onGame,
    gameResult,
    initGameProgress,
    toggleOnGame,
    setGameResult,
    gameTurn,
    initGameTurn,
    advanceGameTurn,
    rewindedGameTurn,
  } = useContext(GameGridsContext);

  const yourName = getYourName();
  const opponentName = getOpponentName();
  const gamePlayerNameOnTurn = getGamePlayerNameOnTurn();

  // 盤面の初期化
  // TODO: const initGameProgress = () => {
  const initGameHoge = () => {
    initGameGrids();
    initGameProgress(); // initGameMode
    initGameTurn();
  };
  // TODO: }

  const setGameEndWithWin = () => {
    switch (gamePlayerKey) {
      case GAME_PLAYER_KEYS.YOU:
        setGameResult(GAME_RESULT.YOU_WIN);
        toggleOnGame();
        break;
      case GAME_PLAYER_KEYS.OPPONENT:
        setGameResult(GAME_RESULT.OPPONENT_WIN);
        toggleOnGame();
        break;
    }
  };
  const setGameEndWithDraw = () => {
    setGameResult(GAME_RESULT.DRAW);
    toggleOnGame();
  };

  const toggleGamePlayerOnNextTurn = () => {
    advanceGameTurn();
    toggleGamePlayerKeyOnTurn();
  };

  const initGame = () => {
    // 盤面の初期化
    initGameHoge();
    // 最初の手番をランダムに決定
    setGamePlayerKeyOnTurnRandomly();
  };

  const selectGrid = (
    col: number,
    row: number,
    gamePlayerKey: GamePlayerKey,
    gameTurn: number,
  ) => {
    // プレイヤーがGridを選択
    setGameGrid(col, row, gamePlayerKey, gameTurn);
    // 勝利判定
    if (checkGameEnd(gamePlayerKey)) setGameEndWithWin();
    // グリッドが全て選択されたかの判定
    if (checkAllOccupied()) setGameEndWithDraw();
    // 次のターンに進め、プレイヤーを交代
    toggleGamePlayerOnNextTurn();
  };

  const testGame = useCallback(() => {
    toggleGamePlayerOnNextTurn();
  }, [gamePlayerKeyOnTurn]);

  const goBack = useCallback(() => {
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
      <GamePlayerOnTurnView
        gamePlayerNameOnTurn={gamePlayerNameOnTurn}
        gameTurn={gameTurn}
      />
      <br />
      {/*
           for(ii= GAME_GRIDS_MIN_ROW ... GAME_GRIDS_MAX_ROW)
           for(jj= GAME_GRIDS_MIN_COL ... GAME_GRIDS_MAX_COL)
           <GameGridView gameGrid={gameGrids[ii][jj]} onClick={() => setGameGrid(ii, jj, gamePlayerKey, gameTurn)} />
      */}
      <div>
        <button type="button" onClick={testGame}>
          リセット
        </button>
        <button type="submit" onClick={goBack} style={{ marginLeft: '8px' }}>
          戻る
        </button>
      </div>
    </>
  );
}
