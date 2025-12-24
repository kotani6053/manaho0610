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
    if (window.confirm("これまでの記録をすべて消して最初からやり直しますか？")) {
      setObtained([]);
      setPoints(0);
      localStorage.clear();
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '20px 40px', 
      boxSizing: 'border-box', 
      backgroundColor: '#f8fafc',
      maxWidth: '1100px', // デスクトップで横に広がりすぎない
      margin: '0 auto'
    }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '12px', 
        backgroundColor: '#1e40af', 
        color: 'white', 
        borderRadius: '15px', 
        marginBottom: '20px', 
        position: 'relative',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>RPG算数：日本制覇</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        <button onClick={handleReset} style={{ position: 'absolute', right: '15px', top: '15px', fontSize: '11px', color: '#bfdbfe', background: 'none', border: '1px solid #3b82f6', borderRadius: '6px', cursor: 'pointer', padding: '4px 8px' }}>リセット</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '25px', flex: 1, minHeight: 0 }}>
        {/* 左側：操作パネル */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <section style={{ padding: '15px', border: '1px solid #bbf7d0', borderRadius: '15px', backgroundColor: 'white' }}>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>
          <section style={{ padding: '15px', border: '1px solid #fef08a', borderRadius: '15px', backgroundColor: 'white' }}>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        {/* 右側：地図エリア（ここがSVGで綺麗に表示される） */}
        <section style={{ 
          padding: '10px', 
          border: '1px solid #bfdbfe', 
          borderRadius: '20px', 
          backgroundColor: 'white',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
