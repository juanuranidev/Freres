import React from 'react';
import { ProductModel } from '../../../Context/CartContext';
import ProductList from '../../../ProductList/ProductList';
import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import TertiaryButton from '../../../Buttons/TertiaryButton/TertiaryButton';
import './EssentialOutfit.scss';

interface EssentialOutfitProps {
    name: string;
    products: ProductModel[];
    image: string;
    link: string;
    imageDirection: string;
    handleOpenModalSizes: () => void;
}

const EssentialOutfit = ({name, products, link, image, imageDirection, handleOpenModalSizes}: EssentialOutfitProps) => {
    return (
    <div className={`essentialOutfit ${imageDirection === "left" && 'left'}`}>
        <div className='essentialOutfit_products'>
            <h2 className='essentialOutfit_products_h2'>{name}</h2>
            <div className='essentialOutfit_products_div'>
                <ProductList products={products}/>
            </div>
            <div className='essentialOutfit_button'>
                <PrimaryButton link={link} text="VER CONJUNTO"/>
                <TertiaryButton text="AGREGAR AL CARRITO" onClick={handleOpenModalSizes}/>
            </div>
        </div>
        <div className='essentialOutfit_image'>
            <img className='essentialOutfit_image_img' src={image} alt="Imagen de outfit"/>
        </div>
    </div>
  );
}

export default EssentialOutfit;