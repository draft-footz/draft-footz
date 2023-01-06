import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  .inputsArea {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  fieldset > i {
    position: absolute;
    right: 10px;
    top: 10px;
    scale: 1.2;
  }

  .wrongInput {
    border: 1px solid var(--red);
  }
`;
