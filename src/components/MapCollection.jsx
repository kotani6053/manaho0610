import React from 'react';

// 日本地図の簡易SVGパスデータ（形を維持しつつ軽量化したもの）
const PREFECTURES_SVG = [
  { id: 'hokkaido', name: '北海道', d: 'M350 10l20 10l10 30l-30 20l-40-10l-10-30z' },
  { id: 'aomori', name: '青森県', d: 'M330 80l20 5l5 15l-25 5z' },
  { id: 'iwate', name: '岩手県', d: 'M340 105l15 10l-5 30l-15-5z' },
  { id: 'akita', name: '秋田県', d: 'M320 105l20 0l0 35l-15 0z' },
  { id: 'miyagi', name: '宮城県', d: 'M335 145l15 5l-5 25l-15-5z' },
  { id: 'yamagata', name: '山形県', d: 'M315 145l20 0l0 25l-15 0z' },
  { id: 'fukushima', name: '福島県', d: 'M310 175l40 0l-5 30l-35 0z' },
  { id: 'ibaraki', name: '茨城県', d: 'M335 210l10 10l-10 25l-10-10z' },
  { id: 'tochigi', name: '栃木県', d: 'M320 210l15 0l0 25l-15 0z' },
  { id: 'gunma', name: '群馬県', d: 'M305 210l15 0l-5 20l-15 0z' },
  { id: 'saitama', name: '埼玉県', d: 'M305 235l25 0l0 15l-25 0z' },
  { id: 'chiba', name: '千葉県', d: 'M335 250l10 10l-5 30l-15-10z' },
  { id: 'tokyo', name: '東京都', d: 'M305 255l25 0l0 10l-25 0z' },
  { id: 'kanagawa', name: '神奈川県', d: 'M305 270l20 5l-5 15l-15-5z' },
  { id: 'niigata', name: '新潟県', d: 'M280 160l30 15l-15 30l-25-15z' },
  { id: 'toyama', name: '富山県', d: 'M270 195l15 0l0 20l-15 0z' },
  { id: 'ishikawa', name: '石川県', d: 'M255 175l15 15l-10 25l-10-15z' },
  { id: 'fukui', name: '福井県', d: 'M245 210l20 10l-10 15l-15-5z' },
  { id: 'yamanashi', name: '山梨県', d: 'M290 235l15 5l-5 15l-15-5z' },
  { id: 'nagano', name: '長野県', d: 'M280 200l20 10l-10 40l-15-10z' },
  { id: 'gifu', name: '岐阜県', d: 'M265 215l15 10l-10 35l-15-10z' },
  { id: 'shizuoka', name: '静岡県', d: 'M285 270l25 5l-15 20l-20-5z' },
  { id: 'aichi', name: '愛知県', d: 'M270 265l15 10l-10 20l-15-10z' },
  { id: 'mie', name: '三重県', d: 'M255 265l15 10l-5 35l-15-15z' },
  { id: 'shiga', name: '滋賀県', d: 'M250 235l15 5l-5 20l-15-5z' },
  { id: 'kyoto', name: '京都府', d: 'M235 225l15 10l-10 15l-15-10z' },
  { id: 'osaka', name: '大阪府', d: 'M235 255l15 5l-5 15l-15-5z' },
  { id: 'hyogo', name: '兵庫県', d: 'M215 225l20 10l-10 35l-15-15z' },
  { id: 'nara', name: '奈良県', d: 'M240 275l15 5l-5 25l-15-5z' },
  { id: 'wakayama', name: '和歌山県', d: 'M230 300l20 10l-10 20l-20-10z' },
  { id: 'tottori', name: '鳥取県', d: 'M190 230l25 5l-5 15l-20-5z' },
  { id: 'shimane', name: '島根県', d: 'M160 235l30 5l-5 15l-25-5z' },
  { id: 'okayama', name: '岡山県', d: 'M195 250l20 5l-5 20l-20-5z' },
  { id: 'hiroshima', name: '広島県', d: 'M170 255l25 5l-5 20l-20-5z' },
  { id: 'yamaguchi', name: '山口県', d: 'M140 255l30 10l-15 15l-20-10z' },
  { id: 'tokushima', name: '徳島県', d: 'M200 300l20 5l-10 15l-15-10z' },
  { id: 'kagawa', name: '香川県', d: 'M190 285l25 5l-5 10l-20-5z' },
  { id: 'ehime', name: '愛媛県', d: 'M165 290l25 5l-10 20l-20-10z' },
  { id: 'kochi', name: '高知県', d: 'M175 315l30 5l-15 20l-25-10z' },
  { id: 'fukuoka', name: '福岡県', d: 'M120 280l20 5l-5 15l-15-5z' },
  { id: 'saga', name: '佐賀県', d: 'M105 285l15 5l-5 10l-10-5z' },
  { id: 'nagasaki', name: '長崎県', d: 'M90 285l15 10l-10 15l-15-10z' },
  { id: 'kumamoto', name: '熊本県', d: 'M110 305l20 10l-10 25l-15-10z' },
  { id: 'oita', name: '大分県', d: 'M130 295l15 5l-5 20l-15-5z' },
  { id: 'miyazaki', name: '宮崎県', d: 'M130 325l15 10l-10 35l-10-20z' },
  { id: 'kagoshima', name: '鹿児島県', d: 'M110 340l20 10l-10 30l-20-10z' },
  { id: 'okinawa', name: '沖縄県', d: 'M50 380l20 5l-5 10l-15-5z' },
];

function MapCollection({ obtained }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <h2 style={{ margin: 0, fontSize: '18px', color: '#1e3a8a' }}>🗾 日本制覇パズル</h2>
        <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>{obtained.length} / 47</span>
      </div>
      
      <div style={{ flex: 1, backgroundColor: '#e0f2ff', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
        <svg viewBox="0 0 450 450" style={{ width: '100%', height: '100%' }}>
          {PREFECTURES_SVG.map(pref => {
            const isObtained = obtained.includes(pref.name);
            return (
              <g key={pref.id}>
                <path
                  d={pref.d}
                  fill={isObtained ? '#3b82f6' : '#ffffff'}
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  style={{ transition: 'fill 0.5s ease' }}
                />
                {/* 県名のラベル（獲得済みの場合のみ表示） */}
                {isObtained && (
                  <text
                    x={parseInt(pref.d.split(' ')[0].replace('M', '')) + 5}
                    y={parseInt(pref.d.split(' ')[1]) + 15}
                    fontSize="8"
                    fill="white"
                    style={{ pointerEvents: 'none', fontWeight: 'bold' }}
                  >
                    {pref.name.substring(0, 2)}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default MapCollection;
