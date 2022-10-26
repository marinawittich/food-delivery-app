const ChangeQuantity = ({quantity, setQuantity}) =>{

    const increaseQuantity = () =>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const decreaseQuantity = () =>{
        if (quantity <= 1)return
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return(
        <div className="changeQuantity">
            <button className="quantityBtn" onClick={increaseQuantity}>+</button>
            <span >{quantity}</span>
            <button className="quantityBtn" onClick={decreaseQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;