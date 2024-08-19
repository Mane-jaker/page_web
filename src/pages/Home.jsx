import { useContext } from "react";
import { ProductsContext } from "../components/ContextProvider";
import Cards from "../components/Cards";

function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="font-bold kaisei text-center text-4xl">Productos</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <Cards
            key={index}
            id={product.id}
            image={product.image}
            name={product.name}
            quantity={product.quantity} 
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;