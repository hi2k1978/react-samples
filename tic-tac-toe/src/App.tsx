import './App.scss';

import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameGridsProvider } from './contexts/GameGridsContext';
import { GamePlayersProvider } from './contexts/GamePlayersContext';
import { GameStateProvider } from './contexts/GameStateContext';
import { GameTurnProvider } from './contexts/GameTurnContext';
import TicTacToe from './views/TicTacToeView';
import UserRegist from './views/UserRegistView';

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
