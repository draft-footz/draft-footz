import { Link } from "react-router-dom";
import styled from "styled-components";

export const FigureBackground = styled.div`
  background-image: url("./gramado.png");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const BgPosition = styled.div`
   position: relative;
   height: 100vh;
   display: flex;
`

export const FigureSecBackground = styled.div`
  background-image: url("./gramado.png");
  height: 100%;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  filter: brightness(0.3);
`

export const DivHomeCenter = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: center;
  align-items: center;
  gap: 40px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;

    @media (min-width: 425px) {
        font-size: 22px;
    }

    @media (min-width: 768px) {
        font-size: 25px;
    }
  }
`;

export const LinkToRegister = styled(Link)`
  width: 215px;
  height: 43px;
  background: #00b148;
  border-radius: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;



  &:hover {
    filter: brightness(0.9);
  }
`;
