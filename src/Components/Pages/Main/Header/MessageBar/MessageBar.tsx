import React, { useState, useEffect } from 'react';
import './MessageBar.scss';

const MessageBar = () => {
  const [showFirstMessage, setshowFirstMessage] = useState(true);  

  useEffect(() => {
    setTimeout(() => setshowFirstMessage(!showFirstMessage), 5000);
  }, [showFirstMessage])
  
  return (
    <div className='messageBar'>
      <p className={`messageBar_p ${showFirstMessage===true ? 'show' : 'hide'}`}>Envío Express (CABA) en menos de 48hs hábiles</p>
      <p className={`messageBar_p ${showFirstMessage===true ? 'hide' : 'show'}`}>Envíos gratis en compras mayores a $12.000</p>
    </div>
  );
}
     
export default MessageBar;