import React from 'react';
import './Overlay.scss';

interface OverlayProps {
    openMenu: boolean;
}

const Overlay = ({openMenu}: OverlayProps) => {
  return (
    <div className={openMenu===true ?'overlay visible' :'overlay'}/>
  );
}

export default Overlay;