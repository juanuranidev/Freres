import React from 'react';
import MessageBar from './MessageBar/MessageBar';
import MainImages from './MainImages/MainImages';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <MessageBar/>
        <MainImages/>
    </header>
  );
}

export default Header;