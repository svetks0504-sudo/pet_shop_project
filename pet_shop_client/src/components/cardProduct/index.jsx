import { Card } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import DiscountPrice from "../discountPrice";

const BASE_URL = "http://localhost:3333";

function CardProduct({ elem, path }) {
  const { Meta } = Card;
  const hasDiscount = elem.discont_price;


  return (
    <Link to={`${path}${elem.id}`}
    style={{textDecoration: "none"}}>
      <Card
        hoverable
        style={{ width: "316px" }}
        cover={
          <div style={{ position: "relative" }}>
            {hasDiscount && (
              <DiscountPrice elem={elem} size={"16px"}/>
            )}
            <img
              className={styles.imgcart}
              alt={elem.title}
              src={`${BASE_URL}${elem.image}`}
            />
          </div>
        }
      >
        <Meta
          title={elem.title}
          description={
            <div>
              {hasDiscount ? (
                <div className={styles.textCart}>
                  <h3 className={styles.actualPrice}>${elem.discont_price}</h3>
                  <h4 className={styles.aldPrice}>${elem.price}</h4>
                </div>
              ) : (
                <h3 className={styles.actualPrice}>${elem.price}</h3>
              )}
            </div>
          }
        />
      </Card>
    </Link>
  );
}

export default CardProduct;
