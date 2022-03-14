import React from 'react';
import Header from './Header/Header';
import BestSellers from './BestSellers/BestSellers';
import Albums from './Albums/Albums';

const Main = () => {
  return (
    <>
        <Header/>
        <BestSellers/>
        <Albums/>
    </>
  );
}

export default Main;