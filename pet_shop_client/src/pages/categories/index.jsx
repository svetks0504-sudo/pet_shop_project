import BreadCrumb from "../../components/breadCrumb";
import { HomeOutlined } from "@ant-design/icons";
import styles from './styles.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchCategories} from '../../redux/slices/categoriesSlice'
import CardCategories from "../../components/cardCategories";

const categoriesArray = [
    {title: <HomeOutlined />,
    href: "/"
  },
  {
    title: "Categories",
    href: "/categories"
  }
]

function Categories() {
    const dispatch = useDispatch();
    const{categories} = useSelector((state)=>state.categories)

    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch]);

    return (
        <div className={styles.categoriesContainer}>
            <BreadCrumb array={categoriesArray}/>
            <h2 className={styles.categoriesTitle}>Categories</h2>

            <div className={styles.cartsContainer}>
                {categories.map((categor)=>{
                    return (
                        <CardCategories key={categor.id}
                        categ={categor}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories;