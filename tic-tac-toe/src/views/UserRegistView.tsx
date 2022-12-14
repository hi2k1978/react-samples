import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { GamePlayersContext } from '../contexts/GamePlayersContext';

export default function UserRegist() {
  const navigate = useNavigate();

  const { getYourName, getOpponentName, setGamePlayerNames } =
    useContext(GamePlayersContext);

  const yourName = getYourName();
  const opponentName = getOpponentName();

  const inputYourName = useRef(null);
  const inputOpponentName = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGamePlayerNames(
      (inputYourName.current as any).value,
      (inputOpponentName.current as any).value,
    );
    navigate('/tictactoe');
  };
  return (
    <>
      <h4>プレイヤー情報入力画面</h4>
      <form onSubmit={handleSubmit}>
        あなたの名前:
        <input ref={inputYourName} type="text" defaultValue={yourName} />
        <br />
        対戦者の名前:
        <input ref={inputOpponentName} type="text" defaultValue={opponentName} />
        <br />
        <br />
        <input type="submit" value="ゲーム スタート" />
      </form>
      <br />
    </>
  );
}
