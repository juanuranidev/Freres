import React, { useState } from 'react';
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import './Newsletter.scss';

const Newsletter = () => {
  const [isUserSuscribed, setIsUserSuscribed] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<any>({email: ''})

  const handleSetUserEmail = (e:any) => setUserEmail({...userEmail,[e.target.name] : e.target.value})

  const handleSubmit = (e:any) => {
    e.preventDefault()
    let email:any = {}
    email.email = userEmail.email

    const dataBase = getFirestore()
    const queryProd = doc (dataBase, 'newsletter', userEmail.email)
    // const emailCollection = collection(dataBase, 'newsletter') 
    // const emailCollection = collection(dataBase, 'products'), where('category', '==', ${userEmail.email})
    // db.collection('books').where('id', '==', 'fK3ddutEpD2qQqRMXNW5').get()
    getDoc(queryProd)
    .then((res) => console.log(res.data()))
      .catch(err => console.log(err))
      // .finally (() => {setIsUserSuscribed(true)})
      // .finally((res) => console.log(res.data()))


    // const dataBase = getFirestore()
    // const queryProd = doc (dataBase, 'products', idProduct)

    // getDoc(queryProd)
    // .then(resp => setProduct({id: resp.id, ...resp.data()} as ProductModel))
    // .catch(err => console.log(err))
    // .finally(() => setLoader(false))

  }

  return (
    <div className='newsletter'>
      <h3 className='newsletter_h3'>ÚNETE A NUESTRA TRIBU</h3>
      <p className='newsletter_p'>RECIBE NOVEDADES Y BENEFICIOS EXCLUSIVOS</p>
      {isUserSuscribed
      ? <div className='newsletter_suscribed'>
          <p className='newsletter_suscribed_p'>HAS SIDO SUSCRITO A NUESTRO NEWSLETTER</p>
        </div>
      : <div className='newsletter_div'>
          <form className='newsletter_div_form' onSubmit={(e) => handleSubmit(e)}>
            <input 
            name='email' 
            type='email' 
            placeholder='Email' 
            value={userEmail.email} 
            className='newsletter_div_form_input' 
            onChange={(e) => handleSetUserEmail(e)} />    
            {userEmail.email
            ? <button type='submit' className='newsletter_div_form_button'>UNIRME</button>
            : <button type='submit' className='newsletter_div_form_button' disabled>UNIRME</button>}
          </form>            
        </div>}
    </div>
  );
}

export default Newsletter;


// .then(res => setEmails(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
// .catch(err => console.log(err))