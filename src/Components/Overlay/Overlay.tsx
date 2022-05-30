import React, { useContext } from 'react';
import { NewsletterContext } from '../Context/NewsletterContext';
import { CartContext } from '../Context/CartContext';
import './Overlay.scss';

interface OverlayProps {
  openMenu?: boolean
  handleCloseMenu?: () => void
}

const Overlay = ({openMenu, handleCloseMenu}: OverlayProps) => {
  const { activePopup, setActivePopup } = useContext(NewsletterContext)
  const { openCart, handleCloseCart } = useContext(CartContext)

  const handleClickOutside = () => {
    setActivePopup?.(false)
    handleCloseMenu?.()
    handleCloseCart?.()
  }

  return (
    <div className={activePopup || openMenu || openCart ? 'overlay visible' : 'overlay'} onClick={handleClickOutside} />
  )
}

export default Overlay;