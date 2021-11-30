import React from "react";
import { Link } from "react-router-dom";
import { List } from "@mui/material";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <List component="nav">
        <Link to="/chat">
          <h5>Chat</h5>
        </Link>
        <Link to="/profile">
          <h5>Profile</h5>
        </Link>
      </List>
    </div>
  );
}
