import React from "react";
import { render } from "react-dom";

import "./index.scss";

import { ReactLocation } from "react-location";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import App from "./App";
import { theme } from "./theme";

render(
  <React.StrictMode>
    <ReactLocation>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReactLocation>
  </React.StrictMode>,
  document.getElementById("root")
);
