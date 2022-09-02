import React, { useEffect, useState, useContext } from 'react';
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
  const [isInCartList, setIsInCartList] = useState<boolean>(false)
  const [firstSize, setFirstSize] = useState<string>("")
  const [secondSize, setSecondSize] = useState<string>("")
  const [thirdSize, setThirdSize] = useState<string>("")

  const { addToCart, deleteFromCartByName, cartList } = useContext(CartContext)

  useEffect(() => {
    if(modalProduct === 0){
      setSize(firstSize);
     } else if(modalProduct === 1){
      setSize(secondSize);
     } else if(modalProduct === 2){
      setSize(thirdSize);
     }
  }, [firstSize, secondSize, thirdSize])

  const handleIsInCartList = () => {
    let isInCart = cartList.find((product: ProductModel) => product.name === modalProducts[modalProduct].name)
    
    if(isInCart){
      setIsInCartList(true)
    } else {
      setIsInCartList(false)
    }
  }

  const handlePrevious = () => {
    if(modalProduct === 0){
      setSize(firstSize);
     } else if(modalProduct === 1){
      setSize(secondSize);
     } else if(modalProduct === 2){
      setSize(thirdSize);
     }
    // setSize("");
    setModalProduct(prev => prev - 1);
  }
  
  const handleNext = () => {
    // setSize("");
    setModalProduct(prev => prev + 1);
  }

  const handleAddToCart = (product:ProductModel, size:string) => {
    setSize("");
    addToCart?.(product, 1, size);
  }
  
  const handleDeleteFromCart = (product:ProductModel) => {
    setSize("")
    handleIsInCartList();
    deleteFromCartByName?.(product)
  }

  // const handleSetSize = () => {
  //   let test:any = cartList.find((item: ProductModel) => item.name === modalProducts[modalProduct].name)
  //   console.log(cartList.find((item: ProductModel) => item.name === modalProducts[modalProduct].name))
  //   if(!isInCartList){
  //     setSize(test.size)
  //   }
  //   // console.log(test[0].size)
  // }

  const handleSetSize = (size:string) => {
   if(modalProduct === 0){
    setFirstSize(size);
   } else if(modalProduct === 1){
    setSecondSize(size);
   } else if(modalProduct === 2){
    setThirdSize(size);
   }
   return size
  }


  useEffect(() => {
    handleIsInCartList();
  }, [modalProduct, handleAddToCart, handleDeleteFromCart])

  return (
    <div className={`modalSelectSizes ${open && 'modalSelectSizes_visible'} `}>
      <p className='modalSelectSizes_p' onClick={close}>CERRAR</p>
      <h2 className='modalSelectSizes_h2'>Selecciona el talle para</h2>
      <h2 className='modalSelectSizes_h2'>{modalProducts[modalProduct].name}</h2>
      <img src={modalProducts[modalProduct].images[0]} className='modalSelectSizes_img' />
        <ProductSizes sizeType={modalProducts[modalProduct].format_of_size_chart} size={size} setSize={handleSetSize} />
      <div className={`modalSelectSizes_div ${isInCartList && 'spacing_top'}`}>
      <div className={`modalSelectSizes_div_actions ${modalProduct === 0 && 'first'}`}>
        {modalProduct !== 0 && <p onClick={handlePrevious} className='modalSelectSizes_div_actions_p'>ANTERIOR</p>}
        {modalProduct !== 2 && <p onClick={handleNext} className='modalSelectSizes_div_actions_p'>SIGUIENTE</p>}
      </div>
        {!isInCartList
          ? <TertiaryButton text='AGREGAR AL CARRITO' onClick={() => handleAddToCart(modalProducts[modalProduct], size)} disabled={size === ""} />
          : <QuaternaryButton text="ELIMINAR DEL CARRITO"  onClick={() => handleDeleteFromCart(modalProducts[modalProduct])} />
        }
      </div>
    </div>
  );
};

export default ModalSelectSizes;