import styled from "styled-components";

export const FooterBackground = styled.div`
  width: 100vw;
  height: 46px;
  background: rgba(6, 0, 0, 0.65);
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
    @media (min-width: 1000px) {
      width: 400px;
    }
    
  }

  .two-footer {
    display: flex;
    gap: 14px;    

    @media (min-width: 1000px) {
      width: 400px;
    }

    
  }

  .three-footer {
    display: flex;
    gap: 14px;
    margin-right: 50px;
    display: none;

    @media (min-width: 768px) {
        display: flex;        
    }
    @media (min-width: 1000px) {
      width: 400px;
    }
  
  }

  h2 {
    font-size: 14px;

    @media (min-width: 768px) {
        display: flex;
        font-size: 11px;
    }

    @media (min-width: 1000px) {
        font-size: 11px;
}

    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }

  @media (min-width: 1000px) {
        gap: 100px;
}

@media (min-width: 1200px) {
        gap: 200px;
}
  

  
`;
