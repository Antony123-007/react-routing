import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Outlet />
    <App />
  </React.StrictMode>
);
