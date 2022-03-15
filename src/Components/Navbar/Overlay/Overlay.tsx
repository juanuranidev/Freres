import React from 'react';
import './Overlay.scss';

interface OverlayProps {
    openCart: boolean,
    openMenu: boolean
}

const Overlay = ({openCart, openMenu}: OverlayProps) => {
  return (
    <div className={openCart===true || openMenu===true ?'overlay visible' :'overlay'}/>
  );
}

export default Overlay;