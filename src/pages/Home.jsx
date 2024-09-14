import { useContext, useEffect, useRef } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Cards from "../components/Cards";
import ImgHamburguesa from "../assets/hamburguesa.png";
import ImgPapas from "../assets/papas.png";

function Home() {
  const { products } = useContext(ProductsContext);

  const imgHamburguesaRef = useRef(null);
  const imgPapasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.style.overflow = 'hidden';
            entry.target.scrollIntoView({ block: 'center' });
            setTimeout(() => {
              entry.target.classList.add('animate-slideIn');
              document.body.style.overflow = 'auto';
              observer.unobserve(entry.target);
            }, 400); // Ajusta el tiempo según sea necesario
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imgHamburguesaRef.current) {
      observer.observe(imgHamburguesaRef.current);
    }
    if (imgPapasRef.current) {
      observer.observe(imgPapasRef.current);
    }

    return () => {
      if (imgHamburguesaRef.current) {
        observer.unobserve(imgHamburguesaRef.current);
      }
      if (imgPapasRef.current) {
        observer.unobserve(imgPapasRef.current);
      }
    };
  }, []);

  // Filtrar productos con cantidad mayor a 0
  const availableProducts = products.filter(product => product.stock > 0);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="font-bold kaisei text-center text-4xl">Productos</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8 min-h-screen">
        {availableProducts.map((product, index) => (
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
      <h1 className="font-bold kaisei text-center text-4xl">Informacion</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8">
        <img
          src={ImgHamburguesa}
          alt="Hamburguesa"
          className="w-full opacity-0"
          ref={imgHamburguesaRef}
        />
        <img
          src={ImgPapas}
          alt="Papas"
          className="w-full opacity-0"
          ref={imgPapasRef}
        />
      </div>
    </div>
  );
}

export default Home;