import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { useState } from "react";
import { Chat } from "./Chat";
import styles from "../Chat-list/ChatList.module.css";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);
  const params = useParams();

  return (
    <List className={styles.nav} component="nav">
      {chats.map((chat, index) => (
        <Link className={styles.link} key={chat} to={`/chat/${chat}`}>
          <Chat title={chat} selected={params.roomId === chat} />
        </Link>
      ))}
    </List>
  );
};
