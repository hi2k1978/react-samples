import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import UserRegist from './views/UserRegist.tsx';
import TicTacToe from './views/TicTacToe.tsx';

import { UserProfile, UserProfileContext } from './contexts/UserProfile.ts';

function App() {
  const userProfile = useContext(UserProfileContext);
  return (
    <div className="App">
      <h1>hage</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserRegist />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
