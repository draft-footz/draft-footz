import styled from "styled-components";

export const FormTournamentCreation = styled.form`
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: translateShow 0.4s ease;
  margin-top: 20px;

  @media (min-width: 700px) {
    margin-top: 5px;
  }

  @media (min-width: 800px) {
    margin-top: 40px;
  }

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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 700px) {
    width: 90%;
    
  }

  .flex-dr {
    display: flex;
  }
`;

export const DivInputTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
   
  
  @media (min-width: 375px) {
    margin-left: 10px;
  }

  @media (min-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
   
  }
`;

export const InputTournamentCreation = styled.input`
  width: 220px;
  height: 40px;
  background-color: var(--inputsBackground);
  border-radius: 4px;
  padding-left: 20px;
  color: white;
  font-size: 12px;
  outline: none;

  @media (min-width: 375px) {
    width: 280px;
  }

  @media (min-width: 425px) {
    width: 300px;
  }

  @media (min-width: 700px) {
    width: 60%;
  }

  

  :focus {
    border: 2px solid #9f9f9f;
    border-color: var(--gray0);
    background-color: var(--inputsBackgroundFocus);
  }
`;

export const DivInputDisabled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  margin-top: -20px;
  max-width: 600px;
  width: 100%;
  
  align-items: center;

  @media (min-width: 700px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: row;
    width: 90%;
    gap: 70px;
    margin-left: 10px;
    margin-bottom: 20px;
  
  }
  
`;

export const DivInputInfoTournament = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputTournamentType = styled.input`
  width: 100%;
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
  width: 100%;
  margin-top: -20px;

  @media (min-width: 1000px) {
    width: 80%;
  }
  
  button {
    width: 60%;
    max-width: 284px;
    height: 44px;
  }
`;
