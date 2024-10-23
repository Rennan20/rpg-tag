import styled from "styled-components";

export const GamePannellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TimeRemaining = styled.div`
  color: #ff0000;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const WinsContainer = styled.div`
  margin-top: 10px;
`;

export const Wins = styled.div`
  font-size: 16px;
  color: #333;
`;

export const Message = styled.div`
  font-size: 16px;
  color: #ff0000;
  margin-bottom: 10px;
`;

export const Controls = styled.div`
  margin-top: 15px;
`;

export const ControlMessage = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;
export const Story = styled.div`
  margin-top: 15px;
  width: 220px;
`;

export const StoryMessage = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-style: italic;
`;
