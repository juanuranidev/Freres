import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h3 className='newsletter_h3'>ÚNETE A NUESTRA TRIBU</h3>
      <p className='newsletter_p'>RECIBE NOVEDADES Y BENEFICIOS EXCLUSIVOS</p>
      <div className='newsletter_div'>
        <form className='newsletter_div_form'>
          <input type='email' placeholder='Email' className='newsletter_div_form_input'/>    
          <button type='submit' className='newsletter_div_form_button'>UNIRME</button>
        </form>            
      </div>
    </div>
  );
}

export default Newsletter;