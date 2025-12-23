import React, { useState, useEffect } from 'react';

function Question({ onCorrect }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    const diff = Math.random() < 0.5 ? 'easy' : Math.random() < 0.5 ? 'normal' : 'hard';
    setDifficulty(diff);
    const max = diff === 'easy' ? 5 : diff === 'normal' ? 10 : 20;
    setA(Math.floor(Math.random() * max) + 1);
    setB(Math.floor(Math.random() * max) + 1);
    setAnswer('');
  }, [onCorrect]);

  const checkAnswer = () => {
    if (parseInt(answer) === a + b) {
      let pts = difficulty === 'easy' ? 1 : difficulty === 'normal' ? 3 : 5;
      onCorrect(pts);
    } else {
      alert('不正解！');
    }
  };

  return (
    <div>
      <p>問題: {a} + {b} = ? （難易度: {difficulty}）</p>
      <input type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={checkAnswer}>回答</button>
    </div>
  );
}

export default Question;
