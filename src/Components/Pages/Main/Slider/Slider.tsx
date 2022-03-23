import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import images from './ImportImages';
import './Slider.scss';

const Slider = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel:any = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className='slider'>
      <motion.div className='slider_container' ref={carousel} drag='x' dragConstraints={{right: 0, left: -width}} whileTap={{cursor: "grabbing"}}>
        {images.map((image:any) => <motion.div className='slider_container_div'><img src={image} className='slider_container_div_img'/></motion.div>)}
      </motion.div>
    </section>
  );
}

export default Slider;

