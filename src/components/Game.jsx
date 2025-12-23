import React from 'react';
import Question from './Question';

function Game({ onWin }) {
  // 正解した時に10ポイント加算するように設定
  const handleCorrect = () => {
    onWin(10);
  };

  return (
    <div>
      <p style={{ fontSize: '14px', color: '#666' }}>正解すると 10pt ゲット！</p>
      <Question onCorrect={handleCorrect} />
    </div>
  );
}

export default Game;
