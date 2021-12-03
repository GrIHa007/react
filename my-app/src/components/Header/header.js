import { Link } from "react-router-dom";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/profile">
          Profile
        </Link>
        <Link className={styles.link} to="/chat">
          Chat
        </Link>
      </nav>
    </div>
  );
}
