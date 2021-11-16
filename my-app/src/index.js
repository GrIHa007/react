import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";

const myName = "Grigory";

const light = createTheme({
  color: "black",
});

ReactDOM.render(
  <ThemeProvider theme={light}>
    <MessageList name={myName} />
  </ThemeProvider>,
  document.getElementById("root")
);
