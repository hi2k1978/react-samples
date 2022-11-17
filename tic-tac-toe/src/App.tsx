import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import UserRegist from './views/UserRegist.tsx';
import TicTacToe from './views/TicTacToe.tsx';

import { GamePlayersProvider } from './contexts/GamePlayers.tsx';

function App() {
  return (
    <div className="App">
      <h1>丸罰ゲーム</h1>
      <GamePlayersProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserRegist />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
          </Routes>
        </BrowserRouter>
      </GamePlayersProvider>
    </div>
  );
}

export default App;
