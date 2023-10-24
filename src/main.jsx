import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeChange from "./modules/keypad/themechange.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeChange />
    <App />
  </React.StrictMode>
);
