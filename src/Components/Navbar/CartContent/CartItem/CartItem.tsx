import React, { useContext } from 'react';
import { CartContext, ProductModel } from '../../../Context/CartContext';
import './CartItem.scss';

const CartItem = ({products}:any) => {
  const { deleteFromCart } = useContext(CartContext)
  return (
    <>
      {products.map((product:ProductModel) =>
      <div className='cartItem' key={product.key}>
        <div className='cartItem_image'>
          <img className='cartItem_image_img' src={product.images[0]} alt="Imágen del producto del carrito"/>
        </div>
        <div className='cartItem_content'>
          <div className='cartItem_content_div'>
            <h3 className='cartItem_content_div_h3'>{product.name}</h3>
            <p className='cartItem_content_div_p'>Talle: {product.size}</p>
            <p className='cartItem_content_div_p'>{product.quantity} x ${product.price}</p>
          </div>
          <div className='cartItem_content_delete'>
            <p className='cartItem_content_delete_p' onClick={() => deleteFromCart?.(product)}>Eliminar</p>
          </div>
        </div>
      </div>)}
    </>
  );
}

export default CartItem;