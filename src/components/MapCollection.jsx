import React from 'react';

// 都道府県の正確な位置関係を再現するためのデータ
const PREFECTURES = [
  { name: "北海道", top: "5%", left: "75%", width: "80px", height: "60px" },
  { name: "青森", top: "22%", left: "70%" }, { name: "秋田", top: "28%", left: "68%" }, { name: "岩手", top: "28%", left: "74%" },
  { name: "山形", top: "34%", left: "67%" }, { name: "宮城", top: "34%", left: "73%" }, { name: "福島", top: "40%", left: "70%" },
  { name: "新潟", top: "38%", left: "60%" }, { name: "富山", top: "43%", left: "55%" }, { name: "石川", top: "40%", left: "50%" },
  { name: "福井", top: "47%", left: "48%" }, { name: "長野", top: "45%", left: "60%" }, { name: "岐阜", top: "50%", left: "55%" },
  { name: "群馬", top: "45%", left: "66%" }, { name: "栃木", top: "45%", left: "71%" }, { name: "茨城", top: "50%", left: "73%" },
  { name: "千葉", top: "57%", left: "73%" }, { name: "埼玉", top: "51%", left: "68%" }, { name: "東京", top: "56%", left: "68%" },
  { name: "神奈川", top: "61%", left: "67%" }, { name: "山梨", top: "52%", left: "63%" }, { name: "静岡", top: "58%", left: "62%" },
  { name: "愛知", top: "57%", left: "56%" }, { name: "三重", top: "63%", left: "52%" }, { name: "滋賀", top: "55%", left: "50%" },
  { name: "京都", top: "53%", left: "45%" }, { name: "奈良", top: "60%", left: "47%" }, { name: "和歌山", top: "67%", left: "46%" },
  { name: "大阪", top: "58%", left: "43%" }, { name: "兵庫", top: "55%", left: "38%" }, { name: "鳥取", top: "50%", left: "34%" },
  { name: "島根", top: "52%", left: "28%" }, { name: "岡山", top: "57%", left: "33%" }, { name: "広島", top: "58%", left: "27%" },
  { name: "山口", top: "60%", left: "20%" }, { name: "香川", top: "65%", left: "32%" }, { name: "徳島", top: "66%", left: "37%" },
  { name: "愛媛", top: "68%", left: "26%" }, { name: "高知", top: "72%", left: "31%" }, { name: "福岡", top: "68%", left: "15%" },
  { name: "佐賀", top: "71%", left: "10%" }, { name: "長崎", top: "74%", left: "7%" }, { name: "大分", top: "72%", left: "19%" },
  { name: "熊本", top: "77%", left: "14%" }, { name: "宮崎", top: "80%", left: "20%" }, { name: "鹿児島", top: "84%", left: "13%" },
  { name: "沖縄", top: "90%", left: "40%" }
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#1e3a8a' }}>🗾 日本地図パズル</h2>
        <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>{obtained.length} / 47 完成</span>
      </div>
      
      <div style={{ 
        flex: 1, 
        backgroundColor: '#e0f2ff', 
        borderRadius: '15px', 
        position: 'relative', 
        border: '1px solid #bde0fe',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)'
      }}>
        {PREFECTURES.map(pref => {
          const isObtained = obtained.includes(pref.name) || obtained.includes(pref.name + "県") || obtained.includes(pref.name + "府") || obtained.includes(pref.name + "都");
          return (
            <div key={pref.name} style={{
              position: 'absolute',
              top: pref.top,
              left: pref.left,
              width: pref.width || '38px',
              height: pref.height || '28px',
              backgroundColor: isObtained ? '#3b82f6' : '#fff',
              color: isObtained ? '#000' : '#cbd5e1', // 獲得した時は黒文字！
              border: isObtained ? '1.5px solid #1d4ed8' : '1px solid #f1f5f9',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 'bold',
              transition: 'all 0.4s ease',
              boxShadow: isObtained ? '0 2px 4px rgba(0,0,0,0.2)' : 'none',
              zIndex: isObtained ? 10 : 1,
              whiteSpace: 'nowrap'
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
