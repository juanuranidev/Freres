import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import './CartContent.scss';

interface CartContentProps {
    openCart: boolean;
    handleCloseCart: () => void
}

const CartContent = ({openCart, handleCloseCart}: CartContentProps) => {  
  const { cartList } = useContext(CartContext)

    return (
    <div className={openCart===true ? 'cartOpen' : 'cartClose'}>
        <div className='cart_close'>
          <p onClick={handleCloseCart}>CERRAR</p>
        </div>
        <div className='cart_shipping'>
          <p>$123 más para tener envío gratis</p>
        </div>
        {(cartList.length??0)>0
      ? <>
          <div className='cart_products'>
            <CartItem products={cartList}/>
          </div>
          <div className='cart_subtotal'>
            <p className='cart_subtotal_p'><b>SUBTOTAL:</b> $3924</p>
          </div>
          <div className='cart_checkout'>
            <button>Finalizar Compra</button>
          </div>
        </>
      : <div className='cart_empty'>
          <p>Tu carrito está vacío.</p>
        </div>}
    </div>
  );
}

export default CartContent;