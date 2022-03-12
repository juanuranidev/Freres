import React from 'react';
import './_Cart.scss';

type CartProps = {
  handleOpenMenu: any;
}

const Cart = ({handleOpenMenu}: CartProps) => {
  return (<>
    <div className='cartNavbar'>
      <p onClick={() => handleOpenMenu()}>CARRITO (0)</p>
    </div>
  </>
  )
}

export default Cart;