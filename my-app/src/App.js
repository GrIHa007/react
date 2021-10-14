import React from "react";
import "./App.css";

function Massage(props) {
  return (
    <div className="text">
      <h1>Hello world! My name is {props.name}.</h1>
      <h2>How are you?</h2>
    </div>
  );
}

export default Massage;
