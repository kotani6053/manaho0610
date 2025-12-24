import React, { useState, useEffect, useCallback } from 'react';

// クイズ用データ（ひらがな統一）
const QUIZ_DATA = [
  { pref: "ほっかいどう", city: "さっぽろし", options: ["さっぽろし", "はこだてし", "あさひかわし"] },
  { pref: "あおもりけん", city: "あおもりし", options: ["あおもりし", "はちのへし", "ひろさきし"] },
  { pref: "いわてけん", city: "もりおかし", options: ["もりおかし", "はなまきし", "いちのせきし"] },
  { pref: "みやぎけん", city: "せんだいし", options: ["せんだいし", "いしのまきし", "おおさきし"] },
  { pref: "あきたけん", city: "あきたし", options: ["あきたし", "よこてし", "のしろし"] },
  { pref: "やまがたけん", city: "やまがたし", options: ["やまがたし", "よねざわし", "さかたし"] },
  { pref: "ふくしまけん", city: "ふくしまし", options: ["ふくしまし", "こおりやまし", "いわきし"] },
  { pref: "いばらきけん", city: "みとし", options: ["みとし", "つくばし", "ひたちし"] },
  { pref: "とちぎけん", city: "うつのみやし", options: ["うつのみやし", "あしかがし", "とちぎし"] },
  { pref: "ぐんまけん", city: "まえぱしし", options: ["まえぱしし", "たかさきし", "いせさきし"] },
  { pref: "さいたまけん", city: "さいたまし", options: ["さいたまし", "かわぐちし", "ところざわし"] },
  { pref: "ちばけん", city: "ちばし", options: ["ちばし", "ふなばしし", "まつどし"] },
  { pref: "とうきょうと", city: "しんじゅくく", options: ["しんじゅくく", "しぶやく", "ちよだく"] },
  { pref: "かながわけん", city: "よこはまし", options: ["よこはまし", "かわさきし", "さがみはらし"] },
  { pref: "にいがたけん", city: "にいがたし", options: ["にいがたし", "ながおかし", "じょうえつし"] },
  { pref: "とやまけん", city: "とやまし", options: ["とやまし", "たかおかし", "いみずし"] },
  { pref: "いしかわけん", city: "かなざわし", options: ["かなざわし", "こまつし", "ななおし"] },
  { pref: "ふくいけん", city: "ふくいし", options: ["ふくいし", "つるがし", "えちぜんし"] },
  { pref: "やまなしけん", city: "こうふし", options: ["こうふし", "ふじよしだし", "ふえふきし"] },
  { pref: "ながのけん", city: "ながのし", options: ["ながのし", "まつもとし", "うえだし"] },
  { pref: "ぎふけん", city: "ぎふし", options: ["ぎふし", "おおがきし", "かかみがはらし"] },
  { pref: "しずおかけん", city: "しずおかし", options: ["しずおかし", "はままつし", "ぬまづし"] },
  { pref: "あいちけん", city: "なごやし", options: ["なごやし", "とよたし", "おかしざきし"] },
  { pref: "みえけん", city: "つし", options: ["つし", "よっかいちし", "いせし"] },
  { pref: "しがけん", city: "おおつし", options: ["おおつし", "くさつし", "ひこねし"] },
  { pref: "きょうとふ", city: "きょうとし", options: ["きょうとし", "うじし", "かめおかし"] },
  { pref: "おおさかふ", city: "おおさかし", options: ["おおさかし", "さかいし", "ひがしおおさかし"] },
  { pref: "ひょうごけん", city: "こうべし", options: ["こうべし", "ひめじし", "にしのみやし"] },
  { pref: "ならけん", city: "ならし", options: ["ならし", "かしはらし", "いこまし"] },
  { pref: "わかやまけん", city: "わかやまし", options: ["わかやまし", "たなべし", "きのかわし"] },
  { pref: "とっとりけん", city: "とっとりし", options: ["とっとりし", "よなごし", "くらよしし"] },
  { pref: "しまねけん", city: "まつえし", options: ["まつえし", "いずもし", "はmadaし"] },
  { pref: "おかやまけん", city: "おかやまし", options: ["おかやまし", "くらしきし", "つやまし"] },
  { pref: "ひろしまけん", city: "ひろしまし", options: ["ひろしまし", "ふくやまし", "くれし"] },
  { pref: "やまぐちけん", city: "やまぐちし", options: ["やまぐちし", "しものせきし", "うべし"] },
  { pref: "とくしまけん", city: "とくしまし", options: ["とくしまし", "なるとし", "あなんし"] },
  { pref: "かがわけん", city: "たかまつし", options: ["たかまつし", "まるがめし", "さかいでし"] },
  { pref: "えひめけん", city: "まつやまし", options: ["まつやまし", "いまばりし", "にいはまし"] },
  { pref: "こうちけん", city: "こうちし", options: ["こうちし", "なんこくし", "しまんとし"] },
  { pref: "ふくおかけん", city: "ふくおかし", options: ["ふくおかし", "きたきゅうしゅうし", "くるめし"] },
  { pref: "さがけん", city: "さがし", options: ["さがし", "からつし", "とすし"] },
  { pref: "ながさきけん", city: "ながさきし", options: ["ながさきし", "させぼし", "いさはやし"] },
  { pref: "くまもとけん", city: "くまもとし", options: ["くまもとし", "やつしろし", "たまなし"] },
  { pref: "おおいたけん", city: "おおいたし", options: ["おおいたし", "べっぷし", "なかつし"] },
  { pref: "みやざきけん", city: "みやざきし", options: ["みやざきし", "みやこのじょうし", "のべおかし"] },
  { pref: "かごしまけん", city: "かごしまし", options: ["かごしまし", "きりしまし", "かのやし"] },
  { pref: "おきなわけん", city: "なはし", options: ["なはし", "おきなわし", "うるまし"] }
];

