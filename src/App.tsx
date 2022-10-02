import { useEffect, useState } from 'react';
import './App.css';

enum PossibleResults {
  YES = 'Right guess!',
  NO = 'Wrong guess!',
}

function App() {
  const [boardColor, setBoardColor] = useState('#fff');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessResult, setGuessResult] = useState<PossibleResults | undefined>(
    undefined
  );
  const [score, setScore] = useState({
    right: 0,
    wrong: 0,
  });

  const generateColor = (): string => {
    const randomHexa = Math.floor(Math.random() * (0xffffff + 1))
      .toString(16)
      .padStart(0);

    return `#${randomHexa}`;
  };

  const handleGuess = (guessColor: string) => {
    if (boardColor === guessColor) {
      setGuessResult(PossibleResults.YES);
      setScore(prevScore => ({
        ...prevScore,
        right: prevScore.right + 1,
      }));

      startGame();
    } else {
      setGuessResult(PossibleResults.NO);
      setScore(prevScore => ({
        ...prevScore,
        wrong: prevScore.wrong + 1,
      }));
    }
  };

  const startGame = () => {
    const gameColor = generateColor();
    const gameGuesses = [gameColor, generateColor(), generateColor()].sort(
      () => Math.random() - 0.5
    );

    setBoardColor(gameColor);
    setGuesses(gameGuesses);
  };

  useEffect(startGame, []);

  return (
    <div className="App">
      <h1>Try guess the color</h1>

      <div className="score">
        <span>
          Hits: <span className="right">{score.right}</span>
        </span>
        <span>
          Misses: <span className="wrong">{score.wrong}</span>
        </span>
      </div>

      <div
        className="color-board"
        style={{ background: boardColor, outline: boardColor }}
      />

      <div className="guesses-container">
        {guesses?.map(guess => (
          <button key={guess} onClick={() => handleGuess(guess)}>
            {guess}
          </button>
        ))}
      </div>

      <p className="guess">
        {guessResult === PossibleResults.YES && (
          <span className="right">{PossibleResults.YES}</span>
        )}
        {guessResult === PossibleResults.NO && (
          <span className="wrong">{PossibleResults.NO}</span>
        )}
      </p>
    </div>
  );
}

export default App;
