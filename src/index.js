import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CriptoContext from "./CriptoContext";
ReactDOM.render(
  <React.StrictMode>
    <CriptoContext>
      <App />
    </CriptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);
