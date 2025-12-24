import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Gacha from './components/Gacha';
import MapCollection from './components/MapCollection';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('math-game-points');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [obtained, setObtained] = useState(() => {
    const saved = localStorage.getItem('obtained-prefectures');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('math-game-points', points);
    localStorage.setItem('obtained-prefectures', JSON.stringify(obtained));
  }, [points, obtained]);

  const handleReset = () => {
    if (window.confirm("これまでの記録をすべて消して、最初からやり直しますか？")) {
      setObtained([]);
      setPoints(0);
      localStorage.clear();
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw',
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
      backgroundColor: '#f1f5f9'
    }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '10px', 
        backgroundColor: '#1e40af', 
        color: 'white', 
        borderRadius: '12px', 
        marginBottom: '10px',
        position: 'relative'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>RPG算数：日本制覇</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        <button onClick={handleReset} style={resetBtnStyle}>データを消す</button>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '260px 1fr', // 左側を固定、右側を最大化
        gap: '15px',
        flex: 1,
        minHeight: 0 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}>
          <section style={cardStyle('#22c55e')}>
            <h2 style={cardTitleStyle('#16a34a')}>⚔️ 算数</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>
          <section style={cardStyle('#eab308')}>
            <h2 style={cardTitleStyle('#ca8a04')}>💎 ガチャ</h2>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        <section style={{ ...cardStyle('#3b82f6'), display: 'flex', flexDirection: 'column' }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

const cardStyle = (borderColor) => ({
  padding: '15px',
  border: `2px solid ${borderColor}`,
  borderRadius: '12px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
});

const cardTitleStyle = (color) => ({
  marginTop: 0,
  fontSize: '16px',
  color: color,
  marginBottom: '10px'
});

const resetBtnStyle = {
  position: 'absolute',
  right: '10px',
  top: '10px',
  fontSize: '10px',
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: 'white',
  border: '1px solid white',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default App;
