export type HeaderProps = {
  difficulty: string;
  time: number;
  moves: number;
  onReset: () => void;
  onDifficultyChange: (value: any) => void;
  formatTime: (seconds: number) => string;
};
