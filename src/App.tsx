import React from "react";
import { ToastContainer } from "react-toastify";
import { TeamProvider } from "./context/TeamContext";
import { UsersProvider } from "./context/UsersContext";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <>
      <UsersProvider>
        <TeamProvider>
          <AppRoutes />
        </TeamProvider>
      </UsersProvider>
      <ToastContainer />
    </>
  );
}

export default App;
