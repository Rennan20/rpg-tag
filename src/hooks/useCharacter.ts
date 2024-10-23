import { useEffect, useCallback, useState } from "react";
import useStore from "../store/Positions";
import { CharacterSides } from "../types/CharacterSides";

const INITIAL_POSITIONS = {
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

const useMovement = () => {
  const {
    characters,
    moveCharacter,
    resetCaught,
    setCharacterPositions,
    isCaught,
  } = useStore();

  const [timeRemaining, setTimeRemaining] = useState(15);
  const [gameMessage, setGameMessage] = useState("");
  const [isGameActive, setIsGameActive] = useState(true);
  const [janeWins, setJaneWins] = useState(0);
  const [johnWins, setJohnWins] = useState(0);

  const char = characters["Jane"];
  const char2 = characters["John"];
  const handleResetScores = () => {
    setJaneWins(0);
    setJohnWins(0);
  };

  useEffect(() => {
    if (!isGameActive) return; // Evitar continuar se o jogo não estiver ativo

    let timerId: NodeJS.Timeout;

    if (timeRemaining > 0) {
      timerId = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            if (!isCaught) {
              setGameMessage(`${char2.name} ganhou!`);
              setJohnWins((prev) => prev + 1);
            } else {
              setGameMessage(`${char.name} pegou ${char2.name}!`);
              setJaneWins((prev) => prev + 1);
            }
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [timeRemaining, isCaught, isGameActive]);

  const checkIfCaught = () => {
    if (!isGameActive) return false;

    if (
      char.position.x === char2.position.x &&
      char.position.y === char2.position.y
    ) {
      resetCaught();
      setGameMessage(`${char.name} pegou ${char2.name}!`);
      setTimeRemaining(0);
      setIsGameActive(false);
      setJaneWins((prev) => prev + 1);
      return true;
    }
    return false;
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isGameActive) return;

      const movementMap: { [key: string]: () => void } = {
        KeyA: () => moveCharacter("Jane", "left"),
        KeyW: () => moveCharacter("Jane", "up"),
        KeyD: () => moveCharacter("Jane", "right"),
        KeyS: () => moveCharacter("Jane", "down"),
        ArrowLeft: () => moveCharacter("John", "left"),
        ArrowUp: () => moveCharacter("John", "up"),
        ArrowRight: () => moveCharacter("John", "right"),
        ArrowDown: () => moveCharacter("John", "down"),
      };

      const move = movementMap[e.code];
      if (move) {
        move();
        checkIfCaught();
      }
    },
    [moveCharacter, checkIfCaught, isGameActive]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleRestart = () => {
    resetCaught();
    setCharacterPositions(INITIAL_POSITIONS);
    setTimeRemaining(15);
    setGameMessage("");
    setIsGameActive(true);
  };

  return {
    characters,
    timeRemaining,
    gameMessage,
    isGameActive,
    handleRestart,
    char,
    char2,
    isCaught,
    janeWins,
    johnWins,
    handleResetScores,
  };
};

export default useMovement;
