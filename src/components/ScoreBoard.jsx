import React from 'react';

function ScoreBoard({ score, questionNumber, level, xp }) {
  return (
    <div className="scoreboard">
      <p>スコア: {score}</p>
      <p>問題: {questionNumber} / 15</p>
      <p>レベル: {level} | XP: {xp}</p>
    </div>
  );
}

export default ScoreBoard;
