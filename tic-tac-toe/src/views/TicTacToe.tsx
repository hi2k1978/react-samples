import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserProfile, UserProfileContext } from '../contexts/UserProfile.ts';

export default function TicTacToe() {
  const userProfile = useContext(UserProfileContext);
  return (
    <>
      <h2>TicTacToe</h2>
      <div>{userProfile.name}</div>
      <br />
      <Link to="/">TO: Home</Link>
    </>
  );
}
