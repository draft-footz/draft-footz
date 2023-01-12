import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-image: url('./bg-dashboard.png');
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  >main {
    display: flex;
    flex-direction: column;
    width: 100%;


    >div:nth-child(2) {
      background-color: rgba(21, 21, 21, 70%);
      margin: auto;
      width: calc(100vw - 3.25rem);
      padding: 1rem 2rem;
      box-sizing: border-box;
      height: calc( 95vh - 5rem);
      margin-top: 2.5vh;
      border-radius: 1.5rem;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }



  @media (min-width: 800px) {
    
    >main {
      margin: auto;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 64rem;
      max-width: 95%;

      >div:nth-child(2) {
        margin-top: 0;
        height: 40rem;
        border-radius: 0;
        border-top-right-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
      }
    }

  }
`;