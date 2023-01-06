import styled from "styled-components";
import ReactInputMask from "react-input-mask";

// input para páginas de login e registro
export const StyledFormInput = styled.input`
  width: 100%;
  height: 40px;

  background-color: var(--inputsBackground);

  border-radius: 4px;
  padding-left: 10px;
  color: white;
  font-size: 12px;

  :focus {
    border-color: var(--gray0);
    background-color: var(--inputsBackgroundFocus);
  }
`;

export const StyledInputMask = styled(ReactInputMask)`
  width: 100%;
  height: 40px;
  background-color: var(--inputsBackground);

  border-radius: 4px;
  padding-left: 10px;
  color: white;
  font-size: 12px;

  :focus {
    border-color: var(--gray0);
    background-color: var(--inputsBackgroundFocus);
  }
`;
