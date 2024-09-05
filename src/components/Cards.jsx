import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import img from '../assets/xiles.png';

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

function Cards({ id, name, quantity, price }) {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div key={id}>
      <Link to={`/product/${id}`}>
        <Card
          className="max-w-sm transform transition-transform duration-300 hover:scale-105"
          imgAlt="Xiles mi abuelita img"
          imgSrc={img}
        >
          <h5 className="text-lg kaisei  font-bold text-center text-gray-900 dark:text-white">
            {name}, {quantity}g
          </h5>
          <p className="text-center text-xl text-gray-700 dark:text-gray-300 ">
            ${price}.00
          </p>
        </Card>
      </Link>
    </div>
  );
}

export default Cards