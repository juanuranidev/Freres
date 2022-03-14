import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Pages/Main/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;