import React, { useState, useEffect } from 'react'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import EssentialOutfit from './EssentialOutfit/EssentialOutfit';
import './EssentialOutfits.scss'

const EssentialOutfits = () => {
  const [data, setData] = useState<any>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('is_an_essential_outfit', '==', true))
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
      }, []);

      console.log(data)

  return (
    <div className='essentialOutfits'>
      {/* {loader
      ?<Loader/>
      :<ProductList products={data}/>} */}
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'} name={'Elegant'} products={data.filter((product:any) => product.essential_outfit==="elegant")} />
    </div>
  )
}

export default EssentialOutfits