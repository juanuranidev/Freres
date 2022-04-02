import React from 'react';
import ProductSizeButton from './ProductSizeButton/ProductSizeButton';
import './ProductSizes.scss';

interface ProductSizesProps{
    sizeType: string,
    size: string,
    setSize: (size:string) => void
}

const ProductSizes = ({sizeType, size, setSize}:ProductSizesProps) => {
  
    const handleSelectSize = (size:string) => setSize(size)

    if(sizeType==='number'){
        return (
            <div className='productSizes'>
                <div className='productSizes_buttons'>
                    <ProductSizeButton productSize="38" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="40" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="42" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="44" size={size} handleSelectSize={handleSelectSize} />
                </div>
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => handleSelectSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    

    if(sizeType==='letter'){
        return (
            <div className='productSizes'>
                <div className='productSizes_buttons'>
                    <ProductSizeButton productSize="XS" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="S" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="M" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="L" size={size} handleSelectSize={handleSelectSize} />
                    <ProductSizeButton productSize="XL" size={size} handleSelectSize={handleSelectSize} />
                </div>
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => handleSelectSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    
    
    if(sizeType==='none'){
        return (
            <div className='productSizes unique'>
                <ProductSizeButton productSize="Talle único" size={size} handleSelectSize={handleSelectSize} />
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => handleSelectSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    
    return(
        null
    );
}

export default ProductSizes;