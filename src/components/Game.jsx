import React from 'react';
import Question from './Question';

// App.jsxから onWin を受け取ります
function Game({ onWin }) {
  
  // 正解したときにポイントを加算する関数
  const handleCorrect = (pts) => {
    // もしptsが渡されていなければ10ptにする
    const pointsToAdd = typeof pts === 'number' ? pts : 10;
    if (onWin) {
      onWin(pointsToAdd);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
        問題を解いてガチャポイントを貯めよう！
      </p>
      {/* Questionコンポーネントに正解時の処理を渡す */}
      <Question onCorrect={handleCorrect} />
    </div>
  );
}

export default Game;
