import React from 'react';
import ProductList from '../../../ProductList/ProductList';
import './EssentialOutfit.scss';

interface EssentialOutfitProps {
    name: string
    products: any
    image: string
    imageDirection: string
}

const EssentialOutfit = ({name, products, image, imageDirection}: EssentialOutfitProps) => {
  console.log(products)
    return (
    <div className={imageDirection==="left" ?'essentialOutfit left' :'essentialOutfit'}>
        <div className='essentialOutfit_products'>
            <h2 className='essentialOutfit_products_h2'>{name}</h2>
            <div className='essentialOutfit_products_div'>
                <ProductList products={products}/>
            </div>
            <button className='essentialOutfit_products_button'>Agregar outfit al carrito</button>
        </div>
        <div className='essentialOutfit_image'>
            <img src={image}/>
        </div>
    </div>
  );
}

export default EssentialOutfit;