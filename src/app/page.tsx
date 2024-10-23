"use client";

import * as C from "../styles/App.styles";
import { Character } from "../components/Character";
import { Character2 } from "../components/Character2";
import { GamePannell } from "../components/Pannell";
import useMovement from "../hooks/useCharacter";

const Home = () => {
  const {
    isCaught,
    char,
    char2,
    timeRemaining,
    gameMessage,
    handleRestart,
    johnWins,
    janeWins,
    handleResetScores,
  } = useMovement();

  return (
    <C.Game>
      <C.Container>
        <C.GameLayout>
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
          <GamePannell
            isCaught={isCaught}
            timeRemaining={timeRemaining}
            gameMessage={gameMessage}
            handleRestart={handleRestart}
            resetScores={handleResetScores} // Passa a função para zerar o placar
            janeWins={janeWins}
            johnWins={johnWins}
          />
        </C.GameLayout>
      </C.Container>
    </C.Game>
  );
};

export default Home;
