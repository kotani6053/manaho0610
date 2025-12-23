import React from 'react';

// 日本地図の形を作るためのタイル座標データ (47都道府県)
// x: 左からの位置, y: 上からの位置 (グリッド単位)
const PREFECTURE_DATA = [
  { name: "北海道", x: 10, y: 0 },
  { name: "青森県", x: 10, y: 2 }, { name: "岩手県", x: 10, y: 3 },
  { name: "秋田県", x: 9, y: 3 }, { name: "宮城県", x: 10, y: 4 },
  { name: "山形県", x: 9, y: 4 }, { name: "福島県", x: 10, y: 5 },
  { name: "茨城県", x: 10, y: 6 }, { name: "栃木県", x: 9, y: 5 },
  { name: "群馬県", x: 8, y: 5 }, { name: "埼玉県", x: 9, y: 6 },
  { name: "千葉県", x: 10, y: 7 }, { name: "東京都", x: 9, y: 7 },
  { name: "神奈川県", x: 8, y: 7 }, { name: "新潟県", x: 8, y: 4 },
  { name: "富山県", x: 7, y: 4 }, { name: "石川県", x: 6, y: 4 },
  { name: "福井県", x: 6, y: 5 }, { name: "山梨県", x: 8, y: 6 },
  { name: "長野県", x: 7, y: 5 }, { name: "岐阜県", x: 6, y: 6 },
  { name: "静岡県", x: 7, y: 7 }, { name: "愛知県", x: 6, y: 7 },
  { name: "三重県", x: 5, y: 7 }, { name: "滋賀県", x: 5, y: 6 },
  { name: "京都府", x: 4, y: 6 }, { name: "大阪府", x: 4, y: 7 },
  { name: "兵庫県", x: 3, y: 6 }, { name: "奈良県", x: 5, y: 8 },
  { name: "和歌山県", x: 4, y: 8 }, { name: "鳥取県", x: 2, y: 6 },
  { name: "島根県", x: 1, y: 6 }, { name: "岡山県", x: 2, y: 7 },
  { name: "広島県", x: 1, y: 7 }, { name: "山口県", x: 0, y: 7 },
  { name: "徳島県", x: 2, y: 9 }, { name: "香川県", x: 2, y: 8 },
  { name: "愛媛県", x: 1, y: 8 }, { name: "高知県", x: 1, y: 9 },
  { name: "福岡県", x: 0, y: 9 }, { name: "佐賀県", x: -1, y: 9 },
  { name: "長崎県", x: -2, y: 9 }, { name: "熊本県", x: -1, y: 10 },
  { name: "大分県", x: 0, y: 10 }, { name: "宮崎県", x: 0, y: 11 },
  { name: "鹿児島県", x: -1, y: 11 }, { name: "沖縄県", x: -2, y: 12 },
];

function MapCollection({ obtained }) {
  const GRID_SIZE = 28; // タイル1つの大きさ

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '16px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      textAlign: 'center'
    }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
        🗾 日本地図パズル ({obtained.length} / 47)
      </h3>
      
      {/* パズルの土台 */}
      <div style={{
        position: 'relative',
        width: '360px',
        height: '420px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        border: '2px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        {PREFECTURE_DATA.map((pref) => {
          // Gacha.jsxで「県」をつけている場合はここも「県」ありで判定
          const isOwned = obtained.includes(pref.name);
          
          return (
            <div
              key={pref.name}
              style={{
                position: 'absolute',
                // 座標計算（xに3を足しているのは全体の中心に寄せるため）
                left: `${(pref.x + 2) * GRID_SIZE}px`,
                top: `${pref.y * GRID_SIZE}px`,
                width: `${GRID_SIZE - 2}px`,
                height: `${GRID_SIZE - 2}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                fontWeight: 'bold',
                borderRadius: '4px',
                transition: 'all 0.4s ease',
                // 獲得済みなら青系、未獲得なら薄いグレー
                backgroundColor: isOwned ? '#3b82f6' : '#f1f5f9',
                color: isOwned ? '#fff' : '#cbd5e1',
                border: isOwned ? '1px solid #2563eb' : '1px solid #e2e8f0',
                boxShadow: isOwned ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                transform: isOwned ? 'scale(1)' : 'scale(0.95)',
                zIndex: isOwned ? 10 : 1,
              }}
            >
              {pref.name.substring(0, 2)}
            </div>
          );
        })}
      </div>
      
      <div style={{ marginTop: '15px', fontSize: '12px', color: '#64748b' }}>
        {obtained.length === 47 ? "🎉 コンプリート！おめでとう！" : "算数でポイントを貯めてピースを集めよう！"}
      </div>
    </div>
  );
}

export default MapCollection;
