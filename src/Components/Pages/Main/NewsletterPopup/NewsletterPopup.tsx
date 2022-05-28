import React from 'react';
import NewsletterPopupImage from '../../../../Assets/NewsletterPopup/NewsletterPopupImage.jpg';
import './NewsletterPopup.scss';

const NewsletterPopup = () => {
  return (
    <div className='newsletterPopup'>
        <div className='newsletterPopup_div'>
            <p>CERRAR</p>
            <div>

            <h2 className='newsletterPopup_div_h2'>ÚNETE A NUESTRA TRIBU</h2>
            <p className='newsletterPopup_div_p'>SUSCRÍBETE PARA RECIBIR DESCUENTOS, NOVEDADES Y BENEFICIOS EXCLUSIVOS</p>
            <form className='newsletter_div_form' >
            <input 
              name='email' 
              type='email' 
              placeholder='Email' 
              className='newsletter_div_form_input' 
              />    
              <button type='submit' className='newsletter_div_form_button'>UNIRME</button>
            </form>    
            </div>
            <div className='socials_div'>
                <a className='socials_div_a' href='https://wa.link/1bbe3z' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-whatsapp fa-3x' /></a>
                <a className='socials_div_a' href='https://www.instagram.com/freres/' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-instagram fa-3x' /></a>
                <a className='socials_div_a' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel="noreferrer"><span className='socials_div_a_span fab fa-youtube fa-3x' /></a>
            </div>
        </div>
        <img src={NewsletterPopupImage} alt="Newsletter Image" className='newsletterPopup_img'/>
    </div>
  )
}

export default NewsletterPopup;