import React from 'react';

// 位置データ（topの値を少しずつ詰めて、全体を上に寄せています）
const PREFECTURES = [
  { name: "北海道", top: "2%", left: "70%", width: "60px", height: "40px" },
  { name: "青森", top: "16%", left: "66%" }, { name: "秋田", top: "22%", left: "64%" }, { name: "岩手", top: "22%", left: "70%" },
  { name: "山形", top: "28%", left: "63%" }, { name: "宮城", top: "28%", left: "69%" }, { name: "福島", top: "34%", left: "66%" },
  { name: "新潟", top: "31%", left: "56%" }, { name: "富山", top: "37%", left: "51%" }, { name: "石川", top: "34%", left: "46%" },
  { name: "福井", top: "42%", left: "44%" }, { name: "長野", top: "40%", left: "56%" }, { name: "岐阜", top: "45%", left: "51%" },
  { name: "群馬", top: "39%", left: "62%" }, { name: "栃木", top: "39%", left: "67%" }, { name: "茨城", top: "44%", left: "69%" },
  { name: "千葉", top: "52%", left: "69%" }, { name: "埼玉", top: "45%", left: "64%" }, { name: "東京", top: "50%", left: "64%" },
  { name: "神奈川", top: "55%", left: "63%" }, { name: "山梨", top: "46%", left: "59%" }, { name: "静岡", top: "52%", left: "58%" },
  { name: "愛知", top: "51%", left: "52%" }, { name: "三重", top: "58%", left: "48%" }, { name: "滋賀", top: "49%", left: "46%" },
  { name: "京都", top: "47%", left: "41%" }, { name: "奈良", top: "55%", left: "43%" }, { name: "和歌山", top: "62%", left: "42%" },
  { name: "大阪", top: "52%", left: "39%" }, { name: "兵庫", top: "49%", left: "34%" }, { name: "鳥取", top: "44%", left: "30%" },
  { name: "島根", top: "46%", left: "24%" }, { name: "岡山", top: "51%", left: "29%" }, { name: "広島", top: "52%", left: "23%" },
  { name: "山口", top: "54%", left: "16%" }, { name: "香川", top: "59%", left: "28%" }, { name: "徳島", top: "60%", left: "33%" },
  { name: "愛媛", top: "62%", left: "22%" }, { name: "高知", top: "66%", left: "27%" }, { name: "福岡", top: "62%", left: "11%" },
  { name: "佐賀", top: "65%", left: "6%" }, { name: "長崎", top: "68%", left: "3%" }, { name: "大分", top: "66%", left: "15%" },
  { name: "熊本", top: "71%", left: "10%" }, { name: "宮崎", top: "74%", left: "16%" }, { name: "鹿児島", top: "78%", left: "9%" },
  { name: "沖縄", top: "85%", left: "30%" }
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <h2 style={{ margin: 0, fontSize: '14px', color: '#1e3a8a' }}>🗾 日本地図</h2>
        <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{obtained.length}/47</span>
      </div>
      
      <div style={{ flex: 1, backgroundColor: '#f0f9ff', borderRadius: '8px', position: 'relative', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        {PREFECTURES.map(pref => {
          const isObtained = obtained.includes(pref.name) || obtained.includes(pref.name + "県") || obtained.includes(pref.name + "府") || obtained.includes(pref.name + "都");
          return (
            <div key={pref.name} style={{
              position: 'absolute', top: pref.top, left: pref.left,
              width: pref.width || '32px', height: pref.height || '22px',
              backgroundColor: isObtained ? '#3b82f6' : '#ffffff',
              color: isObtained ? '#000' : '#cbd5e1',
              border: isObtained ? '1px solid #1d4ed8' : '1px solid #f1f5f9',
              borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '10px', fontWeight: 'bold', zIndex: isObtained ? 10 : 1, whiteSpace: 'nowrap'
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
