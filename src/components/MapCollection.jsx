import React from 'react';

const prefectures = [
  "北海道","青森","岩手","宮城","秋田","山形","福島",
  "茨城","栃木","群馬","埼玉","千葉","東京","神奈川",
  "新潟","富山","石川","福井","山梨","長野","岐阜",
  "静岡","愛知","三重","滋賀","京都","大阪","兵庫",
  "奈良","和歌山","鳥取","島根","岡山","広島","山口",
  "徳島","香川","愛媛","高知","福岡","佐賀","長崎",
  "熊本","大分","宮崎","鹿児島","沖縄"
];

function MapCollection({ obtained }) {
  return (
    <div>
      <h3>日本列島コレクション</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '600px', margin: '0 auto' }}>
        {prefectures.map((p) => (
          <div key={p} style={{
            width: '60px',
            height: '30px',
            margin: '2px',
            backgroundColor: obtained.includes(p) ? 'green' : 'lightgray',
            color: 'white',
            textAlign: 'center',
            lineHeight: '30px',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapCollection;
