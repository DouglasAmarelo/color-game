type BoardProps = {
  color: string;
  guesses: string[];
  handleGuess: (guess: string) => void;
};

const Board = ({ color, guesses, handleGuess }: BoardProps) => {
  return (
    <>
      <div
        className="color-board"
        style={{ background: color, outline: color }}
      />

      <div className="guesses-container">
        {guesses?.map(guess => (
          <button key={guess} onClick={() => handleGuess(guess)}>
            {guess}
          </button>
        ))}
      </div>
    </>
  );
};

export default Board;
