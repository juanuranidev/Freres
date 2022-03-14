import React from 'react';
import Album from './Album/Album';
import SPOTIFY from './img/SPOTIFY.png';
import ALBUMIMAGE1 from './img/ALBUMIMAGE1.png';
import ALBUMIMAGE2 from './img/ALBUMIMAGE2.png';
import ALBUMIMAGE3 from './img/ALBUMIMAGE3.png';
import './Albums.scss';

const Albums = () => {
  return (
    <section className='albums'>
        <div className='albums_div'>
          <h2 className='albums_div_h2'>ÁLBUMES QUE REPRESENTAN FRERES</h2>
          <img className='albums_div_img' src={SPOTIFY}/>
        </div>
        <div className='albums_div'>
          <Album img={ALBUMIMAGE1} h3='DIGITAL DRUGLORD' link='https://open.spotify.com/album/0a8WSH44kA5hR4MQ6LyFDB' />
          <Album img={ALBUMIMAGE2} h3='EVERYTHING MEANS NOTHING' link='https://open.spotify.com/album/4UxlLk460BnmQlRV3WiORh' />
          <Album img={ALBUMIMAGE3} h3='TICKETS TO MY DOWNFALL' link='https://open.spotify.com/album/57lgFncHBYu5E3igZnuCJK' />
        </div>
    </section>
  );
}

export default Albums;