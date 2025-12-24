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
    if (window.confirm("データをすべて消して、さいしょからやり直しますか？")) {
      setObtained([]); setPoints(0); localStorage.clear();
    }
  };

  return (
    <div style={{ 
      height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', 
      padding: '10px 40px', boxSizing: 'border-box', backgroundColor: '#f8fafc', 
      overflow: 'hidden', maxWidth: '1200px', margin: '0 auto' 
    }}>
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '8px 20px', backgroundColor: '#1e40af', color: 'white', borderRadius: '10px', marginBottom: '10px' 
      }}>
        <h1 style={{ margin: 0, fontSize: '18px' }}>RPGさんすう：にほんせいはおう</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <ScoreBoard points={points} collectionCount={obtained.length} />
          <button onClick={handleReset} style={{ fontSize: '10px', color: '#bfdbfe', background: 'none', border: '1px solid #3b82f6', borderRadius: '4px', cursor: 'pointer', padding: '2px 8px' }}>リセット</button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px', flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <section style={{ padding: '12px', border: '1px solid #bbf7d0', borderRadius: '12px', backgroundColor: 'white' }}>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#16a34a' }}>⚔️ ぼうけん (さんすう)</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} obtainedCount={obtained.length} />
          </section>
          
          <section style={{ padding: '12px', border: '1px solid #fef08a', borderRadius: '12px', backgroundColor: 'white' }}>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#ca8a04' }}>💎 ガチャ</h2>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        <section style={{ 
          padding: '15px', border: '1px solid #bfdbfe', borderRadius: '15px', 
          backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column'
        }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
