import React from "react";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/routes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
