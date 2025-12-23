import React, { useState, useEffect } from 'react';

function Question({ onAnswer }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setA(Math.floor(Math.random() * 10) + 1);
    setB(Math.floor(Math.random() * 10) + 1);
    setAnswer('');
  }, [onAnswer]);

  const checkAnswer = () => {
    const isCorrect = parseInt(answer) === a + b;
    onAnswer(isCorrect);
  };

  return (
    <div className="question">
      <p>問題: {a} + {b} = ?</p>
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
