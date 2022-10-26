import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const deliveryFee = totalPrice/10
    const taxes = totalPrice * 20/100
    const total = totalPrice + deliveryFee + taxes

    return(
        <div >
            <h3 className="order">My Order</h3>
            
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)} 
            <div className="cart">
            <p>Sub total: ${totalPrice}</p>
            <p>Taxes: ${taxes}</p>
            <p>Delivery fee: ${deliveryFee}</p>
            <h3>TOTAL: ${(total).toFixed(2)}</h3>
            </div>


            
       
        </div>
    )
}

export default Cart;