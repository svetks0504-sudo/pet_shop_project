import styles from './styles.module.css'
import { Select, Checkbox, InputNumber, Row, Col} from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import { useCallback } from 'react';
 

const options = [
  { label: 'by default', value: 'by default' },
  { label: 'newest', value: 'newest' },
  { label: 'price: high-low', value: 'price: high-low' },
  { label: 'price: low-high', value: 'price: low-high' },
];


const labelRender = props => {
  const { label, value } = props;
  if (label) {
    return value;
  }
  return <span>No option match</span>;
};

function Filter ({isCheckbox, dataFilter, setdataFilter}){

  
const handleFilterChange = useCallback((field, value) => {
  setdataFilter(prev => ({
    ...prev,
    [field]: value
  }));
}, [setdataFilter]);



    return(
<div className={styles.filterContainer}
style={{width: isCheckbox ? "63vw" : "44vw"}}>

    <label className={styles.labelFiltr}>
        Price 
        <Row gutter={16} align="middle">
  <Col>
    <InputNumber style={{fontSize: "4rem", fontWeight: "600"}} 
    placeholder="from" 
    value={dataFilter.from}
    onChange={(value) => handleFilterChange("from", value)}
    min={0} />
  </Col>
  
  <Col>
    <InputNumber style={{fontSize: "4rem", fontWeight: "600"}}
    placeholder="to" 
    value={dataFilter.to}
    onChange={(value) => handleFilterChange("to", value)}
    min={0} />
  </Col>
</Row>
    </label>

{isCheckbox && (
  <ConfigProvider
  theme={{
    components: {
      Checkbox: {
        controlInteractiveSize: "9rem",
      },
    },
  }}
>
<Checkbox style={{fontSize:"5rem", 
    fontWeight:"600",
    fontFamily: "Montserrat, sans-serif"
}}
 onChange={(event)=>{ handleFilterChange("isCheckActiv", event.target.checked)}}>
Discounted items
</Checkbox>
</ConfigProvider>)}

<label className={styles.labelFiltr}>Sorted
 <Select suffixIcon={<DownOutlined className={styles.arrow} />}
  labelRender={labelRender} 
 defaultValue="by default" 
 style={{ width: '14vw',
    fontSize: "4rem",

  }} 
 onChange={(value)=>handleFilterChange("sorted", value)}
 options={options} 
/>
</label>

</div>
    )
}

export default Filter;