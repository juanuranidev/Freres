import React from 'react';
import Logo from '../../Navbar/Logo/Logo';
import './Socials.scss';

const Socials = () => {
  return (
    <div className='socials'>
        <Logo />
        <p className='socials_p'>Viamonte 174A, Ciudad Autónoma de Buenos Aires.</p>
        <p className='socials_p'><a className='socials_p_a' href='mailto:ventas@freres.ar' target='_blank' rel="noreferrer">ventas@freres.ar</a></p>
        <div className='socials_div'>
          <a className='socials_div_a' href='https://wa.link/1bbe3z' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-whatsapp fa-3x' /></a>
          <a className='socials_div_a' href='https://www.instagram.com/freres/' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-instagram fa-3x' /></a>
          <a className='socials_div_a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-youtube fa-3x' /></a>
        </div>
    </div>
  );
}

export default Socials;