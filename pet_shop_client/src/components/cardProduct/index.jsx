import { Card } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import DiscountPrice from "../discountPrice";
import BtnCart from "../../components/btnCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { useState } from "react";

const BASE_URL = "http://localhost:3333";

function CardProduct({ elem, path }) {
  const { Meta } = Card;
  const hasDiscount = elem.discont_price;
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const { cart } = useSelector((state) => state.cart);

  const handleClick = (elem, product) => {
    elem.preventDefault();
    elem.stopPropagation();
    const exists = cart.find((item) => item.id ===  product.id);
    if (exists) {
      dispatch(removeFromCart(product.id));
      setAdded(false);
    } else {
      dispatch( addToCart({...product, quantity: 1 })),
     setAdded(true);
    }
  };

  return (
    <Link to={`${path}${elem.id}`} style={{ textDecoration: "none" }}>
      <Card
        hoverable
        style={{ width: "316px" }}
        cover={
          <div style={{ position: "relative" }}>
            {hasDiscount && <DiscountPrice elem={elem} size={"16px"} />}
            <div className={styles.btnCard}>
              <BtnCart
                titleBtn={added ? "Added" : "Add to cart"}
                onClick={(e) => handleClick(e, elem)}
                isBlock={added}
                widthBtn={"74rem"}
              />
            </div>

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
