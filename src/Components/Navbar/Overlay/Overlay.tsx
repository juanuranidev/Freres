import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Overlay.scss';

interface OverlayProps {
    openMenu: boolean
    handleCloseMenu: () => void
}

const Overlay = ({openMenu, handleCloseMenu}: OverlayProps) => {
  const { openCart, handleCloseCart } = useContext(CartContext)

  const handleClickOutside = () => {
    handleCloseCart?.()
    handleCloseMenu?.()
  }

  return (
    <div className={openCart===true || openMenu===true ?'overlay visible' :'overlay'} onClick={handleClickOutside} />
  );
}

export default Overlay;