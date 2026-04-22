import { Button } from "antd";
import styles from "./styles.module.css";

function BtnCard({
   titleBtn,
   onClick,
  isBlock,  
  htmlType,
   widthBtn }) {
  return <Button style={{width: widthBtn}}
  disabled={isBlock}
  onClick={onClick}
   htmlType={htmlType}
  className={styles.button}>{titleBtn}</Button>;
}

export default BtnCard;
