import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cartList, handleOpenCart } = useContext(CartContext)

  return (
  <>
    <div className='cartNavbar'>
      <p onClick={handleOpenCart} className='cartNavbar_p'>CARRITO ({cartList.length??0})</p>
    </div>
  </>
  );
}

export default Cart;