import React from "react";
import { GamePannellProps } from "./types";
import * as C from "./styles";

export const GamePannell: React.FC<GamePannellProps> = ({
  isCaught,
  timeRemaining,
  gameMessage,
  handleRestart,
  janeWins,
  johnWins,
  resetScores,
}) => {
  return (
    <C.GamePannellContainer>
      {isCaught && <C.Message>{gameMessage}</C.Message>}
      <C.TimeRemaining>Tempo Restante: {timeRemaining}s</C.TimeRemaining>
      {timeRemaining === 0 && <C.Message>{gameMessage}</C.Message>}
      <C.WinsContainer>
        <C.Wins>Jane: {janeWins} Vitórias</C.Wins>
        <C.Wins>
          John: {johnWins} Vitórias (placar acrescido de 2 a cada vitória)
        </C.Wins>{" "}
        {/* Mensagem do placar */}
      </C.WinsContainer>
      <C.Controls>
        <C.ControlMessage>
          Movimentos: Jane usa WASD | John usa as setas do teclado
        </C.ControlMessage>
      </C.Controls>
      <C.Story>
        <C.StoryMessage>
          Jane está atrás de John para casar! Mas John, sempre um passo à
          frente, usa suas habilidades de fuga para escapar da proposta. Quem
          será que vai vencer essa corrida do amor?
        </C.StoryMessage>
      </C.Story>
      <C.Button onClick={handleRestart}>Reiniciar Jogo</C.Button>
      <C.Button onClick={resetScores}>Zerar Placar</C.Button>
    </C.GamePannellContainer>
  );
};
