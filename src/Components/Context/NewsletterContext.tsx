import React, { createContext, useState } from 'react';
import { addDoc, getFirestore, query, collection, where, getDocs } from 'firebase/firestore';

const initialValue = {
  alreadySuscribed: false,
  activePopup: false,
  errorMessage: false,
}

type NewsletterContextType = {
  alreadySuscribed: boolean;
  setAlreadySuscribed?: (value:boolean) => void;
  activePopup: boolean;
  setActivePopup?: (value:boolean) => void;
  errorMessage: boolean;
  setErrorMessage?: (value:boolean) => void;
  handleSubmit?: (e:any, setLoader: (value: boolean) => void, userEmail: any, setIsUserSuscribed: (value: boolean) => void) => void;
}

export const NewsletterContext = createContext<NewsletterContextType>(initialValue)

export const NewsletterContextProvider = ({children}:any) => {
  const [alreadySuscribed, setAlreadySuscribed] = useState<boolean>(false)
  const [activePopup, setActivePopup] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  const handleSubmit = async(e:any, setLoader: (value: boolean) => void, userEmail: any, setIsSuscribed: (value: boolean) => void) => {
    setLoader(true)
    e.preventDefault()
    
    let emailObject:any = {}
    emailObject.email = userEmail.email
    
    const dataBase = getFirestore()
    
    const emailCollection = collection(dataBase, 'newsletter') 
    const queryCollection = query(emailCollection, where('email', '==', emailObject.email))
    
    try{
      const data = await getDocs(queryCollection)
      if(data.docs.length){
        setErrorMessage(true)
      } else {
        await addDoc(emailCollection, emailObject)
        setIsSuscribed(true)
        localStorage.setItem('alreadySuscribed', JSON.stringify(true));
        setErrorMessage(false)
      }
      setLoader(false)
    } catch(error) {
      console.log(error)
    }
  }

  return(
    <NewsletterContext.Provider value={{ 
      alreadySuscribed,
      setAlreadySuscribed,
      activePopup,
      setActivePopup,
      errorMessage,
      setErrorMessage,
      handleSubmit
    }}>
      {children}
    </NewsletterContext.Provider>
  )
}
