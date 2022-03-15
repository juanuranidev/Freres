// import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

// const getProducts = ():void => {
//     const dataBase = getFirestore()
//     const queryCollection = query(collection(dataBase, 'products'), where('top_seller', '==', true))
//     getDocs(queryCollection)
//         .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
//         .catch(err => console.log(err))
//         .finally(() => setLoader(false))
// }

const getProducts = () => {
    console.log("test")
}

export default getProducts