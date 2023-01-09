import React from "react";
import { ToastContainer } from "react-toastify";
import { UsersProvider } from "./context/UsersContext";
import { AppRoutes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <UsersProvider>
        <AppRoutes />
      </UsersProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}

export default App;
