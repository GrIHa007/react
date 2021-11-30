import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import styles from "./chat.module.css";

export function Chat({ title, selected, handleListItemClick }) {
  return (
    <ListItem button={true} selected={selected} onClick={handleListItemClick}>
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="12.30" />
      </div>
    </ListItem>
  );
}
