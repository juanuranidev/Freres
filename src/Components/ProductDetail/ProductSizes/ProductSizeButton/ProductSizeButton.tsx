import React from 'react';
import './ProductSizebutton.scss';

interface ProductSizeButtonProps{
    productSize:  string,
    size: string,
    handleSelectSize: any
}

const ProductSizeButton = ({productSize, size, handleSelectSize}: ProductSizeButtonProps) => {
    
  return (
    <button onClick={() => handleSelectSize(productSize)} className={size===productSize ?'productSizes_button active' :'productSizes_button'}>{productSize}</button>
  );
}

export default ProductSizeButton;