function Game({ onWin, obtainedCount }) {
  const [qText, setQText] = useState('');
  const [ans, setAns] = useState(0);
  const [input, setInput] = useState('');
  const [quiz, setQuiz] = useState(null);
  const isMaster = obtainedCount === 47;

  const generateMath = useCallback(() => {
    const a = Math.floor(Math.random() * 20) + 10;
    const b = Math.floor(Math.random() * 15) + 5;
    const c = Math.floor(Math.random() * 10) + 1;
    const type = Math.floor(Math.random() * 3);
    let res, text;
    if (type === 0) { res = a + b + c; text = `${a} + ${b} + ${c}`; }
    else if (type === 1) { res = a + b - c; text = `${a} + ${b} - ${c}`; }
    else { res = a - b + c; text = `${a > b ? a : b + 10} - ${b} + ${c}`; }
    setQText(text); setAns(res); setInput('');
  }, []);

  const generateQuiz = useCallback(() => {
    const item = QUIZ_DATA[Math.floor(Math.random() * QUIZ_DATA.length)];
    const shuffled = [...item.options].sort(() => Math.random() - 0.5);
    setQuiz({ ...item, options: shuffled });
  }, []);

  useEffect(() => {
    if (isMaster) generateQuiz();
    else generateMath();
  }, [isMaster, generateMath, generateQuiz]);

  const handleMathSubmit = () => {
    if (parseInt(input) === ans) { onWin(20); generateMath(); }
    else { alert(`ざんねん！ せいかいは ${ans}`); setInput(''); }
  };

  const handleQuizSubmit = (choice) => {
    if (choice === quiz.city) {
      alert("せいかい！ すごい！！"); onWin(100); generateQuiz();
    } else {
      alert(`ざんねん！ ${quiz.pref} の けんちょうしょざいち は 「${quiz.city}」 だよ`); generateQuiz();
    }
  };

  if (isMaster) {
    return (
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#e11d48', fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '13px' }}>🔥 うらステージ</p>
        <div style={{ fontSize: '16px', marginBottom: '10px' }}>【<span style={{color:'#2563eb'}}>{quiz?.pref}</span>】の<br/>けんちょうしょざいちは？</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {quiz?.options.map(opt => (
            <button key={opt} onClick={() => handleQuizSubmit(opt)} style={quizBtnStyle}>{opt}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{qText} = {input || '?'}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px', maxWidth: '180px', margin: '0 auto' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(n => (
          <button key={n} onClick={() => setInput(input + n)} style={numBtnStyle}>{n}</button>
        ))}
        <button onClick={() => setInput('')} style={{ ...numBtnStyle, backgroundColor: '#fee2e2' }}>C</button>
        <button onClick={handleMathSubmit} style={{ ...numBtnStyle, backgroundColor: '#dcfce7', gridColumn: 'span 2' }}>OK</button>
      </div>
    </div>
  );
}

const quizBtnStyle = { 
  padding: '8px', fontSize: '14px', cursor: 'pointer', borderRadius: '8px', 
  border: '1px solid #3b82f6', backgroundColor: '#fff', fontWeight: 'bold', color: '#1e40af' 
};
const numBtnStyle = { padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#fff' };

export default Game;
