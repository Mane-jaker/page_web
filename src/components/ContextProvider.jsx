import { createContext, useState, useEffect } from 'react';
import image from '../assets/xiles.png';
import PropTypes from 'prop-types';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
      const simulatedData = [
        {
          id: 1,
          image: image,
          name: "Salsa de Xile Morita con cacahuate a base de aceite de oliva",
          stock: 10,
          quantity: "275g",
          price: "$200.00",
          description: "The best tote bag in the world! Fits a gigantic shop, keeps your phone and keys out of your tomatoes, has soft wide straps to make it a dream to carry, and even has a wine bottle loop. And it makes you look like a style legend even in your joggers. You’ll never want to go out without it. Also available in our Blood Orange design. Heavyweight 100% organic cotton natural canvas tote bag. Inside features: bottle loop and two pockets for phone / wallet. Gusseted."
        },
        {
          id: 2,
          image: image,
          name: "Salsa de Xile Morita con cacahuate a base de aceite de oliva",
          stock: 5,
          quantity: "500g",
          price: "$350.00",
          description: "The best tote bag in the world! Fits a gigantic shop, keeps your phone and keys out of your tomatoes, has soft wide straps to make it a dream to carry, and even has a wine bottle loop. And it makes you look like a style legend even in your joggers. You’ll never want to go out without it. Also available in our Blood Orange design. Heavyweight 100% organic cotton natural canvas tote bag. Inside features: bottle loop and two pockets for phone / wallet. Gusseted."
        },
        {
          id: 3,
          image: image,
          name: "Salsa de Xile Morita con cacahuate a base de aceite de oliva",
          stock: 20,
          quantity: "300g",
          price: "$600.00",
          description: "The best tote bag in the world! Fits a gigantic shop, keeps your phone and keys out of your tomatoes, has soft wide straps to make it a dream to carry, and even has a wine bottle loop. And it makes you look like a style legend even in your joggers. You’ll never want to go out without it. Also available in our Blood Orange design. Heavyweight 100% organic cotton natural canvas tote bag. Inside features: bottle loop and two pockets for phone / wallet. Gusseted."
        },
        {
          id: 4,
          image: image,
          name: "Salsa de Xile Morita con cacahuate a base de aceite de oliva",
          stock: 20,
          quantity: "300g",
          price: "$5500.00",
          description: "The best tote bag in the world! Fits a gigantic shop, keeps your phone and keys out of your tomatoes, has soft wide straps to make it a dream to carry, and even has a wine bottle loop. And it makes you look like a style legend even in your joggers. You’ll never want to go out without it. Also available in our Blood Orange design. Heavyweight 100% organic cotton natural canvas tote bag. Inside features: bottle loop and two pockets for phone / wallet. Gusseted."
        }
      ];

      setProducts(simulatedData);
    
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};