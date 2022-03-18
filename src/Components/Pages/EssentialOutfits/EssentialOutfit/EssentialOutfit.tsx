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

    return (
    <div className={imageDirection==="left" ?'essentialOutfit left' :'essentialOutfit'}>
        <div className='essentialOutfit_products'>
            <h2 className='essentialOutfit_products_h2'>{name}</h2>
            <div className='essentialOutfit_products_div'>
                <ProductList products={products}/>
            </div>
            <div className='essentialOutfit_buttons'>
                <button className='essentialOutfit_buttons_button'>VER CONJUNTO</button>
                <button className='essentialOutfit_buttons_button'>AGREGAR AL CARRITO</button>
            </div>
        </div>
        <div className='essentialOutfit_image'>
            <img src={image}/>
        </div>
    </div>
  );
}

export default EssentialOutfit;