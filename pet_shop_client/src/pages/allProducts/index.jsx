import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productsSlice";

function AllProducts() {
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
  <div>
{products?.map((prod) => {
    return (
        <div key={prod.id}>
            <p>{prod.title}</p>
            <p>{prod.description}</p>
        </div>
    )
})}
  </div>
  )
}

export default AllProducts;
