import { useEffect } from 'react';
import {removeFromCart, clearCart, updateQuantity} from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';


function ShoppingCart() {
    const {cart} = useSelector((state)=> state.cart)
    const dispatch = useDispatch();


    return (
        <>
        {cart.map((item)=>{
console.log(item)
        })}
        </>
    )
}

export default ShoppingCart;