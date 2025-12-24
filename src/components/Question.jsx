import React, { useState, useEffect, useCallback } from 'react';

function Question({ onCorrect }) {
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [answer, setAnswer] = useState('');

  const generateQuestion = useCallback(() => {
    const rand = Math.random();
    const diff = rand < 0.33 ? 'easy' : rand < 0.66 ? 'normal' : 'hard';
    setDifficulty(diff);

    let a, b, c, type, text, result;
    const max = diff === 'easy' ? 10 : diff === 'normal' ? 30 : 50;

    // 3つの数を生成
    a = Math.floor(Math.random() * max) + 5;
    b = Math.floor(Math.random() * max) + 5;
    c = Math.floor(Math.random() * (a + b - 5)) + 1; // 答えがマイナスにならないように調整

    // パターンの抽選 (0: a+b+c, 1: a+b-c, 2: a-b+c)
    const pattern = Math.floor(Math.random() * 3);

    if (pattern === 0) {
      result = a + b + c;
      text = `${a} + ${b} + ${c}`;
    } else if (pattern === 1) {
      result = a + b - c;
      text = `${a} + ${b} - ${c}`;
    } else {
      // a-b+c の場合、a > b である必要がある
      if (a < b) [a, b] = [b, a]; 
      result = a - b + c;
      text = `${a} - ${b} + ${c}`;
    }

    setQuestionText(text);
    setCorrectAnswer(result);
    setAnswer('');
  }, []);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleClick = (num) => setAnswer(prev => prev + num);
  const handleClear = () => setAnswer('');
  
  const handleSubmit = () => {
    if (parseInt(answer) === correctAnswer) {
      const pts = difficulty === 'easy' ? 5 : difficulty === 'normal' ? 15 : 30;
      onCorrect(pts); // 難易度に応じてポイントアップ
      generateQuestion();
    } else {
      alert(`ざんねん！ 正解は ${correctAnswer} でした。`);
      setAnswer('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', minHeight: '33px' }}>
        {questionText} = {answer || '?'}
      </div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
        レベル: {difficulty.toUpperCase()}
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '8px', 
        maxWidth: '220px', 
        margin: '0 auto' 
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())} style={btnStyle}>{n}</button>
        ))}
        <button onClick={handleClear} style={{ ...btnStyle, backgroundColor: '#fee2e2' }}>C</button>
        <button onClick={() => handleClick('0')} style={btnStyle}>0</button>
        <button onClick={handleSubmit} style={{ ...btnStyle, backgroundColor: '#dcfce7', gridColumn: 'span 3', fontWeight: 'bold' }}>回答する</button>
      </div>
    </div>
  );
}

// Question.jsx の return 部分のボタンスタイルを調整
const btnStyle = {
  padding: '8px', // 12pxから8pxに短縮
  fontSize: '18px',
  cursor: 'pointer',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 0 #eee'
};

export default Question;
