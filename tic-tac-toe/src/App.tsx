import './App.css';

import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameGridsProvider } from './contexts/GameGrids.tsx';
import { GamePlayersProvider } from './contexts/GamePlayers.tsx';
import { GameStateProvider } from './contexts/GameState.tsx';
import { GameTurnProvider } from './contexts/GameTurn.tsx';
import logo from './logo.svg';
import TicTacToe from './views/TicTacToe.tsx';
import UserRegist from './views/UserRegist.tsx';

function App() {
  return (
    <div className="App">
      <h1>丸罰ゲーム</h1>
      <GamePlayersProvider>
        <GameStateProvider>
          <GameTurnProvider>
            <GameGridsProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<UserRegist />} />
                  <Route path="/tictactoe" element={<TicTacToe />} />
                </Routes>
              </BrowserRouter>
            </GameGridsProvider>
          </GameTurnProvider>
        </GameStateProvider>
      </GamePlayersProvider>
    </div>
  );
}

export default App;
