import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProductPanel.scss';

interface ProductPanelProps{
    title: string;
    text: string;
}

const ProductPanel = ({title, text}: ProductPanelProps) => {
    const [showText, setShowText] = useState<boolean>(false);

    const handleShowtext = () => setShowText(!showText);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-5%" },
    }

    return (
      <div className='productPanel'>
          <div className='productPanel_principal' onClick={handleShowtext}>
              <h4 className='productPanel_principal_h4'>{title}</h4>
              <span className={showText ?'fa fa-chevron-up productPanel_principal_button' :'fa fa-plus productPanel_principal_button'} />
          </div>
          <motion.div
            animate={showText ? "open" : "closed"}
            variants={variants}>
            <div className={showText===true ?'productPanel_secondary show' :'productPanel_secondary'}>
                <p className='productPanel_secondary_p'>{text}</p>
            </div>
          </motion.div>
      </div>
    );
}

export default ProductPanel;