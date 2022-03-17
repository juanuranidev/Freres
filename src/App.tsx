import React from 'react';
import { getFirestoreApp } from './Components/Firebase/DbConfig';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Pages/Main/Main';
import Shop from './Components/Pages/Shop/Shop';
import EssentialOutfits from './Components/Pages/EssentialOutfits/EssentialOutfits';
import About from './Components/Pages/About/About';
import Footer from './Components/Footer/Footer';
import './App.scss';

getFirestoreApp()

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/shop/:idCategory' element={<Shop/>}/>
          <Route path='/essential_outfits' element={<EssentialOutfits/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;