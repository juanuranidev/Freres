import React, { useState } from 'react';
import { ProductModel } from '../../Context/CartContext'; 
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import OutfitProducts from './OutfitProducts/OutfitProducts';
import './BuildYourOutfit.scss';

const BuildYourOutfit = () => {
  const [ shoes, setShoes ] = useState("")
  const [ shirt, setShirt ] = useState("")
  const [ pants, setPants ] = useState("")
  const [ loader, setLoader ] = useState<boolean>(false)
  const [ category, setCategory ] = useState<string>("")
  const [ products, setProducts ] = useState<ProductModel[]>([])
  const [ showItems, setShowItems ] = useState<boolean>(false)

  const handleShowItems = async (categorySelected:string) => {
    if(!showItems){
      setLoader(true)
      setShowItems(!showItems)
      setCategory(categorySelected)
      const dataBase = getFirestore();
      let queryCollection = query(collection(dataBase, 'products'), where('category', '==', categorySelected))
    
      await getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
        .catch(err => console.log(err))
        .finally(() => {
          setShowItems(true)
          setLoader(false)
      })
    } else {
      setShowItems(false)
      setCategory("")
    }
  }

  const handleSetItem = (product: ProductModel) => {
    if(category === "remeras" || category === "camperasybuzos") {
      setShoes(product.images[0])
    } else if(category === "calzado") {
      setShirt(product.images[0])
    } else if(category === "pantalones") {
      setPants(product.images[0])
    }
  }

  return (
    <section className='build_your_outfit'>
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
        <img className='outfit_img' src={shoes} />
        <img className='outfit_img pants' src={pants} />
        <img className='outfit_img' src={shirt} />
      </div>

    </section>
  );
}

export default BuildYourOutfit;