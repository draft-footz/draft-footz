import styled from "styled-components";

// input para páginas de login e registro
export const Input = styled.input`
  max-width: 318px;
  width: 100%;
  height: 46px;
  background-color: var(--windowBackground);
  border-radius: 4px;
  border: 2px solid var(--windowBackground);
  padding-left: 10px;
  color: white;
  font-size: 12px;

  :focus {
    border-color: #ffffff78;
    outline: red;
  }
`;
