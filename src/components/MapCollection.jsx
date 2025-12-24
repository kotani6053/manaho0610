import React from 'react';

const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#1e3a8a' }}>🗾 日本地図パズル</h2>
        <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>{obtained.length} / 47 完成</span>
      </div>
      
      <div style={{ 
        flex: 1,
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', // タイルを大きく配置
        gridAutoRows: 'minmax(50px, 1fr)',
        gap: '6px', 
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        {PREFECTURES.map(pref => {
          const isObtained = obtained.includes(pref);
          return (
            <div key={pref} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              backgroundColor: isObtained ? '#3b82f6' : '#e2e8f0',
              color: isObtained ? 'white' : '#94a3b8',
              border: isObtained ? 'none' : '1px dashed #cbd5e1',
              boxShadow: isObtained ? '0 2px 4px rgba(59, 130, 246, 0.4)' : 'none',
              transform: isObtained ? 'scale(1.02)' : 'scale(1)'
            }}>
              {pref}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapCollection;
