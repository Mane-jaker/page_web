import { useContext, useEffect, useRef } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Cards from "../components/Cards";

function Home() {
  const { products } = useContext(ProductsContext);

  const imgHamburguesaRef = useRef(null);
  const imgPapasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.style.overflow = "hidden";
            entry.target.scrollIntoView({ block: "center" });
            setTimeout(() => {
              entry.target.classList.add("animate-slideIn");
              document.body.style.overflow = "auto";
              observer.unobserve(entry.target);
            }, 400);
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
  const availableProducts = products.filter((product) => product.stock > 0);

  const values = [
    "El sabor es un vínculo que une almas alrededor de una mesa.",
    "Creemos que las ideas más inusuales, trascienden el tiempo y el espacio.",
    "Transformamos productos tradicionales, en experiencias únicas.",
    "Fomentamos el espíritu emprendedor desde una edad temprana, brindando a niños y jóvenes el aprendizaje a través de la experiencia, lo que creemos, rompe barreras ",
    "La curiosidad permitirá que experimentes con lo que tienes en la mesa, expande las ideas.",
    "La familia y la comunidad son el motor de la empresa.",
    "El compartir está integrado en nuestras venas.",
    "La comunidad es un síntoma del movimiento.",
    "La estimulación de los sentidos es vital para la expansión neuronal.",
    "El espectro del vivir es extenso, colaborar con corporativos hasta patrocinar una fiesta en un desierto.",
    "No existe línea entre el artista y el espectador, si compartes el sentir, te vuelves uno con la pieza. Tu eres el sabor de xiles de mi abuela.",
    "Creemos que el amor familiar es fundamental para el éxito."
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="font-bold kaisei text-center text-4xl">Productos</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8 min-h-screen">
        {availableProducts.map((product, index) => (
          <Cards
            key={index}
            id={product.id}
            image={product.imageUrl}
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>

      <h1 className="font-bold kaisei text-center text-4xl font-monster mt-12">Valores</h1>

      <div className="mt-4 flex flex-wrap justify-center gap-8 min-h-screen">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg text-center transition transform hover:scale-105 hover:bg-gray-200 hover:shadow-xl"
          >
            <p className="text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
