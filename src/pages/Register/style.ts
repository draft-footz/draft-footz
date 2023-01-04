import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  background: url("/background1.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .window {
    display: flex;
    flex-direction: column;

    padding: 45px 70px;
    border-radius: 20px;

    background-color: var(--windowBackground)
  }
`;
