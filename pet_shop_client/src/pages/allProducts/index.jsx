import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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
  const [dataFilter, setdataFilter] = useState({
    isCheckActiv: false,
    from: 0,
    to: 0,
    sorted: "by default",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let title = "All products";
  let isCheckbox = true;
  let dataToShow = [...products];
  let breadArray = crumbArrayProducts;

  // category
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
    dataToShow = dataToShow.filter(
      (item) => item.categoryId === Number(category),
    );
    breadArray = crumbArrayCategory;
  }

  // discount
  if (type === "discount") {
    title = "Discounted items";
    isCheckbox = false;
    dataToShow = dataToShow.filter((item) => item.discont_price !== null);
    breadArray = crumbArrayDiscont;
  }
  

  if (dataFilter.isCheckActiv) {
    dataToShow = dataToShow.filter((item) => item.discont_price !== null);
  }

  // price filter
 if (dataFilter.from || dataFilter.to) {
  dataToShow = dataToShow.filter((elem) => {
    const price = elem.discont_price || elem.price;

    if (dataFilter.from && price < dataFilter.from) return false;
    if (dataFilter.to && price > dataFilter.to) return false;

    return true;
  });
}

  if (dataFilter.sorted === "price: low-high") {
    dataToShow.sort(
      (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price),
    );
  }
  if (dataFilter.sorted === "price: high-low") {
    dataToShow.sort(
      (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price),
    );
  }

  return (
    <div className={styles.productsContainer}>
      <BreadCrumb array={breadArray} />
      <h2 className={styles.titleProducts}>{title}</h2>
      <Filter
        isCheckbox={isCheckbox}
        dataFilter={dataFilter}
        setdataFilter={setdataFilter}
      />
      <div className={styles.cartsContainer}>
        {dataToShow?.map((prod) => {
          return <CardProduct key={prod.id} elem={prod} path="/product/" />;
        })}
      </div>
    </div>
  );
}

export default AllProducts;
