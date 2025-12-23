import React from 'react';

function ScoreBoard({ points, collectionCount }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '10px',
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '5px 15px',
        borderRadius: '20px',
        border: '1px solid white'
      }}>
        💰 {points.toLocaleString()} pt
      </div>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '5px 15px',
        borderRadius: '20px',
        border: '1px solid white'
      }}>
        🗾 {collectionCount} / 47 都道府県
      </div>
    </div>
  );
}

export default ScoreBoard;
