import styles from "./styles.module.css";
import { Button } from "antd";

function BtnBanner({ title, onClick }) {
  return (
    <Button onClick={onClick}
    className={styles.button} type="text">
      {title}
    </Button>
  );
}

export default BtnBanner;
