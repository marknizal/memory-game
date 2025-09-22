export type CardType = {
  id: number;
  src: string;
  flipped: boolean;
  matched: boolean;
};

export const difficultyConfig = {
  Beginner: { size: 2, pairs: 2 },
  Easy: { size: 4, pairs: 8 },
  Hard: { size: 6, pairs: 18 },
} as const;

export type Difficulty = keyof typeof difficultyConfig;
export type Score = { moves: number; time: number } | null;
