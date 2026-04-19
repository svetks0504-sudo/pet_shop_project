import { Card } from "antd";
import styles from "./styles.module.css";

const BASE_URL = "http://localhost:3333";

function CardProduct({ prod }) {
  const { Meta } = Card;
  const hasDiscount = prod.discont_price;

  const discount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) * 100) / price);
  };

  return (
    <Card
      hoverable
      style={{ width: "316px" }}
      cover={
        <div style={{ position: "relative" }}>
          {hasDiscount && (
            <div className={styles.seleBadge}>
              -{discount(prod.price, prod.discont_price)}%
            </div>
          )}
          <img
            className={styles.imgcart}
            alt={prod.title}
            src={`${BASE_URL}${prod.image}`}
          />
        </div>
      }
    >
      <Meta
        title={prod.title}
        description={
          <div>
            {hasDiscount ? (
              <div className={styles.textCart}>
                <h3 className={styles.actualPrice}>${prod.discont_price}</h3>
                <h4 className={styles.aldPrice}>${prod.price}</h4>
              </div>
            ) : (
              <h3 className={styles.actualPrice}>${prod.price}</h3>
            )}
          </div>
        }
      />
    </Card>
  );
}

export default CardProduct;
