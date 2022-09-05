import React, { useEffect, useContext } from 'react';
import { NewsletterContext } from '../../../Context/NewsletterContext';
import NewsletterPopupImage from '../../../../Assets/NewsletterPopup/NewsletterPopup.png';
import Newsletter from '../../../Newsletter/Newsletter';
import Socials from '../../../Socials/Socials';
import './NewsletterPopup.scss';

const NewsletterPopup = () => {
  const { setActivePopup, setErrorMessage } = useContext(NewsletterContext)

  useEffect(() => {
    setErrorMessage?.(false)  
  }, [])

  return (
    <React.Fragment>
      <div className='newsletterPopup'>
        <div className='newsletterPopup_div'>
          <p className='newsletterPopup_div_p' onClick={() => setActivePopup?.(false)}>CERRAR</p>
          <Newsletter/>
          <Socials/>
        </div>
        <img src={NewsletterPopupImage} alt="Newsletter" className='newsletterPopup_img'/>
      </div>
    </React.Fragment>
  )
}

export default NewsletterPopup;