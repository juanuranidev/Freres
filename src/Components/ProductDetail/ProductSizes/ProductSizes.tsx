import React from 'react';
import './ProductSizes.scss';

interface ProductSizesProps{
    size: string
}

const ProductSizes = ({size}:ProductSizesProps) => {
  
    if(size==='number'){
        return (
            <div className='productSizes'>
                <button className='productSizes_button'>38</button>
                <button className='productSizes_button'>40</button>
                <button className='productSizes_button'>42</button>
                <button className='productSizes_button'>44</button>
            </div>
        )
    }    

    if(size==='letter'){
        return (
            <div className='productSizes'>
                <button className='productSizes_button'>XS</button>
                <button className='productSizes_button'>S</button>
                <button className='productSizes_button'>M</button>
                <button className='productSizes_button'>L</button>
                <button className='productSizes_button'>XL</button>
            </div>
        )
    }    
    
    if(size==='none'){
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