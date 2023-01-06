import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
