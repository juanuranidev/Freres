import React from "react";
import Loader from "../../../Components/Loader/Loader";
import ProductList from "../../../Components/ProductList/ProductList";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton/PrimaryButton";
import useGetCustomProducts from "../../../Hooks/useGetCustomProducts";
import "./TopSellers.scss";

const TopSellers = () => {
  const { loader, products } = useGetCustomProducts("top_seller", "==", true);

  if (loader) return <Loader />;

  if (!products.length) return null;

  return (
    <section className="topSellers">
      <h2 className="topSellers_h2">TOP SELLERS</h2>
      <div className="topSellers_div">
        <ProductList products={products} />
      </div>
      <div className="topSellers_button">
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS" />
      </div>
    </section>
  );
};

export default TopSellers;
