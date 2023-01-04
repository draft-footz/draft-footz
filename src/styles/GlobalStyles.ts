import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary: #00B148;

    --windowBackground: rgba(33, 33, 33, 0.6); 

    --gray0: #fff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  border: none;
  text-decoration: none;
  list-style: none;

  color: var(--gray0);
  font-family: 'Poppins', sans-serif;
}

button{
    cursor: pointer;
}

.App{
  width: 100vw;
  height: 100vh;
}

`;