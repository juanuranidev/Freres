import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ProductModel } from '../../../Context/CartContext';
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

    return (
      <div className='productPanel'>
            <div className='productPanel_principal' onClick={handleShowtext}>
                <h4 className='productPanel_principal_h4'>{title}</h4>
                <span className={`productPanel_principal_button fas fa-angle-${showText ? 'down' : 'right'}`} />
            </div>
            <AnimatePresence>
                {showText && (
                    <motion.div
                        initial={{ opacity: 0, y: "-5%"}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-5%" }}
                        transition={{ type: "linear", stiffness: 100 }}>
                        <div className={`productPanel_secondary ${showText && 'show'}`}>
                            <p className='productPanel_secondary_p'>{text}</p>
                        </div>
                    </motion.div>)}
            </AnimatePresence>
      </div>
    );
}

export default ProductPanel;