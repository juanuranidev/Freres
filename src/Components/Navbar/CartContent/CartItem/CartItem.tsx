import React from 'react';
import './CartItem.scss';
import { ProductModel } from '../../../Context/CartContext';

const CartItem = ({products}:any) => {
  return (
    <>
      {products.map((product:ProductModel) =>
      <div className='cartItem' key={product.id}>
        <div className='cartItem_image'>
          <img  className='cartItem_image_img' src={product.images[0]}/>
        </div>
        <div className='cartItem_content'>
          <div className='cartItem_content_div'>
            <h3 className='cartItem_content_div_h3'>{product.name}</h3>
            <p className='cartItem_content_div_p'>M</p>
            <p className='cartItem_content_div_p'>{product.quantity} x ${product.price}</p>
          </div>
          <div className='cartItem_content_delete'>
            <p className='cartItem_content_delete_p'>Eliminar</p>
          </div>
        </div>
      </div>)}
    </>
  );
}

export default CartItem;