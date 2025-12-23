import React, { useState } from 'react';

// 47都道府県のリスト
const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

function Gacha({ points, cost, onDraw }) {
  const [lastResult, setLastResult] = useState(null);

  const pullGacha = () => {
    if (points < cost) {
      alert("ポイントが足りないよ！算数で貯めてね。");
      return;
    }

    // ランダムに1つ選択
    const randomIndex = Math.floor(Math.random() * PREFECTURES.length);
    const selectedPref = PREFECTURES[randomIndex];

    // 表示用の状態を更新
    setLastResult(selectedPref);

    // App.jsx の handleDraw を呼び出して、ポイント消費とコレクション追加を行う
    onDraw(selectedPref);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <button 
        onClick={pullGacha}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#fbbf24',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        ガチャを引く ({cost}pt)
      </button>

      {lastResult && (
        <div style={{ marginTop: '15px', animation: 'bounce 0.5s' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>ガチャの結果...</p>
          <strong style={{ fontSize: '24px', color: '#1d4ed8' }}>{lastResult}</strong>
        </div>
      )}
    </div>
  );
}

export default Gacha;
