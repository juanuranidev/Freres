import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ProductModel } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import ProductDetail from "./ProductDetail/ProductDetail";

const ProductFinder = () => {
  const [loader, setLoader] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductModel>();

  const navigate = useNavigate();
  const { category }: any = useParams();

  const handleFindProduct = async () => {
    setLoader(true);

    const dataBase = getFirestore();
    const queryProd = doc(dataBase, "products", category);

    await getDoc(queryProd).then((resp) => {
      if (resp.data()) {
        setProduct({ id: resp.id, ...resp.data() } as ProductModel);
      } else {
        navigate("/");
      }
    });
    setLoader(false);
  };

  useEffect(() => {
    handleFindProduct();
  }, [category]);
  console.log(category);
  if (loader) return <Loader />;

  return (
    <React.Fragment>
      <ProductDetail product={product!} />
    </React.Fragment>
  );
};

export default ProductFinder;
