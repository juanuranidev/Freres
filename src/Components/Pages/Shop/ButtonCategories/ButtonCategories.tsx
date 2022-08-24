import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { LinkProps } from "react-router-dom";
import "./ButtonCategories.scss";

function CustomLink({ children, to }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className='buttonCategories_links_a'
      style={{ opacity : match ? '0.6' : '1' }}
    >
      {children}
    </Link>
  );
}

const ButtonCategories = () => {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <div className='buttonCategories'>
      <div className='buttonCategories_text' onClick={() => setShowCategories(!showCategories)}>
      <p className='buttonCategories_text_p'>CATEGORÍAS</p>
      <span className='fas fa-angle-down buttonCategories_text_span'/>
      </div>
      <AnimatePresence>
        {showCategories && (
          <motion.div
            initial={{ opacity: 0, y: "-5%"}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-5%" }}
            transition={{ type: "linear", stiffness: 100 }}
            className="buttonCategories_links"
            >
            <CustomLink to="/shop/all">TODOS LOS PRODUCTOS</CustomLink>
            <CustomLink to="/shop/camperasybuzos">CAMPERAS Y BUZOS</CustomLink>
            <CustomLink to="/shop/remeras">REMERAS</CustomLink>
            <CustomLink to="/shop/pantalones">PANTALONES Y SHORTS</CustomLink>
            <CustomLink to="/shop/calzado">CALZADO</CustomLink>
            <CustomLink to="/shop/accesorios">ACCESORIOS</CustomLink>
          </motion.div>)}
      </AnimatePresence>
    </div>
  );
};

export default ButtonCategories;