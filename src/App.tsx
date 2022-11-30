import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewsletterContextProvider } from './Components/Context/NewsletterContext';
import { CartContextProvider } from './Components/Context/CartContext';
import { getFirestoreApp } from './Services/Firebase/DbConfig';
import Main from './Components/Pages/Main/Main';
import Shop from './Components/Pages/Shop/Shop';
import About from './Components/Pages/About/About';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Pages/Checkout/Checkout';
import NotFound from './Components/Pages/NotFound/NotFound';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ProductFinder from './Components/Pages/ProductDetail/ProductFinder';
import SecretDiscount from './Components/Pages/SecretDiscount/SecretDiscount';
import BuildYourOutfit from './Components/Pages/BuildYourOutfit/BuildYourOutfit';
import EssentialOutfits from './Components/Pages/EssentialOutfits/EssentialOutfits';
import EssentialOutfitDetail from './Components/Pages/EssentialOutfitDetail/EssentialOutfitDetail';
import './Assets/Styles/Base.scss';

getFirestoreApp()

function App() {
  return (
    <CartContextProvider>
      <NewsletterContextProvider>
        <BrowserRouter>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/shop/:idCategory' element={<Shop/>}/>
            <Route path='/essential_outfits' element={<EssentialOutfits/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product/:idProduct' element={<ProductFinder/>}/>
            <Route path='/outfit/:idOutfit' element={<EssentialOutfitDetail/>}/>
            <Route path='/build-your-outfit' element={<BuildYourOutfit/>}/>
            <Route path='/secret' element={<SecretDiscount/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </NewsletterContextProvider>
    </CartContextProvider>
  );
}

export default App;