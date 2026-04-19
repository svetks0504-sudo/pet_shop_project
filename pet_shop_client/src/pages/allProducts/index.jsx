import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import { Breadcrumb } from "antd";
import styles from "./styles.module.css";
import { HomeOutlined } from "@ant-design/icons";
import CardProduct from "../../components/cardProduct";




function AllProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  

  return (
    <div className={styles.productsContainer}>
      <Breadcrumb
        separator="⭢"
        style={{
          fontSize: "16px",
          fontWeight: "500",
          fontFamily: "Montserrat, sans-serif",
        }}
        items={[
          {
            title: (
              <a href="/" className={styles.crumb}>
                <HomeOutlined />
              </a>
            ),
          },
          {
            title: <a href="allProducts" className={styles.crumb}>
              All products
              </a>,
          },
        ]}
      />
      <h2>All products</h2>
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
