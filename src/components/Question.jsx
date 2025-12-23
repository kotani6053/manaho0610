import React, { useState, useEffect } from 'react';

function Question({ onAnswer }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState('+');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const op = Math.random() < 0.5 ? '+' : '-';
    setOperator(op);
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    setA(op === '+' ? x : Math.max(x, y));
    setB(op === '+' ? y : Math.min(x, y));
    setAnswer('');
  }, [onAnswer]);

  const checkAnswer = () => {
    const correct = operator === '+' ? a + b : a - b;
    onAnswer(parseInt(answer) === correct);
  };

  return (
    <div className="question">
      <p>問題: {a} {operator} {b} = ?</p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>回答</button>
    </div>
  );
}

export default Question;
