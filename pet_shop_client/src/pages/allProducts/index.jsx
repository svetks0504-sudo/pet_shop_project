import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import styles from "./styles.module.css";
import CardProduct from "../../components/cardProduct";
import BreadCrumb from "../../components/breadCrumb";
import { HomeOutlined } from "@ant-design/icons";
import Filter from "../../components/filter";

const crumbArray = [
  {
    title: <HomeOutlined />,
    href: "/"
  },
  {
    title: "All products",
    href: "/allProducts"
  }
]


function AllProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  

  return (
    <div className={styles.productsContainer}>
     <BreadCrumb array={crumbArray}/>
      <h2 className={styles.titleProducts}>All products</h2>
      <Filter />
      <div className={styles.cartsContainer}>
        {products?.map((prod) => {
          return (
        <CardProduct key={prod.id} prod={prod}/>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
