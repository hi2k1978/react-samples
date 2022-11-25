import './App.css';

import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameGridsProvider } from './contexts/GameGridsContext.tsx';
import { GamePlayersProvider } from './contexts/GamePlayersContext.tsx';
import { GameStateProvider } from './contexts/GameStateContext.tsx';
import { GameTurnProvider } from './contexts/GameTurnContext.tsx';
import TicTacToe from './views/TicTacToeView.tsx';
import UserRegist from './views/UserRegistView.tsx';

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
