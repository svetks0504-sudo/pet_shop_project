import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function BreadCrumb({ array }) {
  return (
   
    <Breadcrumb
      separator="⭢"
      style={{
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "Montserrat, sans-serif",
        marginTop: "2vw",
        marginBottom: "2vw",
      }}
      items={array.map((item, index) => {
        return {
          title: (
            <div className={styles.containerRight}>
            <Link to={item.href}
            className={`${styles.crumb} ${
          index === array.length - 1 ? styles.last : ""
        }`}>
              {item.title}
            </Link>
            </div>
          ),
        };
      })}
    />
    
  );
}

export default BreadCrumb;
