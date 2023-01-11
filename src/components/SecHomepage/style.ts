import styled from "styled-components";

export const DivSecHeader = styled.div`
  position: relative;
  width: 100%;
  margin-left: 25px;
  padding-top: 50px;
  display: flex;
  justify-content: center;

  .span-dv {
    width: 7px;
    height: 4px;
    background: #00b148;
    position: absolute;
    margin-top: 18px;
    
  }

  .sec-msg {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    color: #00b148;
    position: absolute;
    margin-left: -90px;
  }

  .sec-shadow {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 24px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    margin-top: 25px;
    margin-left: 30px;
  }

  .paragraph-one {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 80px;
    width: 273px;
    height: 339px;
  }
`;
