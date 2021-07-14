import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ReactLocation } from "react-location";

ReactDOM.render(
  <React.StrictMode>
    <ReactLocation>
      <App />
    </ReactLocation>
  </React.StrictMode>,
  document.getElementById("root")
);
