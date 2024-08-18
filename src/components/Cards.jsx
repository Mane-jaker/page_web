import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/xiles.png"
import { useEffect } from 'react';

function Cards() {

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
    <Link to="/product/1">
    <Card
      className="max-w-sm transform transition-transform duration-300 hover:scale-105"
      imgAlt="Xiles mi abuelita img"
      imgSrc= {Image}
    >
      <a href="#">
        <h5 className="text-lg kaisei  font-bold text-center text-gray-900 dark:text-white">
          Salsa de Xile Morita con cacahuate a base de aceite de oliva, 275g.        
        </h5>
      </a>
      <p className="text-center text-xl text-gray-700 dark:text-gray-300 ">
        $200.00
      </p>
    </Card>
    </Link>
  );
}

export default Cards