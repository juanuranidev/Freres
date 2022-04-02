import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Overlay.scss';

interface OverlayProps {
    openMenu: boolean
}

const Overlay = ({openMenu}: OverlayProps) => {
  const { openCart, handleCloseCart } = useContext(CartContext)

  return (
    <div className={openCart===true || openMenu===true ?'overlay visible' :'overlay'} onClick={handleCloseCart} />
  );
}

export default Overlay;