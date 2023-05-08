import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Overlay.scss";

interface OverlayProps {
  openMenu?: boolean;
  handleCloseMenu?: () => void;
}

const Overlay = ({ openMenu, handleCloseMenu }: OverlayProps) => {
  const { openCart, handleCloseCart } = useContext(CartContext);

  const handleClickOutside = () => {
    handleCloseMenu?.();
    handleCloseCart?.();
  };

  return (
    <div
      className={openMenu || openCart ? "overlay visible" : "overlay"}
      onClick={handleClickOutside}
    />
  );
};

export default Overlay;
