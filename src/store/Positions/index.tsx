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

const isWithinTimeLimit = (startTime: number, limit: number) => {
  return Date.now() - startTime < limit;
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

const useStore = create<CharacterState>((set) => {
  const startTime = Date.now();

  return {
    characters: INITIAL_POSITIONS,
    isCaught: false,
    score: 0,
    moveCharacter: (name, direction) =>
      set((state) => {
        const character = state.characters[name];
        let newPosition = { ...character.position };

        switch (direction) {
          case "left":
            if (canMove(newPosition.x - 1, newPosition.y)) newPosition.x -= 1;
            character.side = "left" as CharacterSides;
            break;
          case "right":
            if (canMove(newPosition.x + 1, newPosition.y)) newPosition.x += 1;
            character.side = "right" as CharacterSides;
            break;
          case "up":
            if (canMove(newPosition.x, newPosition.y - 1)) newPosition.y -= 1;
            character.side = "up" as CharacterSides;
            break;
          case "down":
            if (canMove(newPosition.x, newPosition.y + 1)) newPosition.y += 1;
            character.side = "down" as CharacterSides;
            break;
        }

        const caught =
          state.checkCollision(
            newPosition,
            state.characters["John"].position
          ) && isWithinTimeLimit(startTime, 30000);
        return {
          characters: {
            ...state.characters,
            [name]: { ...character, position: newPosition },
          },
          isCaught: caught,
          score: caught ? state.score + 1 : state.score,
        };
      }),
    checkCollision: (pos1, pos2) => {
      return pos1.x === pos2.x && pos1.y === pos2.y;
    },
    resetCaught: () => set({ isCaught: false }),
    resetScore: () => set({ score: 0 }),
    setCharacterPositions: (positions) => set({ characters: positions }),
  };
});

export default useStore;
