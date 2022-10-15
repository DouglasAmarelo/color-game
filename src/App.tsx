import { useEffect, useState } from 'react';
import './App.css';
import { Board, GuessResult, Score } from './components';

import { PossibleResults } from './components/guessResult/GuessResult';

function App() {
  const [boardColor, setBoardColor] = useState('#fff');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessResult, setGuessResult] = useState<PossibleResults | undefined>(
    undefined
  );
  const [score, setScore] = useState({
    correct: 0,
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
        correct: prevScore.correct + 1,
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
      <h1>Try to guess the color</h1>

      <Score {...score} />

      <Board color={boardColor} guesses={guesses} handleGuess={handleGuess} />

      <GuessResult guess={guessResult} />
    </div>
  );
}

export default App;
