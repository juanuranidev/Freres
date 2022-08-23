import React from 'react'
import { Link, useParams, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from "react-router-dom";

function CustomLink({ children, to }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className='shop_categories_a'
      style={{ opacity : match ? '0.6' : '1' }}>
      {children}
    </Link>
  );
}

const ButtonCategories = () => {

  return (
    <div>
      <CustomLink to="/shop/all">TODOS LOS PRODUCTOS</CustomLink>
      <CustomLink to="/shop/camperasybuzos">CAMPERAS Y BUZOS</CustomLink>
      <CustomLink to="/shop/remeras">REMERAS</CustomLink>
      <CustomLink to="/shop/pantalones">PANTALONES Y SHORTS</CustomLink>
      <CustomLink to="/shop/calzado">CALZADO</CustomLink>
      <CustomLink to="/shop/accesorios">ACCESORIOS</CustomLink>
      
    </div>
  )
}

export default ButtonCategories