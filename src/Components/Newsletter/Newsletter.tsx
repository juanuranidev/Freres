import React, { useContext, useState } from 'react';
import { NewsletterContext } from '../Context/NewsletterContext';
import FreresLogo from '../../Assets/Logos/FreresLogo.jpg';
import './Newsletter.scss';

const Newsletter = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<any>({email: ''})
  const [isSuscribed, setIsSuscribed] = useState<boolean>(false)

  const handleSetUserEmail = (e:any) => setUserEmail({...userEmail, [e.target.name] : e.target.value})

  const { handleSubmit } = useContext(NewsletterContext)
  
  if(loader){
    return(
      <div className='newsletterLoader'>
        <img className='newsletterLoader_img' src={FreresLogo} alt="loader"/>
      </div>
    )
  }

  return (
    <div className='newsletter'>
      <h3 className='newsletter_h3'>ÚNETE A NUESTRA TRIBU</h3>
      <p className='newsletter_p'>SUSCRÍBETE PARA RECIBIR DESCUENTOS, NOVEDADES Y BENEFICIOS EXCLUSIVOS</p>
      {isSuscribed
      ? <div className='newsletter_suscribed'>
          <p className='newsletter_suscribed_p'>HAS SIDO SUSCRITO A NUESTRO NEWSLETTER</p>
        </div>
      : <div className='newsletter_div'>
          <form className='newsletter_div_form' onSubmit={(e) => handleSubmit?.(e, setLoader, userEmail, setIsSuscribed)}>
            <input 
              name='email' 
              type='email' 
              placeholder='Email' 
              value={userEmail.email} 
              className='newsletter_div_form_input' 
              onChange={(e) => handleSetUserEmail(e)}
            />    
            <button type='submit' className={`newsletter_div_form_button ${!userEmail.email && 'disabled'}`} disabled={!userEmail.email}>UNIRME</button>
          </form>            
        </div>}
    </div>
  );
}

export default Newsletter;