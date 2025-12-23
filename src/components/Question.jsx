import React, { useState, useEffect } from 'react';

function Question({ onCorrect }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const diff = Math.random() < 0.5 ? 'easy' : Math.random() < 0.5 ? 'normal' : 'hard';
    setDifficulty(diff);
    const max = diff === 'easy' ? 5 : diff === 'normal' ? 10 : 20;
    setA(Math.floor(Math.random() * max) + 1);
    setB(Math.floor(Math.random() * max) + 1);
    setAnswer('');
  }, [onCorrect]);

  const handleClick = (num) => {
    setAnswer(answer + num);
  };

  const handleClear = () => {
    setAnswer('');
  };

  const handleSubmit = () => {
    if (parseInt(answer) === a + b) {
      const pts = difficulty === 'easy' ? 1 : difficulty === 'normal' ? 3 : 5;
      onCorrect(pts);
    } else {
      alert('不正解！');
    }
  };

  return (
    <div>
      <p>問題: {a} + {b} = ? （難易度: {difficulty}）</p>
      <div>
        <input type="text" value={answer} readOnly />
      </div>
      <div className="calculator">
        {[1,2,3,4,5,6,7,8,9,0].map((n) => (
          <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>
        ))}
        <button onClick={handleClear}>クリア</button>
        <button onClick={handleSubmit}>回答</button>
      </div>
    </div>
  );
}

export default Question;
