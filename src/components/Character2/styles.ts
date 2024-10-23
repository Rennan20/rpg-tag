import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  $left: number; // Alterado para transient prop
  $top: number; // Alterado para transient prop
  $sidePos: number; // Alterado para transient prop
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.$left}px; // Usando a transient prop
  top: ${(props) => props.$top}px; // Usando a transient prop
  background-image: url("/assets/char2.png");
  background-position: 0px ${(props) => props.$sidePos}px; // Usando a transient prop
`;

export const NameBox = styled.div`
  background-color: #000;
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  font-size: 10px;
  text-align: center;
  margin-top: -20px;
`;
