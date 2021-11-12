import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Massage from "./App";

const myName = "Grigory";
ReactDOM.render(
  <React.StrictMode>
    <Massage name={myName} />
  </React.StrictMode>,
  document.getElementById("root")
);
