import React, { useEffect, useState, useContext } from 'react';
import TertiaryButton from '../Buttons/TertiaryButton/TertiaryButton';
import { CartContext, ProductModel } from '../Context/CartContext';
import ProductSizes from '../Pages/ProductDetail/ProductSizes/ProductSizes';
import './ModalSelectSizes.scss';

interface ModalSelectSizesProps {
  modalProducts: ProductModel[],
}

const ModalSelectSizes = ({modalProducts}: ModalSelectSizesProps) => {
  const [size, setSize] = useState<string>("")
  const [modalProduct, setModalProduct] = useState<number>(0)
  const [isInCartList, setIsInCartList] = useState<boolean>(false)

  const { addToCart, deleteFromCartByName, cartList } = useContext(CartContext)

  const handleIsInCartList = () => {
    let isInCart = cartList.find((product: ProductModel) => product.name === modalProducts[modalProduct].name)
    
    if(isInCart){
      setIsInCartList(true)
    } else {
      setIsInCartList(false)
    }
  }

  const handlePrevious = () => {
    setSize("");
    setModalProduct(prev => prev - 1);
  }
  
  const handleNext = () => {
    setSize("");
    setModalProduct(prev => prev + 1);
  }

  const handleAddToCart = (product:ProductModel, size:string) => {
    setSize("");
    addToCart?.(product, 1, size);
  }
  
  const handleDeleteFromCart = (product:ProductModel) => {
    setSize("")
    deleteFromCartByName?.(product)
    handleIsInCartList();
  }

  useEffect(() => {
    handleIsInCartList();
  }, [modalProduct, handleAddToCart, handleDeleteFromCart])

  return (
    <div className='modalSelectSizes'>
      <p className='modalSelectSizes_p'>CERRAR</p>
      <h2 className='modalSelectSizes_h2'>Selecciona el talle para</h2>
      <h2 className='modalSelectSizes_h2'>{modalProducts[modalProduct].name}</h2>
      <img src={modalProducts[modalProduct].images[0]} className='modalSelectSizes_img' />
        {!isInCartList && <ProductSizes sizeType={modalProducts[modalProduct].format_of_size_chart} size={size} setSize={setSize} />}
      <div className={`modalSelectSizes_div ${isInCartList && 'spacing_top'}`}>
      <div className={`modalSelectSizes_div_actions ${modalProduct === 0 && 'first'}`}>
        {modalProduct !== 0 && <p onClick={handlePrevious} className='modalSelectSizes_div_actions_p'>ANTERIOR</p>}
        {modalProduct !== 2 && <p onClick={handleNext} className='modalSelectSizes_div_actions_p'>SIGUIENTE</p>}
      </div>
        {!isInCartList
          ? <TertiaryButton text='AGREGAR AL CARRITO' onClick={() => handleAddToCart(modalProducts[modalProduct], size)} disabled={size === ""} />
          : <TertiaryButton text="ELIMINAR DEL CARRITO"  onClick={() => handleDeleteFromCart(modalProducts[modalProduct])} />
        }
      </div>
    </div>
  );
};

export default ModalSelectSizes;