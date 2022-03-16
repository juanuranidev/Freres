import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.scss';

interface CartProps {
  handleOpenCart: () => void;
}

const Cart = ({handleOpenCart}: CartProps) => {
  return (<>
    <div className='cartNavbar'>
      <Link to='/about' className='cartNavbar_a'><p>NOSOTROS</p></Link>
      <p onClick={handleOpenCart} className='cartNavbar_p'>CARRITO (0)</p>
    </div>
  </>
  );
}

export default Cart;