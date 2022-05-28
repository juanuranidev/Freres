import React from 'react';
import Header from './Header/Header';
import TopSellers from './TopSellers/TopSellers';
import ShortcutsGallery from './ShortcutsGallery/ShortcutsGallery';
import Masterpieces from './Masterpieces/Masterpieces';
import Albums from './Albums/Albums';
import Slider from './Slider/Slider';
import NewsletterPopup from './NewsletterPopup/NewsletterPopup';

const Main = () => {
  return (
    <React.Fragment>
      <Header/>
      <TopSellers/>
      <ShortcutsGallery/>
      <Masterpieces/>
      <Albums/>
      <Slider/>
      {/* <NewsletterPopup/> */}
    </React.Fragment>
  );
}

export default Main;