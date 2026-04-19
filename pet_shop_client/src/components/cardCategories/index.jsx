import { Card } from "antd";
import styles from "./styles.module.css";

const BASE_URL = "http://localhost:3333";
const { Meta } = Card;

function CardCategories({ categ }) {
  return (
    <Card
      hoverable
      style={{ width: "316px",
        border:"none"
      }}
      cover={
        <div style={{ position: "relative" }}>
          <img
            className={styles.imgcart}
            alt={categ.title}
            src={`${BASE_URL}${categ.image}`}
          />
        </div>
      }
    >
      <h4 className={styles.cartText}>{categ.title}</h4>
    </Card>
  );
}

export default CardCategories;
