import { INITIAL_POSITIONS } from ".";
import { CharacterSides } from "../../types/CharacterSides";

export type CharacterState = {
  characters: {
    [key: string]: {
      position: { x: number; y: number };
      side: CharacterSides;
      name: string;
    };
  };
  isCaught: boolean;
  scoreJane: number;
  scoreJohn: number;
  isGameActive: boolean;
  moveCharacter: (name: string, direction: string) => void;
  checkCollision: (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ) => boolean;
  resetCaught: () => void;
  resetScores: () => void;
  setCharacterPositions: (positions: typeof INITIAL_POSITIONS) => void;
  setGameActive: (isActive: boolean) => void;
};
