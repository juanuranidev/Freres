import React from 'react';
import Header from './Header/Header';
import TopSellers from './TopSellers/TopSellers';
import ShortcutsGallery from './ShortcutsGallery/ShortcutsGallery';
import Masterpieces from './Masterpieces/Masterpieces';
import Albums from './Albums/Albums';

const Main = () => {
  return (
    <>
      <Header/>
      <TopSellers/>
      <ShortcutsGallery/>
      <Masterpieces/>
      <Albums/>
    </>
  );
}

export default Main;