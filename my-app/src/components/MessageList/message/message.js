import classNames from "classnames";
import styles from "./message.module.css";

export function Message({ article }) {
  return (
    <div
      className={classNames(styles.BotMessage, {
        [styles.MyMessage]: article.author === "Me",
      })}
    >
      <h3>{article.author}</h3>
      <p>{article.text}</p>
      <p>12:03</p>
    </div>
  );
}
