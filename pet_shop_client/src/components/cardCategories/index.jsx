import { Card } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3333";
const { Meta } = Card;

function CardCategories({ elem, path }) {
  return (
    <Link to={`${path}${elem.id}`} 
    key={elem.id}
    style={{textDecoration: "none"}}>
      <Card
        hoverable
        style={{ width: "316px", border: "none" }}
        cover={
          <div style={{ position: "relative" }}>
            <img
              className={styles.imgcart}
              alt={elem.title}
              src={`${BASE_URL}${elem.image}`}
            />
          </div>
        }
      >
        <h4 className={styles.cartText}>{elem.title}</h4>
      </Card>
    </Link>
  );
}

export default CardCategories;
