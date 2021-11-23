import classNames from "classnames";
import styles from "./message.module.css";

export function Message({ message }) {
  return (
    <div
      className={classNames(styles.BotMessage, {
        [styles.MyMessage]: message.author === "Me",
      })}
    >
      <h3>{message.author}</h3>
      <p>{message.text}</p>
      <p>12:03</p>
    </div>
  );
}
