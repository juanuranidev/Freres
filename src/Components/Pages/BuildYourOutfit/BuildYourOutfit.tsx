import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import OutfitProducts from './OutfitProducts/OutfitProducts';
import './BuildYourOutfit.scss';

const BuildYourOutfit = () => {
  const [ shirt, setShirt ] = useState<ProductModel>()
  const [ pants, setPants ] = useState<ProductModel>()
  const [ shoes, setShoes ] = useState<ProductModel>()
  const [ loader, setLoader ] = useState<boolean>(false)
  const [ category, setCategory ] = useState<string>("")
  const [ products, setProducts ] = useState<ProductModel[]>([])
  const [ showItems, setShowItems ] = useState<boolean>(false)
  const [ initialItems, setInitialItems] = useState<boolean>(false)

  useEffect(() => {
    handleGetInitialItems()
  }, [])

  useEffect(() => {
    if (initialItems) {
      setShirt(products.find((product: ProductModel) => product.category === 'remeras'))
      setPants(products.find((product: ProductModel) => product.category === 'pantalones'))
      setShoes(products.find((product: ProductModel) => product.category === 'calzado'));
    }
  }, [initialItems])

  const handleShowItems = (categorySelected:string) => {
    setLoader(true)
    setCategory(categorySelected)
    handleGetItems(categorySelected)
    if(!showItems){
      setShowItems(!showItems)
    } else {
      setLoader(true)
      setProducts([])
    }
  }

  const handleGetInitialItems = async () => {
      const database = getFirestore()
      let queryCollection = query(collection(database, 'products'), where('is_an_essential_outfit', '==', true))
      await getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
      .catch(err => console.log(err))
      .finally(() => setInitialItems(true))
    }

  const handleGetItems = async (categorySelected:string) => {
    const dataBase = getFirestore();
    let queryCollection = query(collection(dataBase, 'products'), where('category', '==', categorySelected))
  
    await getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
      .catch(err => console.log(err))
      .finally(() => {
        setShowItems(true)
        setLoader(false)
    })
  }

  const handleSetItem = (product: ProductModel) => {
    if(category === "remeras" || category === "camperasybuzos") {
      setShirt(product)
    } else if(category === "calzado") {
      setShoes(product)
    } else if(category === "pantalones") {
      setPants(product)
    }
    window.scrollTo(0, 0);
    setInitialItems(false)
  }

  return (
    <motion.div
      initial={{ x:-100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ ease: "linear", duration: 0.25 }}
      className="build_your_outfit">
      <div className='products'>
        <div className='products_div'>
          <button className={`products_div_button ${category === "camperasybuzos" && 'selected'}`} onClick={() => handleShowItems("camperasybuzos")}>Camperas y Buzos</button>
          <button className={`products_div_button ${category === "remeras" && 'selected'}`} onClick={() => handleShowItems("remeras")}>Remeras</button>
          <button className={`products_div_button ${category === "pantalones" && 'selected'}`} onClick={() => handleShowItems("pantalones")}>Pantalones y Shorts</button>
          <button className={`products_div_button ${category === "calzado" && 'selected'}`} onClick={() => handleShowItems("calzado")}>Calzado</button>
        </div>
        <OutfitProducts showItems={showItems} products={products} loader={loader} handleSetItem={handleSetItem} />
      </div>
      <div className='outfit'>
        {initialItems && (
          products.map((item: ProductModel) => {
            <Link to={`/product/${item.id}`}>
              <img className='outfit_img upper' src={item.images[0]} alt="Remera/Capera" />
            </Link>
          })
        )

        }
        {shirt && (
          <Link to={`/product/${shirt.id}`}>
            <img className='outfit_img upper' src={shirt.images[0]} alt="Remera/Capera" />
          </Link>)}
        {pants && (
          <Link to={`/product/${pants.id}`}>
            <img className='outfit_img middle' src={pants.images[0]} alt="Pantalón" />
          </Link>)}
        {shoes && (
        <Link to={`/products/${shoes.id}`}>
          <img className='outfit_img bottom' src={shoes?.images[0]} alt="Calzado" />
        </Link>)}
      </div>
    </motion.div>
  );
}

export default BuildYourOutfit;