import { Button, Card } from "flowbite-react";
import Image from "../assets/xiles.png"

function Cards() {

  return (
    <Card
      className="max-w-sm kaisei"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc= {Image}
    >
      <a href="#">
        <h5 className="text-lg font-medium text-center text-gray-900 dark:text-white">
          Salsa de Xile Morita con cacahuate a base de aceite de oliva, 275g.        
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">$599</span>
        <Button color={"light"}>Add to Cart</Button>
      </div>
    </Card>
  );
}

export default Cards