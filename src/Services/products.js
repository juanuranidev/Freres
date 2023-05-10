import { getDocs, collection, getFirestore } from "firebase/firestore";

const dataBase = getFirestore();

export const handleGetAllProducts = async () => {
  try {
    const emailCollection = collection(dataBase, "products");

    const response = await getDocs(emailCollection);
    return response;
  } catch (error) {
    return error;
  }
};
