import styled from "styled-components";

export const GameLayout = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  background-color: #24282f;
  min-height: 100vh;
  color: #fff;
  overflow: hidden;
`;

export const Map = styled.div`
  width: 480px;
  height: 480px;
  background-image: url("/assets/town.png");
  background-position: left top;
  background-size: 100%;
  overflow: hidden;
`;

export const GamePannellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
