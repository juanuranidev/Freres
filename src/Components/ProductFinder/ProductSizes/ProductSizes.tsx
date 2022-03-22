import React from 'react';
import ProductSizeButton from './ProductSizeButton/ProductSizeButton';
import './ProductSizes.scss';

interface ProductSizesProps{
    productSize: string,
    size: string,
    setSize: any
}

const ProductSizes = ({productSize, size, setSize}:ProductSizesProps) => {
  
    const handleSelectSize = (size:string) => setSize(size)

    if(productSize==='number'){
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
                        <p className='productSizes_clear_p' onClick={() => setSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    

    if(productSize==='letter'){
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
                        <p className='productSizes_clear_p' onClick={() => setSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    
    
    if(productSize==='none'){
        return (
            <div className='productSizes'>
                <p className='productSizes_p'>TALLE ÚNICO</p>
            </div>
        )
    }    
    return(
        null
    );
}

export default ProductSizes;