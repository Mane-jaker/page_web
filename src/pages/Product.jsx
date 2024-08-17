import BreadCrumb from "../components/BreadCrumb";
import Image from "../assets/xiles.png"

function Product() {
  return (
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 space-y-6">
      <div className="w-full">
        <BreadCrumb />
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 pr-2">
          <img src={Image} alt="Xiles" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 pl-2 space-y-6">
          <h1 className="font-bold kaisei text-2xl">Salsa de Xile Morita con cacahuate a base de aceite de oliva.</h1>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg">Precio:</h1>
            <p className="text-lg text-orange-500">$200.00</p>
          </div>
          <button className="bg-black hover:bg-gray-700 text-white py-3 px-4 text-sm">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;