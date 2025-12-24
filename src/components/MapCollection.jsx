import React from 'react';

const PREFECTURES = [
  { name: "北海道", top: "5%", left: "72%", width: "70px", height: "50px" },
  { name: "青森", top: "20%", left: "68%" }, { name: "秋田", top: "26%", left: "66%" }, { name: "岩手", top: "26%", left: "72%" },
  { name: "山形", top: "32%", left: "65%" }, { name: "宮城", top: "32%", left: "71%" }, { name: "福島", top: "38%", left: "68%" },
  { name: "新潟", top: "35%", left: "58%" }, { name: "富山", top: "41%", left: "53%" }, { name: "石川", top: "38%", left: "48%" },
  { name: "福井", top: "46%", left: "46%" }, { name: "長野", top: "44%", left: "58%" }, { name: "岐阜", top: "49%", left: "53%" },
  { name: "群馬", top: "43%", left: "64%" }, { name: "栃木", top: "43%", left: "69%" }, { name: "茨城", top: "48%", left: "71%" },
  { name: "千葉", top: "56%", left: "71%" }, { name: "埼玉", top: "49%", left: "66%" }, { name: "東京", top: "54%", left: "66%" },
  { name: "神奈川", top: "59%", left: "65%" }, { name: "山梨", top: "50%", left: "61%" }, { name: "静岡", top: "56%", left: "60%" },
  { name: "愛知", top: "55%", left: "54%" }, { name: "三重", top: "62%", left: "50%" }, { name: "滋賀", top: "53%", left: "48%" },
  { name: "京都", top: "51%", left: "43%" }, { name: "奈良", top: "59%", left: "45%" }, { name: "和歌山", top: "66%", left: "44%" },
  { name: "大阪", top: "56%", left: "41%" }, { name: "兵庫", top: "53%", left: "36%" }, { name: "鳥取", top: "48%", left: "32%" },
  { name: "島根", top: "50%", left: "26%" }, { name: "岡山", top: "55%", left: "31%" }, { name: "広島", top: "56%", left: "25%" },
  { name: "山口", top: "58%", left: "18%" }, { name: "香川", top: "63%", left: "30%" }, { name: "徳島", top: "64%", left: "35%" },
  { name: "愛媛", top: "66%", left: "24%" }, { name: "高知", top: "70%", left: "29%" }, { name: "福岡", top: "66%", left: "13%" },
  { name: "佐賀", top: "69%", left: "8%" }, { name: "長崎", top: "72%", left: "5%" }, { name: "大分", top: "70%", left: "17%" },
  { name: "熊本", top: "75%", left: "12%" }, { name: "宮崎", top: "78%", left: "18%" }, { name: "鹿児島", top: "82%", left: "11%" },
  { name: "沖縄", top: "88%", left: "35%" }
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#1e3a8a' }}>🗾 日本地図パズル</h2>
        <span style={{ fontWeight: 'bold', color: '#1e3a8a', backgroundColor: '#fff', padding: '2px 8px', borderRadius: '5px' }}>
          {obtained.length} / 47 完成
        </span>
      </div>
      
      <div style={{ 
        flex: 1, 
        backgroundColor: '#f0f9ff', 
        borderRadius: '15px', 
        position: 'relative', 
        border: '1px solid #bde0fe',
        overflow: 'hidden'
      }}>
        {PREFECTURES.map(pref => {
          const isObtained = obtained.includes(pref.name) || 
                             obtained.includes(pref.name + "県") || 
                             obtained.includes(pref.name + "府") || 
                             obtained.includes(pref.name + "都");
          return (
            <div key={pref.name} style={{
              position: 'absolute',
              top: pref.top,
              left: pref.left,
              width: pref.width || '36px',
              height: pref.height || '26px',
              backgroundColor: isObtained ? '#3b82f6' : '#ffffff',
              color: isObtained ? '#000000' : '#cbd5e1', // はっきりした黒文字
              border: isObtained ? '2px solid #1d4ed8' : '1px solid #e2e8f0',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: isObtained ? '0 3px 6px rgba(0,0,0,0.16)' : 'none',
              zIndex: isObtained ? 10 : 1,
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
