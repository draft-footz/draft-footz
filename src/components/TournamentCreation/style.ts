import styled from "styled-components";

export const FormTournamentCreation = styled.form`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: translateShow 0.4s ease;
  margin-top: 40px;

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  label {
    font-size: 18px;
  }
  input {
    height: 46px;
  }
  @media (max-width: 800px) {
    width: 100%;
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
  width: 80%;
  
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DivInputInfoTournament = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputTournamentType = styled.input`
  width: 80%;
  height: 40px;
  background-color: var(--inputsBackground);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  outline: none;
  text-align: center;
`;

export const DivButtonCreateTournament = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  button {
    width: 60%;
    max-width: 284px;
    height: 44px;
  }
`;
