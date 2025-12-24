import React from 'react';

function MapCollection({ obtained }) {
  // 都道府県を視覚的に大きく見せるためのコンテナ
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      position: 'relative'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <h2 style={{ margin: 0, fontSize: '20px', color: '#1e3a8a' }}>🗾 日本地図コレクション</h2>
        <div style={{ 
          padding: '4px 12px', 
          backgroundColor: '#eff6ff', 
          borderRadius: '20px', 
          fontSize: '14px', 
          fontWeight: 'bold', 
          color: '#2563eb',
          border: '1px solid #dbeafe'
        }}>
          {obtained.length} / 47 完成
        </div>
      </div>

      <div style={{ 
        flex: 1, 
        width: '100%', 
        backgroundColor: '#f0f9ff', // 海をイメージした薄い青
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid #e0f2fe'
      }}>
        {/* 実際の地図SVGを使用する場合、ここが 100% で広がります。
            今は仮の巨大アイコンとリストでサイズ感を出しています。
        */}
        <div style={{ 
          width: '90%', 
          height: '90%', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* 地図のイメージを大きく配置 */}
          <div style={{ 
            fontSize: '180px', 
            filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.1))',
            userSelect: 'none'
          }}>
            🗾
          </div>

          {/* 獲得した都道府県のタグクラウド（地図の周りに散りばめるイメージ） */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '6px', 
            justifyContent: 'center',
            maxWidth: '100%',
            overflowY: 'auto'
          }}>
            {obtained.length === 0 ? (
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>まだピースがありません。ガチャを引いてみよう！</p>
            ) : (
              obtained.map((name, index) => (
                <span key={index} style={{
                  padding: '4px 10px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animation: 'popIn 0.3s ease-out'
                }}>
                  {name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* アニメーション用のCSS */}
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default MapCollection;
