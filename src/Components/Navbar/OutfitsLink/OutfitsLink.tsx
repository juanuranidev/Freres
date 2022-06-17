import React from 'react';
import { Link } from 'react-router-dom';
import './OutfitsLink.scss';

const OutfitsLink = () => {
  return (
    <div className='outfitsLink'>
      <Link to='/essential_outfits' className='outfitsLink_a'>
        <li className='outfitsLink_a_li'>ESSENTIAL OUTFITS</li>
      </Link>
        <div className='outfitsLink_content'>
          <Link to='/outfit/elegant' className='outfitsLink_content_a'>
            <img
              className='outfitsLink_content_img'
              src='https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'
              alt="Outfit imágen"/>
          </Link>
          <Link to='/outfit/relaxed' className='outfitsLink_content_a'>
            <img
              className='outfitsLink_content_img'
              src='https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'
              alt="Outfit imágen"/>
          </Link>
          <Link to='/outfit/casual' className='outfitsLink_content_a'>
            <img
              className='outfitsLink_content_img'
              src='https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'
              alt="Outfit imágen"/>
          </Link>
          <Link to='/outfit/street' className='outfitsLink_content_a'>
            <img
              className='outfitsLink_content_img'
              src='https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'
              alt="Outfit imágen"/>
          </Link>
        </div>
      </div>
  );
}

export default OutfitsLink;