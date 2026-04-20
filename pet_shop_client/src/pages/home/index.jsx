import { Input, Anchor } from "antd";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slices/categoriesSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";
import CardCategories from "../../components/cardCategories";
import CardProduct from "../../components/cardProduct";
import { useEffect, useState } from "react";
import DividerHome from "../../components/dividerHome";
import { useForm } from "react-hook-form";
import BtnCard from "../../components/btnCard";
import BtnBanner from "../../components/btnBanner";
import Carousel from "../../components/carousel";


function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);

  const [isPost, setIsPost] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());  }, [dispatch]);

  const onSubmit = async (data) => {
    await dispatch(data);
    setIsPost(true);
    reset();
    setTimeout(() => {
      setIsPost(false);
    }, 1000);
  };

const discontArray = products.filter((item)=> item.discont_price !== null)

  return (
    <div>
      {/* -----1 part------  */}
      <div className={styles.imageContainer}>
        <h1 className={styles.titleHome}>
          Amazing Discounts on Pets Products!
        </h1>
        <div className={styles.leftBtn}>
          <Anchor affix={false}
           items={[
    {
      key: 'part-1',
      href: '#part-1',
      title: <BtnCard titleBtn="Check out" />,
    },
  ]}/>
        </div>
      </div>

      {/* ----- 2 part categories ------ */}
      <div className={styles.categoriesContainer}>
        <DividerHome title={"Categories"} all={"All categories "} />
        <Carousel array={categories} 
        component={CardCategories} 
        path="/allProducts?category="/>
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
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              className={styles.input}
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Name field is required</span>}

            <Input
              className={styles.input}
              placeholder="Phone number"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>Phone number field is required</span>}

            <Input
              className={styles.input}
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Email field is required</span>}
            <BtnBanner
              title={isPost ? "Request Submitted" : "Get a discount"}
            />
          </form>
        </div>
      </div>
      {/* ----- 4 part SALE products ------ */}
      <div className={styles.saleContainerHome} id="part-1">
        <DividerHome title={"Sale"} all={"All sales"} />
        <Carousel array={discontArray}
         component={CardProduct}
         path="/product/" />
      </div>
    </div>
  );
}

export default Home;
