import React from 'react';
import ProductSizeButton from './ProductSizeButton/ProductSizeButton';
import './ProductSizes.scss';

interface ProductSizesProps{
    sizeType: string,
    size: string,
    setSize: (size:string) => void
}

const ProductSizes = ({sizeType, size, setSize}:ProductSizesProps) => {

    if(sizeType==='number'){
        return (
            <div className='productSizes'>
                <div className='productSizes_buttons'>
                    <ProductSizeButton productSize="38" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="40" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="42" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="44" size={size} setSize={setSize} />
                </div>
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => setSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    

    if(sizeType==='letter'){
        return (
            <div className='productSizes'>
                <div className='productSizes_buttons'>
                    <ProductSizeButton productSize="XS" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="S" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="M" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="L" size={size} setSize={setSize} />
                    <ProductSizeButton productSize="XL" size={size} setSize={setSize} />
                </div>
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => setSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    
    
    if(sizeType==='none'){
        return (
            <div className='productSizes unique'>
                <ProductSizeButton productSize="Talle único" size={size} setSize={setSize} />
                {size
                &&  <div className='productSizes_clear'>
                        <p className='productSizes_clear_p' onClick={() => setSize("")}>LIMPIAR</p>
                    </div>}
            </div>
        )
    }    
    return(
        null
    );
}

export default ProductSizes;