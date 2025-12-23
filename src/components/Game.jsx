import React, { useState, useEffect } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import Gacha from './Gacha';
import MapCollection from './MapCollection';

function Game() {
  // 1. データの永続化（ブラウザに保存）
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('game-points');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [obtained, setObtained] = useState(() => {
    const saved = localStorage.getItem('game-obtained');
    return saved ? JSON.parse(saved) : [];
  });

  // ポイントや獲得状況が変わるたびに保存
  useEffect(() => {
    localStorage.setItem('game-points', points);
    localStorage.setItem('game-obtained', JSON.stringify(obtained));
  }, [points, obtained]);

  // 正解した時の処理
  const handleCorrect = (pts) => {
    setPoints(prev => prev + pts);
  };

  // ガチャを引いた時の処理
  const handleDraw = (pref) => {
    const COST = 5;
    if (points >= COST) {
      setPoints(prev => prev - COST);
      
      // 重複チェック：まだ持っていない場合のみ追加
      if (!obtained.includes(pref)) {
        setObtained(prev => [...prev, pref]);
      } else {
        alert(`${pref} はもう持っています！（ダブリ）`);
      }
    } else {
      alert("ポイントが足りません！");
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      padding: '20px',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ maxWidth: '400px' }}>
        <ScoreBoard points={points} count={obtained.length} />
        
        <div style={{ marginTop: '20px', padding: '15px', border: '2px solid #e2e8f0', borderRadius: '12px' }}>
          <h3 style={{ marginTop: 0 }}>⚔️ 算数クエスト</h3>
          <Question onCorrect={handleCorrect} />
        </div>

        <div style={{ marginTop: '20px', padding: '15px', border: '2px solid #fef3c7', borderRadius: '12px', backgroundColor: '#fffbeb' }}>
          <h3 style={{ marginTop: 0 }}>💎 ガチャ（1回 5pt）</h3>
          <Gacha points={points} cost={5} obtained={obtained} onDraw={handleDraw} />
        </div>
      </div>

      <div style={{ flex: 1, marginLeft: '40px' }}>
        <MapCollection obtained={obtained} />
      </div>
    </div>
  );
}

export default Game;
