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

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '15px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>RPG算数：日本制覇への道</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <section style={{ padding: '20px', border: '2px solid #22c55e', borderRadius: '15px', backgroundColor: 'white' }}>
            <h2 style={{ marginTop: 0, color: '#16a34a' }}>⚔️ 算数クエスト</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>

          <section style={{ padding: '20px', border: '2px solid #eab308', borderRadius: '15px', backgroundColor: 'white' }}>
            <h2 style={{ marginTop: 0, color: '#ca8a04' }}>💎 ガチャ</h2>
            <Gacha 
              points={points} 
              setPoints={setPoints} 
              obtained={obtained} 
              setObtained={setObtained} 
            />
          </section>
        </div>

        <section style={{ padding: '20px', border: '2px solid #3b82f6', borderRadius: '15px', backgroundColor: 'white' }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
