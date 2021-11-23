import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChatPage } from "./pages/chat";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/chat/*" element={<ChatPage />}></Route>
      <Route path="/profile"></Route>
      <Route path="/*" element={<h1>404</h1>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
