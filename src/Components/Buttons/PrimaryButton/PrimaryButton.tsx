import React from 'react';
import { Link } from 'react-router-dom';
import './PrimaryButton.scss';

interface PrimaryButtonProps {
  link: string;
  text: string;
}

const PrimaryButton = ({link, text}: PrimaryButtonProps) => {
  return (
    <Link to={link}>
      <button className='primaryButton'>{text}</button>
    </Link>
  );
}

export default PrimaryButton;