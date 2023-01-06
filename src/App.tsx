import React from "react";
import { ToastContainer } from "react-toastify";
import { TeamProvider } from "./context/TeamContext";
import { UsersProvider } from "./context/UsersContext";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <TeamProvider>
          <AppRoutes />
        </TeamProvider>
      </UsersProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
