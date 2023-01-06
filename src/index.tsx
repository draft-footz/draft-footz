import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);
reportWebVitals();
