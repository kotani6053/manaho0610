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
    if (window.confirm("リセットしますか？")) {
      setObtained([]); setPoints(0); localStorage.clear();
    }
  };

  return (
    <div style={{ 
      height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', 
      padding: '5px 10px', boxSizing: 'border-box', backgroundColor: '#f8fafc', overflow: 'hidden' 
    }}>
      {/* ヘッダーをスリム化 */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '5px 15px', backgroundColor: '#1e40af', color: 'white', borderRadius: '8px', marginBottom: '5px' 
      }}>
        <h1 style={{ margin: 0, fontSize: '16px' }}>RPG算数</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        <button onClick={handleReset} style={{ fontSize: '9px', color: '#bfdbfe', background: 'none', border: '1px solid #3b82f6', borderRadius: '4px', cursor: 'pointer', padding: '2px 5px' }}>消す</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '10px', flex: 1, minHeight: 0 }}>
        {/* 左側：算数とガチャ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minHeight: 0 }}>
          <section style={{ padding: '8px', border: '1px solid #bbf7d0', borderRadius: '10px', backgroundColor: 'white', flex: 1 }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#16a34a' }}>⚔️ 算数</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>
          
          <section style={{ padding: '8px', border: '1px solid #fef08a', borderRadius: '10px', backgroundColor: 'white', flex: 1 }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#ca8a04' }}>💎 ガチャ</h2>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        {/* 右側：地図エリア */}
        <section style={{ 
          padding: '8px', border: '1px solid #bfdbfe', borderRadius: '10px', 
          backgroundColor: 'white', display: 'flex', flexDirection: 'column', minHeight: 0 
        }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
