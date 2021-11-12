import React, { useEffect, useState } from "react";
import "./App.css";

function Massage(props) {
  const [messageList, setList] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = () => {
    setList([...messageList, { author: "Me:", text: value }]);
    setValue("");
  };

  useEffect(() => {
    const lastAuthor = messageList[messageList.length - 1];

    if (messageList.length && lastAuthor.author === "Me") {
      setList([...messageList, { author: "Bot", text: "Hello from Bot!" }]);
    }
  }, [messageList]);

  return (
    <div className="text">
      <h1>Hello world! My name is {props.name}! Who are you?</h1>
      <h2>Here you may write several words about you :)</h2>
      <div className="container">
        <div className="area">
          {messageList.map((article) => (
            <div key="1">
              <h5>{article.author}</h5>
              <h4>{article.text}</h4>
            </div>
          ))}
        </div>
        <textarea
          placeholder="Текст сообщения"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Massage;
