import React, { useState } from 'react';
import { PREFECTURES } from './constants'; // 上記のデータ

function Gacha({ points, setPoints, obtained, setObtained }) {
  const [result, setResult] = useState(null);
  const GACHA_COST = 100; // 1回100ポイント

  const drawGacha = () => {
    if (points < GACHA_COST) {
      alert("ポイントが足りません！算数で貯めてね。");
      return;
    }

    // 1. ポイント消費
    setPoints(prev => prev - GACHA_COST);

    // 2. ランダム抽選
    const randomIndex = Math.floor(Math.random() * PREFECTURES.length);
    const selected = PREFECTURES[randomIndex];

    // 3. 結果を保存（重複チェック）
    setResult(selected);
    if (!obtained.includes(selected)) {
      setObtained(prev => [...prev, selected]);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">日本地図ガチャ</h2>
      <p className="mb-2">現在のポイント: {points} pt</p>
      
      <button 
        onClick={drawGacha}
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-transform active:scale-95"
      >
        100ptでガチャを引く！
      </button>

      {result && (
        <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded animate-bounce">
          <p className="text-sm text-blue-600">ガチャの結果...</p>
          <p className="text-2xl font-black">{result}</p>
          {obtained.filter(p => p === result).length > 1 ? 
            <span className="text-xs text-red-500">（ダブリ！）</span> : 
            <span className="text-xs text-green-500">（NEW!）</span>
          }
        </div>
      )}
    </div>
  );
}
