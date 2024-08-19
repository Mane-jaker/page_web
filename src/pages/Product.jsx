import { useContext, useState } from 'react';
import BreadCrumb from "../components/BreadCrumb";
import { ProductsContext } from "../components/ContextProvider";
import { useParams } from 'react-router-dom';
import Carousels from '../components/Carousel';

function Product() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(product.stock, parseInt(e.target.value)));
    setQuantity(value);
  };

  if (!product) {
    return (
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 space-y-6">
        <div className="w-full">
          <BreadCrumb name={product.name}/>
        </div>
        <h1 className="font-bold kaisei text-6xl py-44">Producto no disponible</h1>
        <h1 className="font-bold kaisei text-4xl">Productos recomendados</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-8">
          <Carousels />
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 space-y-6">
      <div className="w-full">
        <BreadCrumb name={product.name}/>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 pr-2">
          <img src={product.image} alt="Xiles" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 pl-2 space-y-6">
          <h1 className="font-bold kaisei text-2xl">{product.name}</h1>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg">Precio:</h1>
            <p className="text-lg text-orange-500">{product.price}</p>
          </div>
          <h1 className="text-lg">Cont. Neto. {product.quantity}</h1>
          <div className="space-y-1">
            <h1 className="text-xs kaisei font-bold">Cantidad :</h1>
            <input
              type="number"
              className="px-2 py-1 w-24 h-8 bg-gray-200 border-transparent"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div>
            <p>
              {product.description}
            </p>
          </div>
          <button className="bg-black hover:bg-gray-700 text-white py-3 px-4 text-sm">
            Agregar al carrito
          </button>
        </div>
      </div>
      <h1 className="font-bold kaisei text-4xl">Productos</h1>
        <Carousels />
    </div>
  );
}

export default Product;