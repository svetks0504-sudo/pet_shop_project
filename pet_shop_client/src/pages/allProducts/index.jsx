import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";
import styles from "./styles.module.css";
import CardProduct from "../../components/cardProduct";
import BreadCrumb from "../../components/breadCrumb";
import { HomeOutlined } from "@ant-design/icons";
import Filter from "../../components/filter";
import { useSearchParams } from "react-router-dom";

const crumbArrayProducts = [
  {
    title: <HomeOutlined />,
    href: "/",
  },
  {
    title: "All products",
    href: "/allProducts",
  },
];
const crumbArrayDiscont = [
  {
    title: <HomeOutlined />,
    href: "/",
  },
  {
    title: "All sales",
    href: "/allProducts?type=discount",
  },
];

function AllProducts() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
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

  let title = "All products";
  let isCheckbox = true;
  let dataToShow = products;
  let breadArray = crumbArrayProducts;

  if (type === "discount") {
    title = "Discounted items";
    isCheckbox = false;
    dataToShow = discountProducts;
    breadArray = crumbArrayDiscont;
  }
  if (category) {
    const categoryName = categories.find(
      (cat) => cat.id === Number(category),
    )?.title;

    const crumbArrayCategory = [
      { title: <HomeOutlined />, href: "/" },
      { title: "Categories", href: "/categories" },
      { title: categoryName, href: `/allProducts?category=${category}` },
    ];

    title = categoryName;
    isCheckbox = true;
    dataToShow = categoryProducts;
    breadArray = crumbArrayCategory;
  }

  return (
    <div className={styles.productsContainer}>
      <BreadCrumb array={breadArray} />
      <h2 className={styles.titleProducts}>{title}</h2>
      <Filter isCheckbox={isCheckbox} />
      <div className={styles.cartsContainer}>
        {dataToShow?.map((prod) => {
          return <CardProduct key={prod.id} elem={prod} path="/product/" />;
        })}
      </div>
    </div>
  );
}

export default AllProducts;
