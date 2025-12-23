import React from 'react';

function Collection({ cards }) {
  return (
    <div>
      <h3>コレクション</h3>
      {cards.map((c, i) => (
        <div key={i} className={`card ${c.rarity}`}>{c.name}</div>
      ))}
    </div>
  );
}

export default Collection;

