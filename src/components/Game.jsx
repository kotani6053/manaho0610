import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';

function Game() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className="game">
      <ScoreBoard score={score} questionNumber={questionNumber} />
      {questionNumber <= 15 ? (
        <Question onAnswer={handleAnswer} />
      ) : (
        <div>ゲーム終了！あなたのスコアは {score} / 15 です。</div>
      )}
    </div>
  );
}

export default Game;
