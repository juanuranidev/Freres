import { useEffect, useState } from "react";
import {
  query,
  where,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";
import { ProductModel } from "../Context/CartContext";
import { mapProducts } from "../Utils/products";

const useGetCustomProducts = (
  parameter1?: any,
  parameter2?: any,
  parameter3?: string | boolean
) => {
  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const getProducts = async () => {
    try {
      const dataBase = getFirestore();
      const queryCollection = query(
        collection(dataBase, "products"),
        where(parameter1, parameter2, parameter3)
      );

      const response = await getDocs(queryCollection);
      if (response) {
        setProducts(mapProducts(response.docs));
      }

      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loader };
};

export default useGetCustomProducts;
