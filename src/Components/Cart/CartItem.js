import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import dataDishes from "../../Data/dataDishes";
import remove from './remove.png'

const CartItem = ({cartItem, index}) => {

    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
    const dispatch = useDispatch()
    return(
        <div className="cartItem" key={index}>
             <div className="CartIitemImg">
             <img className='img' src={`./${dishes.img}.jpg`} width="100" height="70"/>
             <span onClick ={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src={remove} width="25px"/></span>
             </div>
            <div className="position">
            <p className="dishName">{dishes.name} </p>
            <p>{cartItem.quantity} serving(s)</p>
            <h3 className="dishName"> price: ${dishes.price * cartItem.quantity}</h3>
            
           </div>
            
        </div>
    )
}

export default CartItem;


