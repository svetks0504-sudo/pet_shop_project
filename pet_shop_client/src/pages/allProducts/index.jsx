import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import styles from "./styles.module.css";
import CardProduct from "../../components/cardProduct";
import BreadCrumb from "../../components/breadCrumb";
import { HomeOutlined } from "@ant-design/icons";
import Filter from "../../components/filter";
import { useSearchParams } from "react-router-dom";


const crumbArray = [
  {
    title: <HomeOutlined />,
    href: "/",
  },
  {
    title: "All products",
    href: "/allProducts",
  },
];

function AllProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [params] = useSearchParams();

  const type = params.get("type");
  const category = params.get("category");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const discountProducts = products.filter(
    (item) => item.discont_price !== null,
  );
  const categoryProducts = category
    ? products.filter((item) => item.categoryId === Number(category))
    : [];

  let dataToShow = products;
  let title = "All products";

  if (type === "discount") {
    dataToShow = discountProducts;
    title = "Discounted items";
  }
  if (category) {
    dataToShow = categoryProducts;
    title = "Dry & Wet Food";
  }

  return (
    <div className={styles.productsContainer}>
      <BreadCrumb array={crumbArray} />
      <h2 className={styles.titleProducts}>{title}</h2>
      <Filter />
      <div className={styles.cartsContainer}>
        {dataToShow?.map((prod) => {
          return <CardProduct key={prod.id} 
          elem={prod}
          path="/product/" />;
        })}
      </div>
    </div>
  );
}

export default AllProducts;
