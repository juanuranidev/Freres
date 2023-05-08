import React, { useState, useContext, useEffect } from "react";
import { CartContext, ProductModel } from "../../../Context/CartContext";
import ProductSizes from "../../../Views/ProductDetail/ProductSizes/ProductSizes";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";
import "./ModalSelectSizes.scss";

interface ModalSelectSizesProps {
  open: boolean;
  close: () => void;
  modalProducts: ProductModel[];
}

const ModalSelectSizes = ({
  open,
  close,
  modalProducts,
}: ModalSelectSizesProps) => {
  const [size, setSize] = useState<string>("");
  const [modalProduct, setModalProduct] = useState<number>(0);
  const [productsWithSizes, setProductWithSizes] = useState<ProductModel[]>([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    handleGetSize();
  }, [modalProduct, size]);

  const handleNext = () => setModalProduct((prev) => prev + 1);
  const handlePrevious = () => setModalProduct((prev) => prev - 1);

  const handleGetSize = () => {
    const exist = productsWithSizes.find(
      (product: ProductModel) => product.id === modalProducts[modalProduct].id
    );

    if (exist?.size !== "") {
      setSize(exist?.size || "");
    } else {
      setSize("");
      setProductWithSizes(
        productsWithSizes.filter(
          (product: ProductModel) =>
            product.id !== modalProducts[modalProduct].id
        )
      );
    }
  };

  const handleSetSize = (size: string) => {
    const hasASize = productsWithSizes.some(
      (product: ProductModel) => product.id === modalProducts[modalProduct].id
    );
    setSize(size);

    if (hasASize) {
      return setProductWithSizes(
        productsWithSizes.map((product: ProductModel) =>
          product.id === modalProducts[modalProduct].id
            ? { ...product, size: size }
            : product
        )
      );
    } else {
      return setProductWithSizes([
        ...productsWithSizes,
        { ...modalProducts[modalProduct], size },
      ]);
    }
  };

  const handleAddToCart = () => {
    productsWithSizes.forEach((product) =>
      addToCart?.(product, 1, product.size)
    );
    close();
  };

  return (
    <div className={`modalSelectSizes ${open && "modalSelectSizes_visible"} `}>
      <div className="modalSelectSizes_close">
        <p className="modalSelectSizes_close_p" onClick={close}>
          CERRAR
        </p>
      </div>
      <h2 className="modalSelectSizes_h2">Selecciona el talle para</h2>
      <h2 className="modalSelectSizes_h2">
        {modalProducts[modalProduct].name}
      </h2>
      <img
        src={modalProducts[modalProduct].images[0]}
        className="modalSelectSizes_img"
      />
      <ProductSizes
        sizeType={modalProducts[modalProduct].format_of_size_chart}
        size={size}
        setSize={handleSetSize}
      />
      <div className="modalSelectSizes_div">
        <div
          className={`modalSelectSizes_div_actions${
            modalProduct === 0 ? " first" : ""
          }`}
        >
          {modalProduct !== 0 && (
            <p
              onClick={handlePrevious}
              className="modalSelectSizes_div_actions_p"
            >
              ANTERIOR
            </p>
          )}
          {modalProduct !== modalProducts.length - 1 && (
            <p onClick={handleNext} className="modalSelectSizes_div_actions_p">
              SIGUIENTE
            </p>
          )}
        </div>
        {modalProduct === modalProducts.length - 1 && (
          <TertiaryButton
            text="AGREGAR AL CARRITO"
            onClick={handleAddToCart}
            disabled={!productsWithSizes.length}
          />
        )}
      </div>
    </div>
  );
};

export default ModalSelectSizes;
