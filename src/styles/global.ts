import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary: #00B148;
    --primaryDisabled: #00B14820;

    --windowBackground: rgba(33, 33, 33, 0.6);
    --inputsBackground: rgba(21, 20, 20, 0.4);
    --inputsBackgroundFocus: rgba(0, 0, 0, 0.4);

    --gray0: #fff;
    --gray1: #999999;
    --red: #F94646;
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

body {
  overflow-x: hidden;
}

button{
    cursor: pointer;
  
    &:hover {
      filter: brightness(0.9);
    }
}

.App{
  width: 100vw;
  height: 100vh;
}

.error{
  font-weight: 600;
  font-size: 11px;

  color: var(--red);
}

.invalid {
    background-color: var(--primaryDisabled);
    color: var(--gray1);

    cursor: not-allowed;
}

`;
