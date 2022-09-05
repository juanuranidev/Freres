import React from 'react';
import './ModalBackground.scss';

interface ModalBackgroundProps {
  open: boolean;
  close: () => void;
}

const ModalBackground = ({open, close}: ModalBackgroundProps) => {
  return (
    <div className={`${open ? 'modalBackground visible' : 'modalBackground'}`} onClick={close} />
  );
};

export default ModalBackground;