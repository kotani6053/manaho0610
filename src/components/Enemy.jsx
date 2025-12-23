import React from 'react';

function Enemy({ name, hp }) {
  return (
    <div className="enemy">
      敵: {name} | HP: {hp}
    </div>
  );
}

export default Enemy;

