import styles from './styles.module.css'
import { Select, Checkbox, InputNumber, Row, Col} from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";


const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};


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

const handleChange = value => {
  console.log(`selected ${value}`);
};

function Filter ({isCheckbox}){
    return(
<div className={styles.filterContainer}
style={{width: isCheckbox ? "63vw" : "44vw"}}>

    <label className={styles.labelFiltr}>
        Price 
        <Row gutter={16} align="middle">
  <Col>
    <InputNumber placeholder="from" min={0} />
  </Col>
  
  <Col>
    <InputNumber placeholder="to" min={0} />
  </Col>
</Row>
    </label>

{isCheckbox && (
  <ConfigProvider
  theme={{
    components: {
      Checkbox: {
        controlInteractiveSize: 36,
      },
    },
  }}
>
<Checkbox style={{fontSize:"5rem", 
    fontWeight:"600",
    fontFamily: "Montserrat, sans-serif"
}}
 onChange={onChange}>
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
 onChange={handleChange}
 options={options} 
/>
</label>

</div>
    )
}

export default Filter;