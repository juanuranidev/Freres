import React from 'react';
import './CartContent.scss';

interface CartContentProps {
    openMenu: boolean;
    handleCloseMenu: () => void
}

const CartContent = ({openMenu, handleCloseMenu}: CartContentProps) => {  
    return (
    <div className={openMenu===true ? 'cartOpen' : 'cartClose'}>
        <div className='cart_close'>
          <p onClick={handleCloseMenu}>CERRAR</p>
        </div>
        <div className='cart_shipping'>
          <p>$123 más para tener envío gratis</p>
        </div>
        <div className='cart_empty'>
          <p>Tu carrito está vacío.</p>
        </div>
    </div>
  )
}

export default CartContent;