import React from 'react';
import './CartContent.scss';

interface CartContentProps {
    openCart: boolean;
    handleCloseCart: () => void
}

const CartContent = ({openCart, handleCloseCart}: CartContentProps) => {  
    return (
    <div className={openCart===true ? 'cartOpen' : 'cartClose'}>
        <div className='cart_close'>
          <p onClick={handleCloseCart}>CERRAR</p>
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