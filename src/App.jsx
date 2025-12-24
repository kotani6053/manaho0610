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

  // 【修正】ピースとポイントをすべてゼロにする関数
  const handleReset = () => {
    if (window.confirm("これまでの記録をすべて消して、最初からやり直しますか？")) {
      setObtained([]); // 地図を空にする
      setPoints(0);    // ポイントも0にする
      localStorage.clear(); // 保存データも削除
    }
  };

  return (
    <div style={{ 
      height: '100vh', 
      maxHeight: '100vh', 
      overflow: 'hidden', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
      backgroundColor: '#f8fafc'
    }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '10px', 
        backgroundColor: '#2563eb', 
        color: 'white', 
        borderRadius: '10px', 
        marginBottom: '10px',
        position: 'relative'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px' }}>RPG算数：日本制覇</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        
        {/* 小さいリセットボタン */}
        <button 
          onClick={handleReset}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px',
            fontSize: '10px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '1px solid white',
            borderRadius: '4px',
            cursor: 'pointer',
            padding: '2px 5px'
          }}
        >
          データを消す
        </button>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1.5fr', 
        gap: '10px',
        flex: 1,
        minHeight: 0 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'auto' }}>
          <section style={{ padding: '15px', border: '2px solid #22c55e', borderRadius: '10px', backgroundColor: 'white' }}>
            <h2 style={{ marginTop: 0, fontSize: '16px', color: '#16a34a' }}>⚔️ 算数クエスト</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>

          <section style={{ padding: '15px', border: '2px solid #eab308', borderRadius: '10px', backgroundColor: 'white' }}>
            <h2 style={{ marginTop: 0, fontSize: '16px', color: '#ca8a04' }}>💎 ガチャ</h2>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
        </div>

        <section style={{ 
          padding: '10px', 
          border: '2px solid #3b82f6', 
          borderRadius: '10px', 
          backgroundColor: 'white',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <MapCollection obtained={obtained} />
        </section>
      </div>
    </div>
  );
}

export default App;
