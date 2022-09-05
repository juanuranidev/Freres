import React, { useState, useContext, useEffect } from 'react';
import { CartContext, ProductModel } from '../../Context/CartContext';
import ProductSizes from '../../Pages/ProductDetail/ProductSizes/ProductSizes';
import TertiaryButton from '../../Buttons/TertiaryButton/TertiaryButton';
import QuaternaryButton from '../../Buttons/QuaternaryButton/QuaternaryButton';
import './ModalSelectSizes.scss';

interface ModalSelectSizesProps {
  open: boolean;
  close: () => void;
  modalProducts: ProductModel[];
}

const ModalSelectSizes = ({open, close, modalProducts}: ModalSelectSizesProps) => {
  const [size, setSize] = useState<string>("")
  const [modalProduct, setModalProduct] = useState<number>(0)
  const [productsWithSizes, setProductWithSizes] = useState<ProductModel[]>([])

  const { addMultipleToCart, addToCart, cartList } = useContext(CartContext)

  useEffect(() => {
    handleGetSize();
  }, [modalProduct, productsWithSizes, size])

  const handlePrevious = () => {
    setSize("");
    setModalProduct(prev => prev - 1);
  }
  
  const handleNext = () => {
    setSize("");
    setModalProduct(prev => prev + 1);
  }

  const handleGetSize = () => {
    const product = productsWithSizes.find((item:ProductModel) => item.id === modalProducts[modalProduct].id)
    const size = product?.size

    if(product && size !== "") {
      setSize(product.size)
    } else if(product && size === ""){
      setProductWithSizes(productsWithSizes.filter((item:ProductModel) => item.id !== product.id))
      setSize("")
    }
  }

  const handleSetSize = (size:string) => {
    const hasASize = productsWithSizes.find((product: ProductModel) => product.id === modalProducts[modalProduct].id)

    if(hasASize){
      return setProductWithSizes(productsWithSizes.map((product:ProductModel) => product.id === modalProducts[modalProduct].id ? { ...product, size: size } : product))
    } else if(!hasASize) {
      return setProductWithSizes([...productsWithSizes, {...modalProducts[modalProduct], size}])
    }
  }

  const handleAddToCart = async (product:ProductModel, size:string) => {
    productsWithSizes.forEach((product: ProductModel) => {
      addToCart?.(product, 1, product.size)
    })
  }


  return (
    <div className={`modalSelectSizes ${open && 'modalSelectSizes_visible'} `}>
      <div className='modalSelectSizes_close'>
        <p className='modalSelectSizes_close_p' onClick={close}>CERRAR</p>
      </div>
      <h2 className='modalSelectSizes_h2'>Selecciona el talle para</h2>
      <h2 className='modalSelectSizes_h2'>{modalProducts[modalProduct].name}</h2>
      <img src={modalProducts[modalProduct].images[0]} className='modalSelectSizes_img' />
        <ProductSizes sizeType={modalProducts[modalProduct].format_of_size_chart} size={size} setSize={handleSetSize} />
      <div className='modalSelectSizes_div'>
      <div className={`modalSelectSizes_div_actions ${modalProduct === 0 && 'first'}`}>
        {modalProduct !== 0 && <p onClick={handlePrevious} className='modalSelectSizes_div_actions_p'>ANTERIOR</p>}
        {modalProduct !== 2 && <p onClick={handleNext} className='modalSelectSizes_div_actions_p'>SIGUIENTE</p>}
      </div>
        {modalProduct === 2 && <TertiaryButton text='AGREGAR AL CARRITO' onClick={() => handleAddToCart(modalProducts[modalProduct], size)} disabled={size === ""} />}
      </div>
    </div>
  );
};

export default ModalSelectSizes;