import React from 'react';
import './Cart.scss';

interface CartProps {
  handleOpenMenu: () => void;
}

const Cart = ({handleOpenMenu}: CartProps) => {
  return (<>
    <div className='cartNavbar'>
      <p onClick={handleOpenMenu}>CARRITO (0)</p>
    </div>
  </>
  );
}

export default Cart;