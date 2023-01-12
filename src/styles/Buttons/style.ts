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
  color: white;
  background-color: var(--primary);
  font-size: 15px;
  font-weight: 600;
  min-width: 200px;
  transition: 0.5s;
`;

export const ButtonSent = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  min-width: 200px;
  transition: 0.5s;
  background-color: #1e1e1e;
`;

// button de navegar para ESQUERDA
export const ButtonLeft = styled.button`
  position: absolute;
  top: calc(50% - 2rem);
  left: -2rem;
  width: 4rem;
  height: 4rem;
  z-index: 1;

  border-radius: 50%;

  background-color: rgba(217, 217, 217, 10%);
  color: white;

  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// button de navegar para DIREITA
export const ButtonRight = styled.button`
  position: absolute;
  top: calc(50% - 2rem);
  right: -2rem;
  width: 4rem;
  height: 4rem;
  z-index: 1;

  border-radius: 50%;

  background-color: rgba(217, 217, 217, 10%);
  color: white;

  font-size: 1.5rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Button close modal
export const ButtonCloseModal = styled.button`
  position: absolute;
  right: 1.5rem;
  top: -0.5rem;
  background-color: transparent;
  padding: 0;
  border: none;
  opacity: 0.5;

  font-size: 1.5rem;
  font-weight: 500;

  :hover {
    opacity: 1;
    background-color: transparent;
  }
`;
