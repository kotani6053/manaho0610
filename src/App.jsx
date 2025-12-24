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
    if (window.confirm("データをリセットしますか？")) {
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
      padding: '15px 30px', // 左右の余白を増やして圧迫感を軽減
      boxSizing: 'border-box', 
      backgroundColor: '#f8fafc',
      maxWidth: '1200px', // 全体の幅が広がりすぎないように
      margin: '0 auto'
    }}>
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#1e40af', color: 'white', borderRadius: '10px', marginBottom: '15px', position: 'relative' }}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>RPG算数：日本制覇</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        <button onClick={handleReset} style={{ position: 'absolute', right: '10px', top: '10px', fontSize: '10px', color: '#bfdbfe', background: 'none', border: '1px solid #60a5fa', borderRadius: '4px', cursor: 'pointer' }}>リセット</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '20px', flex: 1, minHeight: 0 }}>
        {/* 左側：操作系を少しスリムに */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <section style={{ padding: '12px', border: '1px solid #bbf7d0', borderRadius: '10px', backgroundColor: 'white' }}>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>
          <section style={{ padding: '12px', border: '1px solid #fef08a', borderRadius: '10px', backgroundColor: 'white' }}>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        {/* 右側：地図エリア */}
        <section style={{ 
          padding: '15px', 
          border: '1px solid #bfdbfe', 
          borderRadius: '12px', 
          backgroundColor: 'white',
          overflow: 'hidden'
        }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
