import React, { useEffect, useContext } from 'react';
import { NewsletterContext } from '../../Context/NewsletterContext';
import Albums from './Albums/Albums';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import TopSellers from './TopSellers/TopSellers';
import Masterpieces from './Masterpieces/Masterpieces';
import NewsletterPopup from './NewsletterPopup/NewsletterPopup';
import ModalBackground from '../../Modals/ModalBackground/ModalBackground';
import ShortcutsGallery from './ShortcutsGallery/ShortcutsGallery';

const Main = () => {
  const { activePopup, setActivePopup } = useContext(NewsletterContext)

  useEffect(() => {
    let active:any
    let confirmation = localStorage.getItem('alreadySuscribed');
    
    if(!confirmation){
      active = setTimeout(() => setActivePopup?.(true), 15000);
    }

    return () => clearInterval(active)
  }, [])

  return (
    <React.Fragment>
      <Header/>
      <TopSellers/>
      <ShortcutsGallery/>
      <Masterpieces/>
      <Albums/>
      <Slider/>
      {activePopup && <NewsletterPopup/>}
      <ModalBackground open={activePopup} close={() => setActivePopup?.(false)}/>
    </React.Fragment>
  );
}

export default Main;