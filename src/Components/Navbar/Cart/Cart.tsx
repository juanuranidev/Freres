import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.scss';

interface CartProps {
  handleOpenCart: () => void;
}

const Cart = ({handleOpenCart}: CartProps) => {
  const { cartList } = useContext(CartContext)

  return (
  <>
    <div className='cartNavbar'>
      <p onClick={handleOpenCart} className='cartNavbar_p'>CARRITO ({cartList.length??0})</p>
    </div>
  </>
  );
}

export default Cart;