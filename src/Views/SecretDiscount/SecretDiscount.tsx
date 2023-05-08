import React from 'react';
import Waves from './Img/Ocean.png';
import './SecretDiscount.scss';

const SecretDiscount = () => {
  return (
    <section className='secretDiscount'>
      <p className='secretDiscount_p'>Encontraste nuestro lugar secreto.</p>
      <p className='secretDiscount_p'>Como recompensa ganaste un código por un 20% de descuento: FRERESSECRET2022</p>
      <div className='secretDiscount_div'>
        <h2 className='secretDiscount_div_h2'>FRÈRES</h2>
        <img className='secretDiscount_div_img'src={Waves} alt="waves"/>
      </div>
    </section>
  );
}

export default SecretDiscount;