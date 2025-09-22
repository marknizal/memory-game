import { type FC } from "react";
import { Button, Result } from "antd";

import * as T from "./types";

const Scores: FC<T.ScoresProps> = ({
  moves,
  time,
  bestScore,
  onPlayAgain,
  formatTimeWords,
}) => {
  return (
    <Result
      status="success"
      title="Nice memory skills!"
      subTitle={
        <>
          <p>
            You won in {moves} moves and {formatTimeWords(time)}.
          </p>
          {bestScore && (
            <p>
              Best Score: {bestScore.moves} moves in{" "}
              {formatTimeWords(bestScore.time)}
            </p>
          )}
        </>
      }
      extra={[
        <Button type="primary" key="playAgain" onClick={onPlayAgain}>
          Play Again
        </Button>,
      ]}
    />
  );
};

export default Scores;
