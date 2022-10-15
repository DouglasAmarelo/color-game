export type ScoreProps = {
  correct: number;
  wrong: number;
};

const Score = ({ correct, wrong }: ScoreProps) => {
  return (
    <div className="score">
      <span>
        Hits: <span className="right">{correct}</span>
      </span>
      <span>
        Misses: <span className="wrong">{wrong}</span>
      </span>
    </div>
  );
};

export default Score;
