import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserProfile, UserProfileContext } from '../contexts/UserProfile.ts';

export default function UserRegist() {
  const userProfile = useContext(UserProfileContext);
  return (
    <>
      <h2>UserRegist</h2>
      <div>{userProfile.name}</div>
      <br />
      <Link to="/tictactoe">TO: TicTacToe</Link>
    </>
  );
}
