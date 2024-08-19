import { Carousel } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../components/ContextProvider";
import Cards from "../components/Cards";

function Carousels() {
    const { products } = useContext(ProductsContext);
    const [chunkSize, setChunkSize] = useState(getChunkSize());

    function getChunkSize() {
        if (window.innerWidth >= 1024) {
            return 3;
        } else if (window.innerWidth >= 768) { 
            return 2;
        } else { 
            return 1;
        }
    }

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    useEffect(() => {
        const handleResize = () => {
            setChunkSize(getChunkSize());
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const productChunks = chunkArray(products, chunkSize);

    return (
        <div className="grid h-[700px] grid-cols-1">
            <Carousel slide={false}>
                {productChunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="flex space-x-12">
                        {chunk.map(product => (
                            <Cards
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}
                                description={product.description}
                            />
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Carousels;

