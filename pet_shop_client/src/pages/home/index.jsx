import { Button, Carousel } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import CardCategories from "../../components/cardCategories";
import { useEffect } from "react";
import { useRef } from "react";

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* -----1 part------  */}
      <div className={styles.imageContainer}>
        <h1 className={styles.titleHome}>
          Amazing Discounts on Pets Products!
        </h1>
        <Button
          color="primary"
          variant="solid"
          style={{
            marginRight: "auto",
            marginTop: "3vw",
            width: "218px",
            height: "58px",
          }}
        >
          Check out
        </Button>
      </div>

      {/* ----- 2 part categories ------ */}
      <div className={styles.categoriesContainer}>
        {/*  categories  */}

        <div className={styles.sliderWrapper}>
          <button className={styles.arrowLeft} onClick={scrollLeft}>
            ←
          </button>
          <div className={styles.carousel} ref={sliderRef}>
            {categories.map((categ) => {
              return (
                <div key={categ.id}>
                  <CardCategories categ={categ} />
                </div>
              );
            })}
          </div>
          <button className={styles.arrowRight} onClick={scrollRight}>
            →
          </button>
        </div>
      </div>

      {/* ----- 3 part 5% form ------ */}
      {/* ----- 4 part SALE products ------ */}
    </div>
  );
}

export default Home;
