import React from 'react';
import './AddToCart.scss';

interface AddToCartProps{
    stock: number;
    size: string;
    amount: number;
    setAmount: (amount: number) => void;
    handleAddToCart: () => void;
}

const AddToCart = ({stock, size, amount, setAmount, handleAddToCart }:AddToCartProps) => {

    const handleIncrement = () => stock > amount && setAmount(amount + 1)
    const handleDecrement = () => amount > 1 && setAmount(amount - 1)   

    return (
    <div className='addToCart'>
        <div className='addToCart_div'>
            <span className='fa fa-minus addToCart_div_span' onClick={handleDecrement}/>
            <p className='addToCart_div_p'>{amount}</p>
            <span className='fa fa-plus addToCart_div_span' onClick={handleIncrement}/>   
        </div>
        {size===""
        ? <button className='addToCart_button disabled' disabled>AGREGAR AL CARRITO</button>
        : <button className='addToCart_button' onClick={handleAddToCart}>AGREGAR AL CARRITO</button>}
        
    </div>
  );
}

export default AddToCart;