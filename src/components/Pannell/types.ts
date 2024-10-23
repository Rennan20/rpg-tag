export type GamePannellProps = {
  isCaught: boolean;
  timeRemaining: number;
  gameMessage: string;
  handleRestart: () => void;
  janeWins: number;
  johnWins: number;
  resetScores: () => void;
};
