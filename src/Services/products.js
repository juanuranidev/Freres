import {
  doc,
  where,
  query,
  getDoc,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";

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

export const handleGetProductsByCategory = async (category) => {
  try {
    const categoryCollection = query(
      collection(dataBase, "products"),
      where("category", "==", category)
    );

    const response = await getDocs(categoryCollection);
    return response;
  } catch (error) {
    return error;
  }
};

export const handleGetProductById = async (productId) => {
  try {
    const productQuery = doc(dataBase, "products", productId);

    const response = await getDoc(productQuery);
    return response;
  } catch (error) {
    return error;
  }
};

export const handleGetTopSellerProducts = async () => {
  try {
    const categoryCollection = query(
      collection(dataBase, "products"),
      where("top_seller", "==", true)
    );

    const response = await getDocs(categoryCollection);
    return response;
  } catch (error) {
    return error;
  }
};
