import { create } from "zustand";
import { CharacterState } from "./types";
import { mapaSpots } from "../../data/mapaSpots";
import { CharacterSides } from "../../types/CharacterSides";

const canMove = (x: number, y: number) => {
  return (
    mapaSpots[y] !== undefined &&
    mapaSpots[y][x] !== undefined &&
    mapaSpots[y][x] === 1
  );
};

export const INITIAL_POSITIONS = {
  Jane: {
    position: { x: 3, y: 5 },
    side: "down" as CharacterSides,
    name: "Jane",
  },
  John: {
    position: { x: 13, y: 5 },
    side: "down" as CharacterSides,
    name: "John",
  },
};

const useStore = create<CharacterState>((set) => ({
  characters: INITIAL_POSITIONS,
  isCaught: false,
  scoreJane: 0,
  scoreJohn: 0,
  isGameActive: true,
  moveCharacter: (name, direction) =>
    set((state) => {
      if (!state.isGameActive) return state;

      const character = state.characters[name];
      let newPosition = { ...character.position };
      let moved = false;

      switch (direction) {
        case "left":
          if (canMove(newPosition.x - 1, newPosition.y)) {
            newPosition.x -= 1;
            moved = true;
          }
          character.side = "left";
          break;
        case "right":
          if (canMove(newPosition.x + 1, newPosition.y)) {
            newPosition.x += 1;
            moved = true;
          }
          character.side = "right";
          break;
        case "up":
          if (canMove(newPosition.x, newPosition.y - 1)) {
            newPosition.y -= 1;
            moved = true;
          }
          character.side = "up";
          break;
        case "down":
          if (canMove(newPosition.x, newPosition.y + 1)) {
            newPosition.y += 1;
            moved = true;
          }
          character.side = "down";
          break;
      }

      if (moved) {
        return {
          characters: {
            ...state.characters,
            [name]: { ...character, position: newPosition },
          },
          isCaught: false,
        };
      }

      return state;
    }),

  checkCollision: (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  },

  resetCaught: () => set({ isCaught: false }),

  resetScores: () => set({ scoreJane: 0, scoreJohn: 0 }),

  setCharacterPositions: (positions) =>
    set(() => ({
      characters: positions,
      isCaught: false,
      isGameActive: true,
    })),

  setGameActive: (isActive) => set(() => ({ isGameActive: isActive })),
}));

export default useStore;
