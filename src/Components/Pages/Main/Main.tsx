import React, { useEffect, useContext } from 'react';
import { NewsletterContext } from '../../Context/NewsletterContext';
import Header from './Header/Header';
import TopSellers from './TopSellers/TopSellers';
import ShortcutsGallery from './ShortcutsGallery/ShortcutsGallery';
import Masterpieces from './Masterpieces/Masterpieces';
import Albums from './Albums/Albums';
import Slider from './Slider/Slider';
import NewsletterPopup from './NewsletterPopup/NewsletterPopup';

const Main = () => {
  const { activePopup, setActivePopup } = useContext(NewsletterContext)

  useEffect(() => {
    let active:any
    let confirmation = localStorage.getItem('alreadySuscribed');
    
    if(!confirmation){
      active = setTimeout(() => setActivePopup?.(true), 20000);
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
    </React.Fragment>
  );
}

export default Main;