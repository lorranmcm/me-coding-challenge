import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./context";
import "./global.css";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>
);
