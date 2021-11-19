import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";
import { Layout } from "./components/layout/layout";
import { Header } from "./components/Header/header";
import { ChatList } from "./components/Chat-list/ChatList";

const light = createTheme({
  color: "black",
});

ReactDOM.render(
  <ThemeProvider theme={light}>
    <Layout
      header={<Header />}
      chats={<ChatList />}
      messages={<MessageList />}
    />
  </ThemeProvider>,
  document.getElementById("root")
);
