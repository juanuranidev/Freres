import React from 'react';
import { Link } from 'react-router-dom';
import './OutfitsLink.scss';

const OutfitsLink = () => {
  return (
    <div className='outfitsLink'>
      <div>
      <Link to='/essential_outfits'><li>ESSENTIAL OUTFITS</li></Link>
        <div className='outfitsLink_content'>
          <div>
            <Link to='/outfit/elegant'>
              <img src={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'}/>
            </Link>
          </div>
          <div>
            <Link to='/outfit/relaxed'>
              <img src={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'}/>
            </Link>
          </div>
          <div>
            <Link to='/outfit/casual'>
              <img src={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'}/>
            </Link>
          </div>
          <div>
            <Link to='/outfit/street'>
              <img src={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutfitsLink;