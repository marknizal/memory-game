export type Score = { moves: number; time: number } | null;

export type ScoresProps = {
  moves: number;
  time: number;
  bestScore: Score;
  onPlayAgain: () => void;
  formatTimeWords: (seconds: number) => string;
};
