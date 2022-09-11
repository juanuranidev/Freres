import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ProductModel } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";
import ProductDetail from "./ProductDetail/ProductDetail";

const ProductFinder = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductModel>();

  const navigate = useNavigate();
  const { idProduct }: any = useParams();

  useEffect(() => {
    handleFindProduct();
  }, [idProduct]);

  const handleFindProduct = async () => {
    const dataBase = getFirestore();
    const queryProd = doc(dataBase, "products", idProduct);

    await getDoc(queryProd).then((resp) => {
      if (resp.data()) {
        setProduct({ id: resp.id, ...resp.data() } as ProductModel);
        setLoader(false);
      } else {
        navigate("/");
      }
    });
  };

  if (loader) return <Loader />;

  return (
    <React.Fragment>
      <ProductDetail product={product!} />
    </React.Fragment>
  );
};

export default ProductFinder;
