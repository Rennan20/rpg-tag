import { useState } from "react";
import { mapaSpots } from "../data/mapaSpots"; // Imagino que "mapaSpots" contenha as informações do mapa

export const useCharacter = () => {
  const [visibilityMap, setVisibilityMap] = useState(
    Array(16).fill(Array(16).fill(false)) // Começa com tudo oculto
  );
  const radius = 2; // Definindo o raio da área visível

  const revealAreaAroundPlayer = (x: number, y: number) => {
    let revealedArea = [];

    // Atualiza a visibilidade ao redor do jogador
    setVisibilityMap((prevMap) => {
      const newMap = prevMap.map((row) => [...row]); // Cópia profunda da matriz
      for (let i = y - radius; i <= y + radius; i++) {
        for (let j = x - radius; j <= x + radius; j++) {
          if (newMap[i] !== undefined && newMap[i][j] !== undefined) {
            newMap[i][j] = true; // Revela a área
            revealedArea.push({
              x: j,
              y: i,
              isSafe: mapaSpots[i][j] === 1, // Verifica se o bloco é seguro
            });
          }
        }
      }
      return newMap;
    });

    return revealedArea; // Retorna os blocos revelados
  };

  // Função para mostrar os blocos temporariamente
  const highlightSafeSpots = (
    revealArea: Array<{ x: number; y: number; isSafe: boolean }>
  ) => {
    revealArea.forEach((spot) => {
      // Aqui você pode adicionar uma lógica visual, como mudar a cor dos blocos
      if (spot.isSafe) {
        console.log(`Bloco seguro em (${spot.x}, ${spot.y})`);
      } else {
        console.log(`Bloco perigoso em (${spot.x}, ${spot.y})`);
      }
    });

    // Retorna os blocos seguros para o jogador poder ver
    return revealArea;
  };

  return {
    highlightSafeSpots,
    revealAreaAroundPlayer,
  };
};
