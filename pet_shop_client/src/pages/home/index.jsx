import { Button, Carousel, Input } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import CardCategories from "../../components/cardCategories";
import { useEffect, useRef } from "react";
import DividerHome from "../../components/dividerHome";
import { useForm } from "react-hook-form";

function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const sliderRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  const onSubmit = async (data) => {
    await dispatch((data));
    reset();
  }

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
        <DividerHome title={"Categories"} all={"All categories "} />

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
      <div className={styles.formContainer}>

        <h2 className={styles.formContainerTitel}>5% off on the first order</h2>
        <div className={styles.formContainerFlex}>
        <img className={styles.formImg}
        src="src/assets/images/dogs.png" 
        alt="icons"/>
        <form className={styles.form}
        onSubmit={handleSubmit(onSubmit)}>
          <Input className={styles.input}
          placeholder="Name" 
          {...register("name",{required: true})}/>
          {errors.name && <span>Name field is required</span>}
          
          <Input className={styles.input}
          placeholder="Phone number"
          {...register("phone",{required: true})} />
          {errors.phone && <span>Phone number field is required</span>}
          
          <Input className={styles.input}
          placeholder="Email"
          {...register("email",{required: true})} />
          {errors.email && <span>Email field is required</span>}
          <Button className={styles.button}
          type="primary">
            Get a discount
            </Button>
        </form>
        </div>
      </div>
      {/* ----- 4 part SALE products ------ */}
    </div>
  );
}

export default Home;
