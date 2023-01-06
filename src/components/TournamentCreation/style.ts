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

  .div-global-tournament {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .div-input-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .div-input-disbled {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    align-items: center;
  }
  .input-tournament-creation {
    outline: none;
    padding-left: 10px;
    width: 70%;
  }
  .input-tournament-creation:focus {
    border: 2px solid #9f9f9f;
  }
  .input-tournament-type {
    width: 40%;
  }
  .input-teams-number {
    width: 40%;
  }
  .div-button-create-tournament {
    display: flex;
    justify-content: center;
  }
  .div-inputs-info-tournament {
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .div-inputs-info-tournament input {
    width: 80%;
  }
  .button-create-tournament {
    width: 50%;
    max-width: 284px;
    height: 44px;
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
