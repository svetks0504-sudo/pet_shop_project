import { Button } from "antd";
import styles from "./styles.module.css";

function BtnCard({ titleBtn, onClick, isBlock }) {
  return <Button 
  disabled={isBlock}
  onClick={onClick}
  className={styles.button}>{titleBtn}</Button>;
}

export default BtnCard;
