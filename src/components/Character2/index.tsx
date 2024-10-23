import * as C from "./styles";
import { CharacterSides } from "../../types/CharacterSides";

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
  name: string;
};

export const Character2 = ({ x, y, side, name }: Props) => {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };

  return (
    <C.Container
      size={size}
      $left={x * size} // Usando a propriedade transiente
      $top={y * size} // Usando a propriedade transiente
      $sidePos={sides[side] ?? 0} // Usando a propriedade transiente
    >
      <C.NameBox>{name}</C.NameBox>
    </C.Container>
  );
};
