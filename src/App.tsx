import React from 'react';
import { getFirestoreApp } from './Components/Firebase/DbConfig';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import './App.scss';

getFirestoreApp()

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;