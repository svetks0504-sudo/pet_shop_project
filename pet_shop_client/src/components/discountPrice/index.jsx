import styles from "./styles.module.css";

function DiscountPrice({ elem, size }) {

  const discount = (price, discountPrice) => {
    return Math.round(((price - discountPrice) * 100) / price);
  };
  return (
    <div className={styles.seleBadge}
    style={{top: size, right: size}}>
      -{discount(elem.price, elem.discont_price)}%
    </div>
  );
}

export default DiscountPrice;
