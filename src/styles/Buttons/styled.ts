import styled from "styled-components";

// button logar com apple
export const ButtonApple = styled.button`
  max-width: 151px;
  width: 50%;
  height: 41px;
  border-radius: 4px;
  border: none;
  padding-left: 10px;
  color: white;
  background-color: var(--windowBackground);
  font-size: 15px;
  font-weight: 600;
`;

// button logar com google
export const ButtonGoogle = styled.button`
  max-width: 151px;
  width: 50%;
  height: 41px;
  border-radius: 4px;
  border: none;
  padding-left: 10px;
  color: white;
  background-color: var(--windowBackground);
  font-size: 15px;
  font-weight: 600;
`;

// button verde da dashboard
export const ButtonMenu = styled.button`
  width: 100%;
  height: 63px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;

  :hover {
    background-color: var(--primary);
  }
`;

// button verde de login e registro
export const ButtonSend = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 4px;
  border: none;
  padding-left: 10px;
  color: white;
  background-color: var(--primary);
  font-size: 15px;
  font-weight: 600;
`;

// button logout da dashboard
export const ButtonLogout = styled.button`
  background-color: #2f2f2f;
  border: none;
  color: #a8a8a8;
`;
