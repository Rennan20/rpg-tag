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
  score: number;
  moveCharacter: (name: string, direction: string) => void;
  checkCollision: (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ) => boolean;
  resetCaught: () => void;
  resetScore: () => void;

  setCharacterPositions: (positions: typeof INITIAL_POSITIONS) => void;
};
