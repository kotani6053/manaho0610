import React, { useState } from 'react';

const cards = [
  { name: 'カードA', rarity: 'normal' },
  { name: 'カードB', rarity: 'normal' },
  { name: 'カードC', rarity: 'rare' },
  { name: 'カードD', rarity: 'super' }
];

function Gacha({ onDraw, points, cost }) {
  const [lastCard, setLastCard] = useState(null);

  const draw = () => {
    if (points < cost) return alert('ポイント不足');
    const r = Math.random();
    let card;
    if (r < 0.05) card = cards.find(c => c.rarity === 'super');
    else if (r < 0.3) card = cards.find(c => c.rarity === 'rare');
    else card = cards.find(c => c.rarity === 'normal');
    setLastCard(card);
    onDraw(card);
  };

  return (
    <div>
      <button onClick={draw}>ガチャを引く（{cost}ポイント消費）</button>
      {lastCard && <div className={`card ${lastCard.rarity}`}>{lastCard.name}</div>}
    </div>
  );
}

export default Gacha;

