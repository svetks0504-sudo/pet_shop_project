import styles from "./styles.module.css";
import { Button } from "antd";

function BtnBanner({ title, onClick, htmlType,  disabled }) {
  return (
    <Button 
    onClick={onClick}
    className={styles.button} 
    type="text"
    htmlType={htmlType}
    disabled={disabled}>
      {title}
    </Button>
  );
}

export default BtnBanner;
