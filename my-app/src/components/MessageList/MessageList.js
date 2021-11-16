import React, { useEffect, useState } from "react";
import { Message } from "./message";
import styles from "./MessageList.module.css";
import { Input, InputAdornment } from "@mui/material";
import {} from "@mui/material";
import {} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export function MessageList(props) {
  const [messageList, setList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    setList([...messageList, { author: "Me", text: value }]);
    setValue("");
  };

  useEffect(() => {
    const lastAuthor = messageList[messageList.length - 1];

    if (messageList.length && lastAuthor.author === "Me") {
      setTimeout(() => {
        setList([...messageList, { author: "Bot", text: "Hello from Bot!" }]);
      }, 500);
    }
  }, [messageList]);

  return (
    <div className={styles.text}>
      <h1>Hello world! My name is {props.name}! Who are you?</h1>
      <h2>Here, you may write several words about you :)</h2>
      <div className={styles.container}>
        <div className={styles.area}>
          {messageList.map((article, index) => (
            <Message key={index} article={article} />
          ))}
        </div>
        <Input
          className={styles.Input}
          variant="outlined"
          fullWidth
          placeholder="Текст сообщения"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <SendIcon className={styles.SendIcon} onClick={sendMessage} />
              )}
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}

export default MessageList;
