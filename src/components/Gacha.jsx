import React, { useState } from 'react';

function Gacha({ points, cost, obtained, onDraw }) {
  const [lastPref, setLastPref] = useState(null);

  const allPref = [
    "北海道","青森","岩手","宮城","秋田","山形","福島",
    "茨城","栃木","群馬","埼玉","千葉","東京","神奈川",
    "新潟","富山","石川","福井","山梨","長野","岐阜",
    "静岡","愛知","三重","滋賀","京都","大阪","兵庫",
    "奈良","和歌山","鳥取","島根","岡山","広島","山口",
    "徳島","香川","愛媛","高知","福岡","佐賀","長崎",
    "熊本","大分","宮崎","鹿児島","沖縄"
  ];

  const draw = () => {
    if (points < cost) return alert('ポイント不足！');
    const remaining = allPref.filter(p => !obtained.includes(p));
    if (remaining.length === 0) return alert('すでに全て集めました！');
    const idx = Math.floor(Math.random() * remaining.length);
    const pref = remaining[idx];
    setLastPref(pref);
    onDraw(pref);
  };

  return (
    <div>
      <button onClick={draw}>ガチャを引く（{cost}ポイント消費）</button>
      {lastPref && <p>獲得: {lastPref}</p>}
    </div>
  );
}

export default Gacha;
