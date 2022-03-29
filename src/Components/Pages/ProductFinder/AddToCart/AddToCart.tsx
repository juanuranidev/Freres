import React, { useContext, useState } from 'react';
import { CartContext } from '../../../Context/CartContext';
import CartContent from '../../../Navbar/CartContent/CartContent';
import './AddToCart.scss';

interface AddToCartProps{
    stock: number
}

const AddToCart = ({stock}:AddToCartProps) => {
    const [amount, setAmount] = useState<number>(1) 

    const { addToCart } = useContext(CartContext)

   

    const handleIncrement = () => stock > amount && setAmount(prev => prev + 1)
    const handleDecrement = () => amount > 1 && setAmount(prev => prev - 1)   
    
    return (
    <div className='addToCart'>
        <div className='addToCart_div'>
            <span className='fa fa-minus addToCart_div_span' onClick={handleDecrement}/>
            <p className='addToCart_div_p'>{amount}</p>
            <span className='fa fa-plus addToCart_div_span' onClick={handleIncrement}/>   
        </div>
        <button className='addToCart_button'>AGREGAR AL CARRITO</button>
    </div>
  );
}

export default AddToCart;