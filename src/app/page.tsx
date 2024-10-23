"use client";

import { useEffect, useCallback, useState } from "react";
import * as C from "../styles/App.styles";
import { Character } from "../components/Character";
import { Character2 } from "../components/Character2";
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

const Home = () => {
  const {
    characters,
    moveCharacter,
    isCaught,
    score,
    resetCaught,
    setCharacterPositions,
    resetScore,
  } = useStore();
  const [timeRemaining, setTimeRemaining] = useState(30);
  const char = characters["Jane"];
  const char2 = characters["John"];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
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
      }
    },
    [moveCharacter]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleRestart = () => {
    resetCaught();
    resetScore();
    setCharacterPositions(INITIAL_POSITIONS);
    setTimeRemaining(30);
  };

  return (
    <C.Container>
      <C.Map>
        <Character
          x={char.position.x}
          y={char.position.y}
          side={char.side}
          name={char.name}
        />
        <Character2
          x={char2.position.x}
          y={char2.position.y}
          side={char2.side}
          name={char2.name}
        />
      </C.Map>
      <C.Footer>
        <div>
          John se move utilizando as setas <br />
          Jane se move utilizando as teclas "AWSD" <br />
          {isCaught && `${char.name} pegou ${char2.name}!`}
          <br />
          Placar: {score} | Tempo Restante: {timeRemaining}s
          {timeRemaining === 0 && <div>O tempo acabou! Zerar pontuação.</div>}
        </div>
        <button onClick={handleRestart}>Reiniciar Jogo</button>
      </C.Footer>
    </C.Container>
  );
};

export default Home;
