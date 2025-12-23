import React, { useState, useEffect, useCallback } from 'react';

function Question({ onCorrect }) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [answer, setAnswer] = useState('');

  // 新しい問題を作る関数を独立させます
  const generateQuestion = useCallback(() => {
    const rand = Math.random();
    const diff = rand < 0.33 ? 'easy' : rand < 0.66 ? 'normal' : 'hard';
    setDifficulty(diff);
    const max = diff === 'easy' ? 9 : diff === 'normal' ? 20 : 50;
    setA(Math.floor(Math.random() * max) + 1);
    setB(Math.floor(Math.random() * max) + 1);
    setAnswer('');
  }, []);

  // 最初の一回だけ問題を出す
  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleClick = (num) => setAnswer(prev => prev + num);
  const handleClear = () => setAnswer('');
  
  const handleSubmit = () => {
    if (parseInt(answer) === a + b) {
      const pts = difficulty === 'easy' ? 5 : difficulty === 'normal' ? 10 : 20;
      onCorrect(pts); // ポイント加算
      generateQuestion(); // 正解したら次の問題へ
    } else {
      alert('ざんねん！まちがいだよ。');
      setAnswer('');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
        {a} + {b} = {answer || '?'}
      </div>
      <div style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
        レベル: {difficulty}
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '5px', 
        maxWidth: '200px', 
        margin: '0 auto' 
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())} style={btnStyle}>{n}</button>
        ))}
        <button onClick={handleClear} style={{ ...btnStyle, backgroundColor: '#ffedd5' }}>C</button>
        <button onClick={() => handleClick('0')} style={btnStyle}>0</button>
        <button onClick={handleSubmit} style={{ ...btnStyle, backgroundColor: '#dcfce7', gridColumn: 'span 3' }}>回答する</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px',
  fontSize: '18px',
  cursor: 'pointer',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff'
};

export default Question;
