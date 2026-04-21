import { Flex, InputNumber } from "antd";

function CountInput({ count, max, isBlock, setCount }) {
  
  return (
    <InputNumber
      mode="spinner"
      placeholder="Outlined"
      disabled={isBlock}
      min={0}
      max={max}
      value={count}
      onChange={(value) => setCount(value)}
     
      style={{ width: "50rem", height: "15rem" }}
    />
  );
}

export default CountInput;
