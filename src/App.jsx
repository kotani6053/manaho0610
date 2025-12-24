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
    if (window.confirm("記録をリセットしますか？")) {
      setObtained([]);
      setPoints(0);
      localStorage.clear();
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', padding: '10px', boxSizing: 'border-box', backgroundColor: '#f8fafc' }}>
      <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#1e40af', color: 'white', borderRadius: '12px', marginBottom: '10px', position: 'relative' }}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>RPG算数：日本制覇</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        <button onClick={handleReset} style={{ position: 'absolute', right: '10px', top: '10px', fontSize: '10px', color: 'white', background: 'none', border: '1px solid white', borderRadius: '4px', cursor: 'pointer' }}>リセット</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '15px', flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <section style={{ padding: '15px', border: '2px solid #22c55e', borderRadius: '12px', backgroundColor: 'white' }}>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>
          <section style={{ padding: '15px', border: '2px solid #eab308', borderRadius: '12px', backgroundColor: 'white' }}>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>
        <section style={{ padding: '15px', border: '2px solid #3b82f6', borderRadius: '12px', backgroundColor: 'white' }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
