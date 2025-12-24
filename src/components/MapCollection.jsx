import React from 'react';

const MAP_LAYOUT = [
  { name: "北海道", grid: "1 / 9 / 3 / 11" },
  { name: "青森県", grid: "3 / 8 / 4 / 9" }, { name: "岩手県", grid: "4 / 8 / 5 / 9" },
  { name: "秋田県", grid: "4 / 7 / 5 / 8" }, { name: "宮城県", grid: "5 / 8 / 6 / 9" },
  { name: "山形県", grid: "5 / 7 / 6 / 8" }, { name: "福島県", grid: "6 / 7 / 7 / 9" },
  { name: "茨城県", grid: "7 / 8 / 8 / 9" }, { name: "栃木県", grid: "7 / 7 / 8 / 8" },
  { name: "群馬県", grid: "8 / 7 / 9 / 8" }, { name: "埼玉県", grid: "8 / 8 / 9 / 9" },
  { name: "千葉県", grid: "9 / 9 / 11 / 10" }, { name: "東京都", grid: "9 / 8 / 10 / 9" },
  { name: "神奈川県", grid: "10 / 8 / 11 / 9" }, { name: "新潟県", grid: "6 / 6 / 8 / 7" },
  { name: "富山県", grid: "8 / 6 / 9 / 7" }, { name: "石川県", grid: "7 / 5 / 8 / 6" },
  { name: "福井県", grid: "9 / 5 / 10 / 6" }, { name: "山梨県", grid: "9 / 7 / 10 / 8" },
  { name: "長野県", grid: "8 / 6 / 10 / 7" }, { name: "岐阜県", grid: "9 / 6 / 11 / 7" },
  { name: "静岡県", grid: "10 / 7 / 11 / 8" }, { name: "愛知県", grid: "11 / 7 / 12 / 8" },
  { name: "三重県", grid: "12 / 6 / 13 / 7" }, { name: "滋賀県", grid: "11 / 6 / 12 / 7" },
  { name: "京都府", grid: "10 / 5 / 11 / 6" }, { name: "大阪府", grid: "11 / 5 / 12 / 6" },
  { name: "兵庫県", grid: "10 / 4 / 12 / 5" }, { name: "奈良県", grid: "12 / 5 / 13 / 6" },
  { name: "和歌山県", grid: "13 / 5 / 14 / 6" }, { name: "鳥取県", grid: "10 / 3 / 11 / 4" },
  { name: "島根県", grid: "10 / 2 / 11 / 3" }, { name: "岡山県", grid: "11 / 3 / 12 / 4" },
  { name: "広島県", grid: "11 / 2 / 12 / 3" }, { name: "山口県", grid: "11 / 1 / 12 / 2" },
  { name: "徳島県", grid: "13 / 3 / 14 / 4" }, { name: "香川県", grid: "12 / 3 / 13 / 4" },
  { name: "愛媛県", grid: "12 / 2 / 13 / 3" }, { name: "高知県", grid: "13 / 2 / 14 / 3" },
  { name: "福岡県", grid: "13 / 1 / 14 / 2" }, { name: "佐賀県", grid: "14 / 1 / 15 / 2" },
  { name: "長崎県", grid: "14 / 0 / 15 / 1" }, { name: "熊本県", grid: "15 / 1 / 16 / 2" },
  { name: "大分県", grid: "14 / 2 / 15 / 3" }, { name: "宮崎県", grid: "16 / 2 / 17 / 3" },
  { name: "鹿児島県", grid: "16 / 1 / 18 / 2" }, { name: "沖縄県", grid: "18 / 0 / 19 / 1" }
];

function MapCollection({ obtained }) {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#1e3a8a' }}>🗾 日本地図パズル</h2>
        <span style={{ fontWeight: 'bold', color: '#3b82f6', backgroundColor: '#eff6ff', padding: '4px 10px', borderRadius: '10px' }}>
          {obtained.length} / 47 達成
        </span>
      </div>
      
      <div style={{ 
        flex: 1, 
        display: 'grid', 
        gridTemplateColumns: 'repeat(11, 1fr)', 
        gridTemplateRows: 'repeat(19, 1fr)', 
        gap: '2px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '12px',
        padding: '10px',
        border: '1px solid #e0f2fe'
      }}>
        {MAP_LAYOUT.map(pref => {
          const isObtained = obtained.includes(pref.name);
          return (
            <div key={pref.name} style={{
              gridArea: pref.grid,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold',
              borderRadius: '3px',
              transition: 'all 0.3s ease',
              backgroundColor: isObtained ? '#3b82f6' : '#fff',
              color: isObtained ? 'white' : '#cbd5e1',
              border: isObtained ? '1px solid #2563eb' : '1px solid #f1f5f9',
              boxShadow: isObtained ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
              zIndex: isObtained ? 2 : 1,
              whiteSpace: 'nowrap'
            }}>
              {pref.name.replace('県', '').replace('府', '').replace('東京都', '東京').replace('北海道', '北海')}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapCollection;
