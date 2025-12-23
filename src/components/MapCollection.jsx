import React from 'react';

function MapCollection({ obtained }) {
  return (
    <div>
      <h3>日本列島コレクション</h3>
      <svg viewBox="0 0 100 150" width="300">
        {/* 北海道 */}
        <rect
          x="40"
          y="0"
          width="20"
          height="10"
          fill={obtained.includes("北海道") ? "green" : "lightgray"}
          stroke="black"
        />
        {/* 青森 */}
        <rect
          x="42"
          y="12"
          width="6"
          height="4"
          fill={obtained.includes("青森") ? "green" : "lightgray"}
          stroke="black"
        />
        {/* 岩手 */}
        <rect
          x="42"
          y="17"
          width="6"
          height="5"
          fill={obtained.includes("岩手") ? "green" : "lightgray"}
          stroke="black"
        />
        {/* 宮城 */}
        <rect
          x="42"
          y="23"
          width="6"
          height="4"
          fill={obtained.includes("宮城") ? "green" : "lightgray"}
          stroke="black"
        />
        {/* 他の都道府県も同じように追加 */}
      </svg>
    </div>
  );
}

export default MapCollection;
