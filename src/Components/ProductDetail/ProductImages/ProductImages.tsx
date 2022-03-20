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
      <div className='productImages_rest'>
        {images.map((image:any, index:any) => <img className='productImages_rest_img' src={image} key={index} onClick={() => handleMainImage(index)} />)}
      </div>
      <div className='productImages_main'>
        <img src={images[(mainImage)]} className={mainImage===0 ?'productImages_main_img_first' :'productImages_main_image' }/>
      </div>
    </div>
  );
}

export default ProductImages;