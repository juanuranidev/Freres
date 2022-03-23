import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import Images from './Img/ImportImages';
import ProductList from '../../ProductList/ProductList';
import './EssentialOutfitDetail.scss';

const EssentialOutfitDetail = () => {
    const [products, setProducts] = useState<any>([])
    const [loader, setLoader] = useState<boolean>(true)
    const { idOutfit } = useParams()

    
    let image:any = Images.find((image) => image.id===idOutfit)

    useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('essential_outfit', '==', idOutfit))
  
    getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))

    }, [idOutfit]);

    return (
      <section className='essentialOutfitDetail'>
          {loader
          ? <Loader/>
          : <div>
              <img src={image.path}/>
              <h1>{idOutfit}</h1>
              <div>
                <ProductList products={products}/>
              </div>
            </div>}
      </section>
  );
}

export default EssentialOutfitDetail;