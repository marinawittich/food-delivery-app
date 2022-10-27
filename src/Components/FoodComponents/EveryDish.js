import time from './time.png'
import delivery from './delivery.png'
import price from './price.png'
import { useState } from 'react'
import ChangeQuantity from '../Cart/ChangeQuantity'
import { addItemToCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const EveryDish = ({dish, index}) => {
    const [quantity, setQuantity] =useState(1)
    const dispatch = useDispatch();
    return(
        <div key={index}>
            <div className='everyDishCont'>
            <img className='img' src={`./${dish.img}.jpg`} width="300" height="250"/>
           
            <div className='center'><h2>{dish.name}</h2></div>
            <div className='time'>
            <img className='icon' src={price} width="25px" height="25"/><h4>price: ${dish.price}/serving</h4>
            </div>
            <div className='time'>
            <img className='icon' src={time} width="25px" height="25"/><p>{dish.time} min</p>
            </div>
            <div className='time'>
            <img className='icon'  src={delivery} width="25px" height="25"/><p>delivery fee: ${dish.price/5}</p>
            </div>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className='btn' onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add to cart</button>
        </div>
        </div>
    )
}

export default EveryDish;