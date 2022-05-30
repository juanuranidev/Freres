import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewsletterContextProvider } from './Components/Context/NewsletterContext';
import { CartContextProvider } from './Components/Context/CartContext';
import { getFirestoreApp } from './Components/Firebase/DbConfig';
import Main from './Components/Pages/Main/Main';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Pages/Checkout/Checkout';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ProductFinder from './Components/Pages/ProductDetail/ProductFinder';
import SecretDiscount from './Components/Pages/SecretDiscount/SecretDiscount';
import BuildYourOutfit from './Components/Pages/BuildYourOutfit/BuildYourOutfit';
import EssentialOutfits from './Components/Pages/EssentialOutfits/EssentialOutfits';
import EssentialOutfitDetail from './Components/Pages/EssentialOutfitDetail/EssentialOutfitDetail';
import './Styles/Base.scss';

getFirestoreApp()

function App() {
  return (
    <CartContextProvider>
      <NewsletterContextProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Routes>
            <Route path='/' element={
              <React.Fragment>
                <Navbar/>
                <Main/>
              </React.Fragment>}>
            </Route>
            <Route path='/shop/:idCategory' element={
              <React.Fragment>
                <Navbar/>
                <Shop/>
              </React.Fragment>}>
            </Route>
            <Route path='/essential_outfits' element={
              <React.Fragment>
                <Navbar/>
                <EssentialOutfits/>
              </React.Fragment>}>
            </Route>
            <Route path='/about' element={
              <React.Fragment>
                <Navbar/>
                <About/>
              </React.Fragment>}>
            </Route>
            <Route path='/product/:idProduct' element={
              <React.Fragment>
                <Navbar/>
                <ProductFinder/>
              </React.Fragment>}>
            </Route>
            <Route path='/outfit/:idOutfit' element={
              <React.Fragment>
                <Navbar/>
                <EssentialOutfitDetail/>
              </React.Fragment>}>
            </Route>
            <Route path='/build-your-outfit' element={
              <React.Fragment>
                <Navbar/>
                <BuildYourOutfit/>
              </React.Fragment>}>
            </Route>
            <Route path='/secret' element={
              <React.Fragment>
                <Navbar/>
                <SecretDiscount/>
              </React.Fragment>}>
            </Route>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </NewsletterContextProvider>
    </CartContextProvider>
  );
}

export default App;