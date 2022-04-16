import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import images from './ImportImages';
import './Slider.scss';

const Slider = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel:any = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 10);
  }, []);

  return (
    <section className='slider'>
      <motion.div
        className='slider_container' 
        drag='x' 
        ref={carousel} 
        whileTap={{cursor: "grabbing"}}
        dragConstraints={{right: 0, left: -width}}> 
          {images.map((image:any, index:number) => 
            <motion.div className='slider_container_div' key={index}>
              <img src={image} className='slider_container_div_img' alt="Imágen de modelo Freres"/>
            </motion.div>)}
      </motion.div>
    </section>
  );
}

export default Slider;

