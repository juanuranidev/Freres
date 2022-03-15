import React, { useState } from 'react';
import './MessageBar.scss';

const MessageBar = () => {
  const [showFirstMessage, setshowFirstMessage] = useState(true)  

  const otherMessage:boolean = !showFirstMessage
  setTimeout(() => setshowFirstMessage(otherMessage), 5000);

  return (
    <div className='messageBar'>
      <p className={showFirstMessage===true ?'show' :'hide'}>Envío Express (CABA) en menos de 48hs hábiles</p>
      <p className={showFirstMessage===false ?'show' :'hide'}>Envíos gratis en compras mayor a $12.000</p>
    </div>
  );
}
     
export default MessageBar;