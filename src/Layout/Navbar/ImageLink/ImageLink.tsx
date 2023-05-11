import React from 'react';
import { Link } from 'react-router-dom';
import './ImageLink.scss';

interface ImageLinkProps {
    link: string,
    src: string,
    alt: string,
    p?: string,
    boxShadow?: boolean,
}

const ImageLink = ({link, src, alt, p, boxShadow}: ImageLinkProps) => {
  return (
    <Link to={link} className='imageLink'>
      <img
        className={`${boxShadow ? 'imageLink_img boxShadow' : 'imageLink_img'}`}
        src={src}
        alt={alt}
      />
      <p className='imageLink_p'>{p}</p>
    </Link>
  );
}

export default ImageLink;