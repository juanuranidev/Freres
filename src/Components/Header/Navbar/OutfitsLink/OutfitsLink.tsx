import React from 'react';
import OUTFIT1 from './img/OUTFIT1.png';
import OUTFIT2 from './img/OUTFIT2.png';
import OUTFIT3 from './img/OUTFIT3.png';
import OUTFIT4 from './img/OUTFIT4.png';
import './OutfitsLink.scss';

const OutfitsLink = () => {
  return (
    <div className='outfitsLink'>
    <div>
      <li>ESSENTIAL OUTFITS</li>
      <div className='outfitsLink_content'>
        <div>
          <img src={OUTFIT1}/>
        </div>
        <div>
          <img src={OUTFIT2}/>
        </div>
        <div>
        <img src={OUTFIT3}/>
        </div>
        <div>
          <img src={OUTFIT4}/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default OutfitsLink;