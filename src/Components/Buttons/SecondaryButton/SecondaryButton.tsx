import React from 'react';
import { Link } from 'react-router-dom';
import './SecondaryButton.scss';

interface SecondaryButtonProps {
  link: string;
  text: string;
  onClick: () => void;
}

const SecondaryButton = ({link, text, onClick}: SecondaryButtonProps) => {
  return (
    <Link to={link}>
      <button className='secondaryButton' onClick={onClick}>{text}</button>
    </Link>
  );
}

export default SecondaryButton;