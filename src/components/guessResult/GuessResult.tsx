export enum PossibleResults {
  YES = 'Correct guess!',
  NO = 'Wrong guess!',
}

type GuessResultProps = {
  guess: PossibleResults | undefined;
};

const GuessResult = ({ guess }: GuessResultProps) => {
  return (
    <p className="guess">
      {guess === PossibleResults.YES && (
        <span className="right">{PossibleResults.YES}</span>
      )}
      {guess === PossibleResults.NO && (
        <span className="wrong">{PossibleResults.NO}</span>
      )}
    </p>
  );
};

export default GuessResult;
