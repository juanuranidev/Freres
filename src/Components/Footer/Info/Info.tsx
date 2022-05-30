import React from 'react';
import Logo from '../../Navbar/Logo/Logo';
import Socials from '../../Socials/Socials';
import './Info.scss';

const Info = () => {
  return (
    <div className='info'>
      <Logo />
      <p className='info_p'>Viamonte 174A, Ciudad Autónoma de Buenos Aires.</p>
      <p className='info_p'><a className='info_p_a' href='mailto:ventas@freres.ar' target='_blank' rel="noreferrer">ventas@freres.ar</a></p>
      <Socials/>
    </div>
  );
}

export default Info;