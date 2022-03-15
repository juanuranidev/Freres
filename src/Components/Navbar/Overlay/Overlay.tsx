import React from 'react';
import './Overlay.scss';

interface OverlayProps {
    openCart: boolean;
}

const Overlay = ({openCart}: OverlayProps) => {
  return (
    <div className={openCart===true ?'overlay visible' :'overlay'}/>
  );
}

export default Overlay;