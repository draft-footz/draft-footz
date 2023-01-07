import styled from "styled-components";

export const FooterBackground = styled.div`
  width: 100vw;
  height: 46px;
  background: rgba(6, 0, 0, 0.55);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
     gap: 30px;      
    }

  .one-footer {
     gap: 14px;
     margin-left: 50px;
     display: none;

     @media (min-width: 768px) {
        display: flex;     
    }
  }

  .two-footer {
    display: flex;
    gap: 14px;    
  }

  .three-footer {
    display: flex;
    gap: 14px;
    margin-right: 50px;
    display: none;

    @media (min-width: 768px) {
        display: flex;        
    }
  }

  h2 {
    font-size: 14px;

    @media (min-width: 768px) {
        display: flex;
        font-size: 11px;
    }

    @media (min-width: 1000px) {
        font-size: 14px;
}
  }

  @media (min-width: 1000px) {
        gap: 200px;
}

  

  
`;
