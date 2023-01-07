import styled from "styled-components";

export const FormTournamentCreation = styled.form`
  position: sticky;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 18px;
  }
  input {
    height: 46px;
  }
  @media (max-width: 1000px) {
    label {
      font-size: 16px;
    }
  }
  @media (max-width: 890px) {
    label {
      font-size: 14px;
    }
  }
`;
export const DivGlobalTournament = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const DivInputTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputTournamentCreation = styled.input`
  width: 70%;
  height: 40px;
  background-color: var(--inputsBackground);
  border-radius: 4px;
  padding-left: 10px;
  color: white;
  font-size: 12px;
  outline: none;

  :focus {
    border: 2px solid #9f9f9f;
    border-color: var(--gray0);
    background-color: var(--inputsBackgroundFocus);
  }
`;

export const DivInputDisabled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  align-items: center;
`;

export const DivInputInfoTournament = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputTournamentType = styled.input`
  width: 60%;
  height: 40px;
  background-color: var(--inputsBackground);
  border-radius: 4px;
  padding-left: 10px;
  color: white;
  font-size: 12px;
  outline: none;
  text-align: center;
`;

export const DivButtonCreateTournament = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 50%;
    max-width: 284px;
    height: 44px;
  }
`;
