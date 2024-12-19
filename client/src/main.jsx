import React from "react";
import { createRoot } from 'react-dom/client';  // Correct import
import App from "./App";
import { AuthProvider } from "./store/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DarkModeProvider } from "./context/DarkModeContext";  // Import DarkModeProvider

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <DarkModeProvider> {/* Wrap your app with DarkModeProvider */}
      <React.StrictMode>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </React.StrictMode>
    </DarkModeProvider>
  </AuthProvider>
);
