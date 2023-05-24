import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Images } from "./ImportImages";
import { Link } from "react-router-dom";
import MenuResponsiveSublink from "./MenuResponsiveSublink/MenuResponsiveSublink";
import "./MenuResponsive.scss";

interface MenuResponsiveProps {
  handleCloseMenuResponsive: () => void;
  openMenu: boolean;
}

const MenuResponsive = ({
  handleCloseMenuResponsive,
  openMenu,
}: MenuResponsiveProps) => {
  const [showShop, setShowShop] = useState<boolean>(false);

  useEffect(() => {
    setShowShop(false);
  }, [openMenu]);

  return (
    <div className={openMenu ? "menuResponsive" : "menuResponsive menuClose"}>
      <div>
        <div className="menuResponsive_close">
          <div className="menuResponsive_close_div">
            <div onClick={handleCloseMenuResponsive} />
          </div>
        </div>
        <ul className="menuResponsive_ul">
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/shop/all"
              onClick={handleCloseMenuResponsive}
            >
              SHOP
            </Link>
            <span
              className={`fas fa-angle-${
                showShop ? "down" : "right"
              } menuResponsive_ul_li_span`}
              onClick={() => setShowShop(!showShop)}
            />
          </li>
          <AnimatePresence>
            {showShop && (
              <motion.div
                initial={{ opacity: 0, y: "-5%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-5%" }}
                transition={{ type: "linear" }}
                className="animated_div"
              >
                <MenuResponsiveSublink
                  link="/shop/camperasybuzos/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp"
                  alt="CAMPERAS Y BUZOS"
                  boxShadow={false}
                  text="CAMPERAS Y BUZOS"
                />
                <MenuResponsiveSublink
                  link="/shop/remeras/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp"
                  alt="REMERAS"
                  boxShadow={false}
                  text="REMERAS"
                />
                <MenuResponsiveSublink
                  link="/shop/pantalones/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp"
                  alt="PANTALONES"
                  boxShadow={false}
                  text="PANTALONES"
                />
                <MenuResponsiveSublink
                  link="/shop/calzado/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp"
                  alt="CALZADO"
                  boxShadow={false}
                  text="CALZADO"
                />
                <MenuResponsiveSublink
                  link="/shop/accesorios/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp"
                  alt="ACCESORIOS"
                  boxShadow={false}
                  text="ACCESORIOS"
                />
                <MenuResponsiveSublink
                  link="/shop/all/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp"
                  alt="TODOS LOS PRODUCTOS"
                  boxShadow={false}
                  text="TODOS LOS PRODUCTOS"
                />
                <MenuResponsiveSublink
                  link="/shop/accesorios/"
                  onClick={handleCloseMenuResponsive}
                  src="https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp"
                  alt="ACCESORIOS"
                  boxShadow={false}
                  text="ACCESORIOS"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/essential_outfits"
              onClick={handleCloseMenuResponsive}
            >
              ESSENTIAL OUTFITS
            </Link>
          </li>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/about"
              onClick={handleCloseMenuResponsive}
            >
              NOSOTROS
            </Link>
          </li>
          <li className="menuResponsive_ul_li">
            <Link
              className="menuResponsive_ul_li_a"
              to="/build-your-outfit"
              onClick={handleCloseMenuResponsive}
            >
              ARMA TU OUTFIT
            </Link>
          </li>
        </ul>
      </div>
      <div className="menuResponsive_images">
        {Images.map((img: string, index: number) => (
          <img
            className="menuResponsive_images_img"
            key={index}
            src={img}
            alt="Imágen decorativa de prenda"
          />
        ))}
      </div>
    </div>
  );
};

export default MenuResponsive;
