import React from 'react';
import { Link } from 'react-router-dom';
import ImageLink from '../ImageLink/ImageLink';
import './OutfitsLink.scss';

const OutfitsLink = () => {
  return (
    <div className='outfitsLink'>
      <Link to='/essential_outfits' className='outfitsLink_a'>
        <li className='outfitsLink_a_li'>ESSENTIAL OUTFITS</li>
      </Link>
      <div className='outfitsLink_content'>
        <ImageLink
          link='/outfit/elegant'
          src='https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'
          alt='Outfit imágen'
          boxShadow={true}
        />
        <ImageLink
          link='/outfit/relaxed'
          src='https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'
          alt='Outfit imágen'
          boxShadow={true}
        />
        <ImageLink
          link='/outfit/casual'
          src='https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'
          alt='Outfit imágen'
          boxShadow={true}
        />
        <ImageLink
          link='/outfit/street'
          src='https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'
          alt='Outfit imágen'
          boxShadow={true}
        />
      </div>
    </div>
  );
}

export default OutfitsLink;