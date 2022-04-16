import React from 'react';
import { Link } from 'react-router-dom';
import GaleryImage from './GaleryImage/GaleryImage';
import SHORTCUTSGALLERYIMAGE1 from './img/SHORTCUTSGALLERYIMAGE1.png';
import SHORTCUTSGALLERYIMAGE2 from './img/SHORTCUTSGALLERYIMAGE2.png';
import SHORTCUTSGALLERYIMAGE3 from './img/SHORTCUTSGALLERYIMAGE3.png';
import './ShortcutsGallery.scss';

const ShortcutsGallery = () => {
  return (
    <section className='shortcutsGallery'>
      <Link className="shortcutsGallery_a" to='/essential_outfits'><GaleryImage p='OUTFITS' img={SHORTCUTSGALLERYIMAGE1} /></Link>
      <Link className="shortcutsGallery_a" to='/shop/camperasybuzos'><GaleryImage p='CAMPERAS Y BUZOS' img={SHORTCUTSGALLERYIMAGE2} /></Link>
      <Link className="shortcutsGallery_a" to='/shop/all'><GaleryImage p='TODOS LOS PRODUCTOS' img={SHORTCUTSGALLERYIMAGE3} /></Link>
    </section>
  );
}

export default ShortcutsGallery;