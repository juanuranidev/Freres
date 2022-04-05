import React from 'react';
import { Link } from 'react-router-dom';
import './SecondaryButton.scss';

interface SecondaryButtonProps {
  link: string;
  text: string;
}

const SecondaryButton = ({link, text}: SecondaryButtonProps) => {
  return (
    <Link to={link}>
      <button className='secondaryButton'>{text}</button>
    </Link>
  );
}

export default SecondaryButton;