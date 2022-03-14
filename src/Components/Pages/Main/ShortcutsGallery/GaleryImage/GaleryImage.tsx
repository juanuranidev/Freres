import React from 'react';
import './GaleryImage.scss'

interface GaleryImageProps {
  p:string,
  img:any
}

const GaleryImage = ({p, img}: GaleryImageProps) => {
  return (
    <div className='galeryImage'>
      <div className='galeryImage_div'/>
      <img src={img} className='galeryImage_img' />
      <p className='galeryImage_p'>{p}</p>
    </div>
  );
}

export default GaleryImage;