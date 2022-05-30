import React from 'react';
import './Socials.scss';

const Socials = () => {
  return (
    <div className='socials'>
      <a className='socials_a' href='https://wa.link/1bbe3z' target='_blank' rel="noreferrer"><span className='socials_a_span fab fa-whatsapp fa-3x' /></a>
      <a className='socials_a' href='https://www.instagram.com/freres/' target='_blank' rel="noreferrer"><span className='socials_a_span fab fa-instagram fa-3x' /></a>
      <a className='socials_a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noreferrer"><span className='socials_a_span fab fa-youtube fa-3x' /></a>
    </div>
  )
}

export default Socials;