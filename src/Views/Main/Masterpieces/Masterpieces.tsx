import React from "react";
import Loader from "../../../Components/Loader/Loader";
import ProductList from "../../../Components/ProductList/ProductList";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton/PrimaryButton";
import useGetCustomProducts from "../../../Hooks/useGetCustomProducts";
import "./Masterpieces.scss";

const Masterpieces = () => {
  const { products, loader } = useGetCustomProducts("masterpiece", "==", true);

  if (loader) return <Loader />;

  if (!products.length) return null;

  return (
    <section className="masterpieces">
      <h2 className="masterpieces_h2">MASTERPIECES</h2>
      <div className="masterpieces_div">
        <ProductList products={products} />
      </div>
      <div className="masterpieces_button">
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS" />
      </div>
    </section>
  );
};

export default Masterpieces;
