import styled from "styled-components";

export const SectionWelcome = styled.div`
  position: sticky;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 14px;
    text-align: center;
    margin-top: 30px;
    color: #ffffff;

    @media (min-width: 375px) {
      font-size: 15px;
    }

     @media (min-width: 425px) {
      font-size: 17px;
    }

    @media (min-width: 700px) {
      font-size: 20px;
    }
  }
`;
