import { Button, Empty, Typography } from "antd";
import {Link} from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

function EmpatyData() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      styles={{ image: { height: 200 }}}
      description={
        <Typography.Text>
          To products <Link to="/allProducts">Products</Link>
        </Typography.Text>
      }
    >
      <Link to="/">
        <Button type="primary" value="large">
          <HomeOutlined /> TO HOME PAGE
        </Button>
      </Link>
    </Empty>
  );
}

export default EmpatyData;
