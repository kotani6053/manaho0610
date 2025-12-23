import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import Gacha from './Gacha';
import Collection from './Collection';

function Game() {
  const [points, setPoints] = useState(0);
  const [collection, setCollection] = useState([]);

  const handleCorrect = (pts) => {
    setPoints(points + pts);
  };

  const handleDraw = (card) => {
    setPoints(points - 5); // ガチャ消費ポイント
    setCollection([...collection, card]);
  };

  return (
    <div>
      <ScoreBoard points={points} />
      <Question onCorrect={handleCorrect} />
      <Gacha points={points} onDraw={handleDraw} cost={5} />
      <Collection cards={collection} />
    </div>
  );
}

export default Game;
