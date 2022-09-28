import React from 'react';
import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className='notFound_div'>
        <h2 className='notFound_div_h2'>404</h2>
        <h2 className='notFound_div_h2'>LO SIENTO FRERER, PAGINA NO ENCONTRADA.</h2>
        <SecondaryButton text="VOLVER AL INICIO" link="/" onClick={() => null} />
      </div>
    </section>
  );
};

export default NotFound;