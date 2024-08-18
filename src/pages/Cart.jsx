import ItemCart from "../components/ItemCart"
import OrderSummary from "../components/OrderSummary";

function Cart() {
  return (
    <section className="bg-white py-8 antialiased md:py-16 kaisei">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Carrito de Compras</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none">
            <div className="space-y-6">
              <ItemCart />
            </div>
          </div>
          <OrderSummary /> 
        </div>
      </div>
    </section>
  );
}

export default Cart;
