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
      backgroundColor: '#f1f5f9',
      fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif'
    }}>
      <header style={{ 
        textAlign: 'center', 
        padding: '8px', 
        backgroundColor: '#1e40af', 
        color: 'white', 
        borderRadius: '12px', 
        marginBottom: '10px',
        position: 'relative',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '18px', letterSpacing: '1px' }}>RPG算数：日本制覇への道</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
        
        <button 
          onClick={handleReset}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '10px',
            backgroundColor: 'rgba(255,255,255,0.15)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '6px',
            cursor: 'pointer',
            padding: '4px 8px'
          }}
        >
          データを消す
        </button>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '280px 1fr', // 左側を固定し、右側（地図）を最大化
        gap: '12px',
        flex: 1,
        minHeight: 0 
      }}>
        {/* 左側：操作パネル */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', paddingRight: '4px' }}>
          <section style={{ padding: '12px', border: '1px solid #bbf7d0', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ marginTop: 0, fontSize: '15px', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '5px' }}>⚔️ 算数クエスト</h2>
            <Game onWin={(pts) => setPoints(prev => prev + pts)} />
          </section>

          <section style={{ padding: '12px', border: '1px solid #fef08a', borderRadius: '12px', backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ marginTop: 0, fontSize: '15px', color: '#ca8a04', display: 'flex', alignItems: 'center', gap: '5px' }}>💎 ガチャ</h2>
            <Gacha points={points} setPoints={setPoints} obtained={obtained} setObtained={setObtained} />
          </section>
          
          <div style={{ marginTop: 'auto', padding: '10px', fontSize: '11px', color: '#94a3b8', textAlign: 'center' }}>
            全ての都道府県を集めて日本を完成させよう！
          </div>
        </div>

        {/* 右側：メイン地図エリア */}
        <section style={{ 
          padding: '15px', 
          border: '1px solid #bfdbfe', 
          borderRadius: '16px', 
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
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
