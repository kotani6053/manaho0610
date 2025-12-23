import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Gacha from './components/Gacha';
import MapCollection from './components/MapCollection';
import ScoreBoard from './components/ScoreBoard';

function App() {
  // 1. ポイント管理（初期値はlocalStorageから取得、なければ0）
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('math-game-points');
    return saved ? parseInt(saved, 10) : 0;
  });

  // 2. 獲得済み都道府県リスト
  const [obtained, setObtained] = useState(() => {
    const saved = localStorage.getItem('obtained-prefectures');
    return saved ? JSON.parse(saved) : [];
  });

  // データが更新されるたびに保存する
  useEffect(() => {
    localStorage.setItem('math-game-points', points);
    localStorage.setItem('obtained-prefectures', JSON.stringify(obtained));
  }, [points, obtained]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <header className="text-center py-6 bg-blue-600 text-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-black">RPG算数：日本制覇への道</h1>
        <ScoreBoard points={points} collectionCount={obtained.length} />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 左側：ゲームとガチャ */}
        <div className="space-y-6">
          <section className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500">
            <h2 className="font-bold mb-2">⚔️ 算数でポイントをためる</h2>
            {/* 正解した時にポイントを加算する関数を渡す */}
            <Game onWin={(p) => setPoints(prev => prev + p)} />
          </section>

          <section className="bg-white p-4 rounded-lg shadow border-t-4 border-yellow-500">
            <h2 className="font-bold mb-2">💎 ガチャを回す</h2>
            <Gacha 
              points={points} 
              setPoints={setPoints} 
              obtained={obtained} 
              setObtained={setObtained} 
            />
          </section>
        </div>

        {/* 右側：コレクション表示 */}
        <section className="bg-white p-4 rounded-lg shadow border-t-4 border-blue-500">
          <h2 className="font-bold mb-2">🗾 日本地図コレクション</h2>
          <MapCollection obtained={obtained} />
        </section>
      </main>
    </div>
  );
}

export default App;
