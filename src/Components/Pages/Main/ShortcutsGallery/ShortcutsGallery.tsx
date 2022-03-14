import React from 'react';
import GaleryImage from './GaleryImage/GaleryImage';
import SHORTCUTSGALLERYIMAGE1 from './img/SHORTCUTSGALLERYIMAGE1.png';
import SHORTCUTSGALLERYIMAGE2 from './img/SHORTCUTSGALLERYIMAGE2.png';
import SHORTCUTSGALLERYIMAGE3 from './img/SHORTCUTSGALLERYIMAGE3.png';
import './ShortcutsGallery.scss'

const ShortcutsGallery = () => {
  return (
    <section className='shortcutsGallery'>
        <GaleryImage p='OUTFITS' img={SHORTCUTSGALLERYIMAGE1} />
        <GaleryImage p='CAMPERAS Y BUZOS' img={SHORTCUTSGALLERYIMAGE2} />
        <GaleryImage p='TODOS LOS PRODUCTOS' img={SHORTCUTSGALLERYIMAGE3} />
    </section>
  );
}

export default ShortcutsGallery;