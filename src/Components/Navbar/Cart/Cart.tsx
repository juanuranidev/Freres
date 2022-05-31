import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cartList, handleOpenCart } = useContext(CartContext)

  return (
    <div className='cartNavbar'>
      <Link to='/build-your-outfit' className='cartNavbar_a'>ARMA TU OUTFIT</Link>
      <p onClick={handleOpenCart} className='cartNavbar_p'>CARRITO ({cartList.length??0})</p>
    </div>
  );
}

export default Cart;