import { Button } from "antd";
import styles from "./styles.module.css";

function BtnCard({ titleBtn, onClick }) {
  return <Button 
  onClick={onClick}
  className={styles.button}>{titleBtn}</Button>;
}

export default BtnCard;
