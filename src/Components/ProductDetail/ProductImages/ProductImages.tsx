import React, { useState } from 'react';
import './ProductImages.scss';

interface ProductImageProps{
    images:any
}

const ProductImages = ({images}:ProductImageProps) => {
  const [mainImage, setMainImage] = useState<number>(0)
  
  const handleMainImage = (index:number) => setMainImage(index)

  return (
    <div className='productImages'>
      <div className='productImages_div'>
        {images.map((image:any, index:any) => <img className='productImages_div_img' src={image} key={index} onClick={() => handleMainImage(index)} />)}
      </div>
      <img src={images[(mainImage)]} className={mainImage===0 ?'productImages_image_first' :'productImages_image' }/>
    </div>
  );
}

export default ProductImages;