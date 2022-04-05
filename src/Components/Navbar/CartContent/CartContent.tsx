import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from './CartItem/CartItem';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import './CartContent.scss';

const CartContent = () => {  
  const { cartList, openCart, handleCloseCart, cartTotal } = useContext(CartContext)

    return (
    <div className={openCart===true ? 'cartOpen' : 'cartClose'}>
        <div className='cart_close'>
          <p onClick={handleCloseCart}>CERRAR</p>
        </div>
        <div className='cart_shipping'>
          {(12000 - cartTotal) >= 0
          ? <p className='cart_shipping_p'>${12000 - cartTotal} más para tener envío gratis</p>
          : <p className='cart_shipping_p'>¡Tenés envío gratis!</p>}
        </div>
        {(cartList.length??0)>0
      ? <>
          <div className='cart_products'>
            <CartItem products={cartList}/>
          </div>
          <div className='cart_subtotal'>
            <p className='cart_subtotal_p'><b>SUBTOTAL:</b> ${cartTotal}</p>
          </div>
          <div className='cart_checkout'>
            <SecondaryButton link="/checkout" text="FINALIZAR COMPRA"/>
          </div>
        </>
      : <div className='cart_empty'>
          <p className='cart_empty_p'>Tu carrito está vacío.</p>
        </div>}
    </div>
  );
}

export default CartContent;