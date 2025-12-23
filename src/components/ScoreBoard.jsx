import React from 'react';

function ScoreBoard({ score, questionNumber }) {
  return (
    <div className="scoreboard">
      <p>スコア: {score}</p>
      <p>問題: {questionNumber} / 15</p>
    </div>
  );
}

export default ScoreBoard;
