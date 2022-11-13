import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useUserProfile, {
  UserProfileContext,
  UserProfile,
} from '../contexts/UserProfile.ts';

export default function UserRegist() {
  const navigate = useNavigate();

  const { initUserProfile } = useUserProfile();
  const userProfile = useContext<UserProfile>(UserProfileContext);
  const userName = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    userProfile.name = userName.current.value;
    navigate('/tictactoe');
  };
  return (
    <>
      <h4>プレイヤー情報入力画面</h4>
      <form onSubmit={handleSubmit}>
        名前
        <input ref={userName} type="text" defaultValue={userProfile.name} />
        <br />
        <br />
        <input type="button" type="submit" value="Start Game" />
      </form>
      <br />
    </>
  );
}
