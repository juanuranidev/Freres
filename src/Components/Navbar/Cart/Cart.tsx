import React from 'react';
import './Cart.scss';

interface CartProps {
  handleOpenCart: () => void;
}

const Cart = ({handleOpenCart}: CartProps) => {
  return (<>
    <div className='cartNavbar'>
      <p onClick={handleOpenCart} className='cartNavbar_p'>CARRITO (0)</p>
    </div>
  </>
  );
}

export default Cart;