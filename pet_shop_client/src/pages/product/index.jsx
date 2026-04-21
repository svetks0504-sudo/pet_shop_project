import { useEffect, useState } from "react";
import BreadCrumb from "../../components/breadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/slices/productsSlice";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import DiscountPrice from "../../components/discountPrice";
import CountInput from "../../components/countInput";
import BtnCard from "../../components/btnCard";
import { addToCart } from "../../redux/slices/cartSlice";

const BASE_URL = "http://localhost:3333";

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const [count, setCount] = useState(0);

  const { product } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(fetchCategories());
  }, [dispatch, id]);

  const productName = product?.[0];

  const categoryName = categories?.find(
    (cat) => cat.id === productName?.categoryId,
  )?.title;

  const breadCrumbArray = [
    { title: <HomeOutlined />, href: "/" },
    { title: "Categories", href: "/categories" },
    {
      title: categoryName,
      href: `/allProducts?category=${productName?.categoryId}`,
    },
    { title: productName?.title, href: `/products/${id}` },
  ];

  const isDiscount = productName?.discont_price;

  const onClick = () => {
    setCount(1);
    setIsAdded(true);
    dispatch(
      addToCart({
        ...productName,
        quantity: 1,
      }),
    );
  };
  const btnText = isAdded ? "Added" : "Add to cart";

  return (
    <div className={styles.productContainer}>
      <BreadCrumb array={breadCrumbArray} />

      <div className={styles.product}>
        <img
          className={styles.productImg}
          src={`${BASE_URL}${productName?.image}`}
          alt={productName?.title}
        />
        <div className={styles.productText}>
          <h3>{productName?.title}</h3>
          <div className={styles.productFlexRel}>
            <h2>${productName?.discont_price}</h2>
            <h3 className={styles.aldprice}>${productName?.price}</h3>
            {isDiscount && <DiscountPrice elem={productName} size={"0"} />}
          </div>
          <div className={styles.productFlex}>
            <CountInput
              max={1}
              count={count}
              isBlock={isAdded}
              setCount={setCount}
            />
            <BtnCard titleBtn={btnText} onClick={onClick} isBlock={isAdded} />
          </div>

          <div className={styles.text}>
            <h4>Description</h4>
            <p className={`${styles.texts} ${open ? styles.open : ""}`}>
              {productName?.description}
            </p>
            <button className={styles.btn}
            onClick={() => setOpen((prev) => !prev)}>
              {open ? "Hide" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
