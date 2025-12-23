import React, { useState } from 'react';

// 都道府県リストをファイル内に直接書くことで、constants エラーを防ぎます
const PREFECTURES_LIST = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

function Gacha({ points, setPoints, obtained, setObtained }) {
  const COST = 5;
  const [result, setResult] = useState(null);

  const draw = () => {
    if (points < COST) {
      alert("ポイントが足りないよ！算数でためてね。");
      return;
    }

    setPoints(prev => prev - COST);
    const picked = PREFECTURES_LIST[Math.floor(Math.random() * PREFECTURES_LIST.length)];
    setResult(picked);

    if (!obtained.includes(picked)) {
      setObtained(prev => [...prev, picked]);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button 
        onClick={draw}
        style={{
          backgroundColor: '#eab308',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 0 #ca8a04'
        }}
      >
        ガチャを引く ({COST}pt)
      </button>
      
      {result && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '10px', border: '2px dashed #3b82f6' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>ガチャの結果...</p>
          <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#1d4ed8', margin: '10px 0' }}>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Gacha;
