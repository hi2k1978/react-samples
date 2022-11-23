import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { GamePlayerKey, GamePlayerName } from '../types/types';
import { useNavigate } from 'react-router-dom';

// Contexts
import { GameGridsContext } from '../contexts/GameGrids.tsx';
import { GamePlayersContext } from '../contexts/GamePlayers.tsx';
import { GameStateContext } from '../contexts/GameState.tsx';
import { GameTurnContext } from '../contexts/GameTurn.tsx';

// Hooks
import useConstants from '../hooks/useConstants.ts';

// Views
import GamePlayerOnTurnView from '../components/GamePlayerOnTurnView.tsx';
import YouVsOpponentView from '../components/YouVsOpponentView.tsx';

export default function TicTacToe() {
  const navigate = useNavigate();
  const [{ GAME_TURN }] = useConstants();

  const {
    gameGrids,
    initGameGrids,
    getGameGrid,
    setGameGrid,
    resetGameGrid,
    checkWin,
    checkAllOccupied,
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
    initGameTurn(getGamePlayerKeyRandomly()); // initGameMode
    initGameState();
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
    if (checkGameEnd(gamePlayerKey)) setGameEndWithWin(gamePlayerKey);
    // グリッドが全て選択されたかの判定
    if (checkAllOccupied()) setGameEndWithDraw();
    // 次のターンに進め、プレイヤーを交代
    toggleGamePlayerOnNextTurn();
  };

  const testGame = useCallback(() => {
    advanceGameTurn();
  }, [gameTurn, gamePlayerKeyOnTurn]);

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
