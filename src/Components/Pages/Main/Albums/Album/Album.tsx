import React from 'react';
import './Album.scss';

interface AlbumProps {
    img: string,
    h3: string,
    link: string
}

const Album = ({img, h3, link}: AlbumProps) => {
  return (
    <div className='album'>
      <img src={img} />
      <div>
          <h3>{h3}</h3>
          <a href={link} target='_blank'><button>PLAY</button></a>
      </div>
    </div>
  );
}

export default Album;