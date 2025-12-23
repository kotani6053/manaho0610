import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import Gacha from './Gacha';
import MapCollection from './MapCollection';

function Game() {
  const [points, setPoints] = useState(0);
  const [obtained, setObtained] = useState([]);

  const handleCorrect = (pts) => setPoints(points + pts);
  const handleDraw = (pref) => {
    setPoints(points - 5);
    setObtained([...obtained, pref]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <ScoreBoard points={points} />
        <Question onCorrect={handleCorrect} />
        <Gacha points={points} cost={5} obtained={obtained} onDraw={handleDraw} />
      </div>
      <MapCollection obtained={obtained} />
    </div>
  );
}

export default Game;
