import React, { useState, useEffect, useContext } from "react";
import { CartContext, ProductModel } from "../../../Context/CartContext";
import { motion } from "framer-motion";
import Loader from "../../../Components/Loader/Loader";
import AddToCart from "../AddToCart/AddToCart";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductPanel from "../ProductPanel/ProductPanel";
import ProductImages from "../ProductImages/ProductImages";
import useGetCustomProducts from "../../../Hooks/useGetCustomProducts";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import ProductTextContent from "../ProductTextContent/ProductTextContent";
import "./ProductDetail.scss";

interface ProductDetailProps {
  product: ProductModel;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [size, setSize] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);

  const { addToCart, setPayment } = useContext(CartContext);
  const { loader, products } = useGetCustomProducts(
    "category",
    "==",
    product.category
  );

  useEffect(() => {
    setSize("");
    setAmount(1);
  }, [product]);

  const handleAddToCart = () => {
    addToCart?.(product, amount, size);
    setAmount(1);
    setSize("");
    setPayment?.(false);
  };
  console.log(product);
  if (loader) return <Loader />;

  return (
    <section className="productDetail">
      <React.Fragment>
        <motion.div
          className="container"
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <ProductImages images={product.images} />
          <div className="productDetail_content">
            <ProductTextContent
              name={product.name}
              price={product.price}
              description={product.description}
            />
            <ProductSizes
              sizeType={product.format_of_size_chart}
              size={size}
              setSize={setSize}
            />
            <AddToCart
              stock={product.stock}
              size={size}
              amount={amount}
              setAmount={setAmount}
              handleAddToCart={handleAddToCart}
            />
            <ProductPanel
              title="DETALLES"
              text={product.name}
              product={product}
            />
            <ProductPanel
              title="ENVÍOS"
              text="Los envíos son realizados por Correo Argentino y moto mensajería. También podes retirar tu pedido gratis por nuestra oficina en CABA."
              product={product}
            />
            <ProductPanel
              title="POLÍTICA DE CAMBIOS"
              text="Podrás realizar un cambio hasta 10 días después de haber recibido tu compra. Los productos deberán encontrarse en el mismo estado en que fueron remitidos. Podes hacerlo acercándote a nuestras oficinas en CABA o bien abonando el envío hacia nuestra oficina, nosotros abonamos el envío a tu casa."
              product={product}
            />
          </div>
        </motion.div>
        {products.length && (
          <SimilarProducts product={product} products={products} />
        )}
      </React.Fragment>
    </section>
  );
};

export default ProductDetail;
