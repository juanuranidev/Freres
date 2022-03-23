import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../../ProductList/ProductList';
import './EssentialOutfit.scss';

interface EssentialOutfitProps {
    name: string
    products: any
    image: string
    link:string
    imageDirection: string
}

const EssentialOutfit = ({name, products, link, image, imageDirection}: EssentialOutfitProps) => {

    return (
    <div className={imageDirection==="left" ?'essentialOutfit left' :'essentialOutfit'}>
        <div className='essentialOutfit_products'>
            <h2 className='essentialOutfit_products_h2'>{name}</h2>
            <div className='essentialOutfit_products_div'>
                <ProductList products={products}/>
            </div>
            <div className='essentialOutfit_buttons'>
                <Link to={link}><button className='essentialOutfit_buttons_button'>VER CONJUNTO</button></Link>
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