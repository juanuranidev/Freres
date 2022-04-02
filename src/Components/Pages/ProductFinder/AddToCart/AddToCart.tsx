import React, { useState } from 'react';
import { ProductModel } from '../../../Context/CartContext';
import './AddToCart.scss';

interface AddToCartProps{
    product: ProductModel;
    stock: number;
    size: string;
    addToCart?: (product:ProductModel, quantity:number, size: string) => void;
}

const AddToCart = ({product, stock, size, addToCart }:AddToCartProps) => {
    const [amount, setAmount] = useState<number>(1) 

    const handleIncrement = () => stock > amount && setAmount(prev => prev + 1)
    const handleDecrement = () => amount > 1 && setAmount(prev => prev - 1)   
    
    return (
    <div className='addToCart'>
        <div className='addToCart_div'>
            <span className='fa fa-minus addToCart_div_span' onClick={handleDecrement}/>
            <p className='addToCart_div_p'>{amount}</p>
            <span className='fa fa-plus addToCart_div_span' onClick={handleIncrement}/>   
        </div>
        {size===""
        ? <button className='addToCart_button disabled' disabled>AGREGAR AL CARRITO</button>
        : <button className='addToCart_button' onClick={() => addToCart?.(product, amount, size)}>AGREGAR AL CARRITO</button>}
        
    </div>
  );
}

export default AddToCart;