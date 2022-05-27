import React, { useEffect, useState } from 'react';
import { ProductModel } from '../../../Context/CartContext';
import { motion } from 'framer-motion';
import './ProductPanel.scss';

interface ProductPanelProps{
    title: string;
    text: string;
    product: ProductModel;
}

const ProductPanel = ({title, text, product}: ProductPanelProps) => {
    const [showText, setShowText] = useState<boolean>(false);

    const handleShowtext = () => setShowText(!showText);

    useEffect(() => {
        setShowText(false)
    }, [product])

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-5%" },
    }

    return (
      <div className='productPanel'>
          <div className='productPanel_principal' onClick={handleShowtext}>
              <h4 className='productPanel_principal_h4'>{title}</h4>
              <span className={`productPanel_principal_button ${showText ? 'fa fa-chevron-up' : 'fa fa-plus'}`} />
          </div>
          <motion.div
            animate={showText ? "open" : "closed"}
            variants={variants}>
            <div className={`productPanel_secondary ${showText && 'show'}`}>
                <p className='productPanel_secondary_p'>{text}</p>
            </div>
          </motion.div>
      </div>
    );
}

export default ProductPanel;