import { Flex, InputNumber } from "antd";
import styles from './styles.module.css'

function CountInput({ count, max, isBlock, setCount }) {  
  return (
    <InputNumber
    className={styles.countI}
      mode="spinner"
      placeholder="Outlined"
      disabled={isBlock}
      min={0}
      max={max}
      value={count}
      onChange={(value) => setCount(value)}
    />
  );
}

export default CountInput;
