import React from 'react';
import './QuaternaryButton.scss';

interface QuaternaryButtonProps {
    text: string;
    onClick: () => void;
  };

const QuaternaryButton = ({text, onClick}: QuaternaryButtonProps) => {
  return (
    <button className='quaternaryButton' onClick={onClick}>{text}</button>
  );
};

export default QuaternaryButton;