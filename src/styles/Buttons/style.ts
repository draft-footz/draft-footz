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
  top: calc(50% - 3rem);
  left: 0;
  width: 1.5rem;
  height: 6rem;
  z-index: 2;

  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  background-color: rgba(7, 7, 7, 30%);
  color: white;

  font-size: 2rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 800px) {
    top: calc(50% - 3rem);
    left: 0;
    height: 6rem;
    width: 1.25rem;
  }
`;

// button de navegar para DIREITA
export const ButtonRight = styled.button`
  position: absolute;
  top: calc(50% - 3rem);
  right: 0;
  width: 1.5rem;
  height: 6rem;
  z-index: 2;

  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;

  background-color: rgba(7, 7, 7, 30%);
  color: white;

  font-size: 2rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: rgba(7,7,7, 100%);
  }

  @media (max-width: 800px) {
    top: calc(50% - 3rem);
    right: 0;
    height: 6rem;
    width: 1.25rem;
  }
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
