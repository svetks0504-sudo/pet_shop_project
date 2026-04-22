import { Anchor } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";
import CardCategories from "../../components/cardCategories";
import CardProduct from "../../components/cardProduct";
import { useEffect } from "react";
import DividerHome from "../../components/dividerHome";
import BtnCard from "../../components/btnCard";
import BtnBanner from "../../components/btnBanner";
import Carousel from "../../components/carousel";
import { sendSale } from "../../redux/slices/postSlice";
import { resetState } from "../../redux/slices/postSlice";
import UniversalForm from "../../components/universalForm";

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const { success, error, message, loading } = useSelector(
    (state) => state.post,
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  const discontArray = products.filter((item) => item.discont_price !== null);

  return (
    <div>
      {/* -----1 part------  */}
      <div className={styles.imageContainer}>
        <h1 className={styles.titleHome}>
          Amazing Discounts on Pets Products!
        </h1>
        <div className={styles.leftBtn}>
          <Anchor
            affix={false}
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: <BtnCard titleBtn="Check out" widthBtn= {"71rem"} />,
              },
            ]}
          />
        </div>
      </div>

      {/* ----- 2 part categories ------ */}
      <div className={styles.categoriesContainer}>
        <DividerHome title={"Categories"} all={"All categories "} />
        <Carousel
          array={categories}
          component={CardCategories}
          path="/allProducts?category="
        />
      </div>

      {/* ----- 3 part 5% form ------ */}
      <div className={styles.formContainer}>
        <h2 className={styles.formContainerTitel}>5% off on the first order</h2>
        <div className={styles.formContainerFlex}>
          <img
            className={styles.formImg}
            src="src/assets/images/dogs.png"
            alt="icons"
          />

          <UniversalForm
            onSubmit={(data) => dispatch(sendSale(data))}
            background={"rgba(13, 80, 255, 1)"}
            backgroundIn={"rgba(13, 80, 255, 1)"}
            color={"rgba(255, 255, 255, 1)"}
            colorPl={"rgba(255, 255, 255, 1)"}
            success={success}
            loading={loading}
            padding={"2vw"}
            resetSuccess={() => dispatch(resetState())}
          >
            <BtnBanner
              disabled={loading}
              htmlType={"submit"}
              title={
                loading
                  ? "Sending..."
                  : success
                    ? "Request Submitted"
                    : "Get a discount"
              }
            />
          </UniversalForm>
        </div>
      </div>
      {/* ----- 4 part SALE products ------ */}
      <div className={styles.saleContainerHome} id="part-1">
        <DividerHome title={"Sale"} all={"All sales"} />
        <Carousel
          array={discontArray}
          component={CardProduct}
          path="/product/"
        />
      </div>
    </div>
  );
}

export default Home;
