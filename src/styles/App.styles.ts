import styled from "styled-components";

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

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #1e2227;
  border-radius: 5px;
`;
