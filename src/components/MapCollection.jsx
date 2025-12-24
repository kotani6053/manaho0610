import React from 'react';

const MAP_LAYOUT = [
  // 北海道・東北
  { name: "北海道", grid: "1 / 8 / 3 / 10" },
  { name: "青森", grid: "3 / 7 / 4 / 8" }, { name: "秋田", grid: "4 / 7 / 5 / 8" }, { name: "岩手", grid: "4 / 8 / 5 / 9" },
  { name: "山形", grid: "5 / 7 / 6 / 8" }, { name: "宮城", grid: "5 / 8 / 6 / 9" }, { name: "福島", grid: "6 / 7 / 7 / 9" },
  // 関東
  { name: "群馬", grid: "7 / 7 / 8 / 8" }, { name: "栃木", grid: "7 / 8 / 8 / 9" },
  { name: "埼玉", grid: "8 / 7 / 9 / 8" }, { name: "茨城", grid: "8 / 8 / 9 / 9" },
  { name: "東京", grid: "9 / 7 / 10 / 8" }, { name: "千葉", grid: "9 / 8 / 11 / 9" }, { name: "神奈川", grid: "10 / 7 / 11 / 8" },
  // 中部
  { name: "新潟", grid: "5 / 6 / 7 / 7" }, { name: "長野", grid: "7 / 6 / 9 / 7" }, { name: "山梨", grid: "9 / 6 / 10 / 7" },
  { name: "静岡", grid: "10 / 6 / 11 / 7" }, { name: "愛知", grid: "10 / 5 / 11 / 6" }, { name: "岐阜", grid: "8 / 5 / 10 / 6" },
  { name: "富山", grid: "7 / 5 / 8 / 6" }, { name: "石川", grid: "6 / 4 / 8 / 5" }, { name: "福井", grid: "8 / 4 / 9 / 5" },
  // 近畿
  { name: "滋賀", grid: "9 / 4 / 10 / 5" }, { name: "三重", grid: "10 / 4 / 12 / 5" },
  { name: "京都", grid: "9 / 3 / 10 / 4" }, { name: "大阪", grid: "10 / 3 / 11 / 4" },
  { name: "兵庫", grid: "9 / 2 / 11 / 3" }, { name: "奈良", grid: "11 / 3 / 12 / 4" }, { name: "和歌山", grid: "12 / 3 / 13 / 4" },
  // 中国・四国
  { name: "鳥取", grid: "9 / 1 / 10 / 2" }, { name: "島根", grid: "9 / 0 / 10 / 1" },
  { name: "岡山", grid: "10 / 1 / 11 / 2" }, { name: "広島", grid: "10 / 0 / 11 / 1" }, { name: "山口", grid: "11 / 0 / 12 / 1" },
  { name: "香川", grid: "12 / 1 / 13 / 2" }, { name: "徳島", grid: "12 / 2 / 13 / 3" },
  { name: "愛媛", grid: "13 / 1 / 14 / 2" }, { name: "高知", grid: "13 / 2 / 14 / 3" },
  // 九州・沖縄
  { name: "福岡", grid: "12 / 0 / 13 / 1" }, { name: "大分", grid: "13 / 0 / 14 / 1" },
  { name: "佐賀", grid: "14 / 0 / 15 / 1" }, { name: "長崎", grid: "15 / 0 / 16 / 1" },
  { name: "熊本", grid: "16 / 0 / 17 / 1" }, { name: "宮崎", grid: "17 / 1 / 18 / 2" },
  { name: "鹿児島", grid: "17 / 0 / 19 / 1" }, { name: "沖縄", grid: "19 / 2 / 20 / 3" }
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <h2 style={{ margin: 0, fontSize: '16px', color: '#1e3a8a' }}>🗾 日本地図パズル</h2>
        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#3b82f6' }}>{obtained.length} / 47</span>
      </div>
      
      <div style={{ 
        width: '100%',
        maxWidth: '500px', // 地図が横に広がりすぎないように制限
        aspectRatio: '1 / 1.5', // 縦長にして列島の形を保つ
        display: 'grid', 
        gridTemplateColumns: 'repeat(10, 1fr)', 
        gridTemplateRows: 'repeat(20, 1fr)', 
        gap: '2px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px',
        padding: '8px',
        border: '1px solid #e0f2fe'
      }}>
        {MAP_LAYOUT.map(pref => {
          const isObtained = obtained.includes(pref.name) || obtained.includes(pref.name + "県") || obtained.includes(pref.name + "府");
          return (
            <div key={pref.name} style={{
              gridArea: pref.grid,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '9px',
              fontWeight: 'bold',
              borderRadius: '2px',
              backgroundColor: isObtained ? '#3b82f6' : '#fff',
              color: isObtained ? 'white' : '#cbd5e1',
              border: isObtained ? '1px solid #2563eb' : '1px solid #f1f5f9',
              zIndex: isObtained ? 2 : 1,
            }}>
              {pref.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapCollection;
