import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChatPage } from "./pages/chat";

const Root = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="/profile" />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
