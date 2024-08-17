import Cards from "../components/Cards";

function Home() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="font-bold kaisei text-center text-4xl">Productos</h1>
      <div className="mt-4 flex flex-wrap justify-center gap-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <h1 id="informacion" className="font-bold kaisei text-center text-4xl">Informacion</h1>
    </div>
  );
}

export default Home;