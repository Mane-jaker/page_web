import BreadCrumb from "../components/BreadCrumb";
import Image from "../assets/xiles.png"
import Cards from "../components/Cards";

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
          <h1 className="text-lg">Cont. Neto. 275g</h1>
          <div className="space-y-1">
            <h1 className="text-xs kaisei font-bold">Cantidad :</h1>
            <input type="number" className="px-2 py-1 w-24 h-8 bg-gray-200 border-transparent" />
          </div>
          <div>
            <p>
              The best tote bag in the world! Fits a gigantic shop, keeps your phone and keys out of your tomatoes, has soft wide straps to make it a dream to carry, and even has a wine bottle loop. And it makes you look like a style legend even in your joggers. You’ll never want to go out without it. Also available in our Blood Orange design.
              Heavyweight 100% organic cotton natural canvas tote bag.
              Inside features: bottle loop and two pockets for phone / wallet. Gusseted.
            </p>
          </div>
          <button className="bg-black hover:bg-gray-700 text-white py-3 px-4 text-sm">
            Agregar al carrito
          </button>
        </div>
      </div>
      <h1 className="font-bold kaisei  text-4xl">Productos</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Product;