import { useSelector } from "react-redux";


function Product() {
    const {product} = useSelector((state)=> state.products);
    return (
        <h1>Product</h1>
    )
}

export default Product;