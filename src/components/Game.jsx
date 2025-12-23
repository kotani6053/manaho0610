import React, { useState } from 'react';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import Enemy from './Enemy';

const enemies = [
  { name: 'ゴブリン', hp: 5 },
  { name: 'スライム', hp: 3 },
  { name: 'オオカミ', hp: 4 },
  { name: 'コボルト', hp: 6 }
];

function Game() {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [enemy, setEnemy] = useState(enemies[Math.floor(Math.random() * enemies.length)]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      // 敵にダメージ
      const newHp = enemy.hp - 1;
      if (newHp <= 0) {
        // 敵倒したらXP獲得 & 新しい敵
        setXp(xp + 5);
        setEnemy(enemies[Math.floor(Math.random() * enemies.length)]);
      } else {
        setEnemy({ ...enemy, hp: newHp });
      }
    }
    setQuestionNumber(questionNumber + 1);

    // レベルアップ判定
    if (xp + 5 >= level * 10) {
      setLevel(level + 1);
      setXp(0);
    }
  };

  return (
    <div className="game">
      <ScoreBoard score={score} questionNumber={questionNumber} level={level} xp={xp} />
      {questionNumber <= 15 ? (
        <>
          <Enemy name={enemy.name} hp={enemy.hp} />
          <Question onAnswer={handleAnswer} />
        </>
      ) : (
        <div>ゲーム終了！あなたのスコアは {score} / 15 です。レベル: {level}</div>
      )}
    </div>
  );
}

export default Game;
