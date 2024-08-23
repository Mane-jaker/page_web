import ItemCart from "../components/ItemCart"
import OrderSummary from "../components/OrderSummary";
import Image1 from '../assets/xiles.png';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);


  return (
    <section className="bg-white py-8 antialiased md:py-16 kaisei">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Carrito de Compras</h2>
          <button
            onClick={clearCart} 
            className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            <FaShoppingCart className="mr-2" />
            Limpiar Carrito
          </button>
        </div>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none">
            <div className="space-y-6">
              {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
              ) : (
                cart.map(item => (
                  <ItemCart
                    key={item.id}
                    image={Image1}
                    description={item.name}
                    initialQuantity={item.quantity}
                    price={item.price}
                    removeFromCart={removeFromCart}
                  />
                ))
              )}
              <ItemCart
                image={Image1}
                description="Salsa de Xile Morita con cacahuate a base de aceite de oliva, 275g."
                initialQuantity={2}
                price={200.00}
              />
              <ItemCart
                image={Image1}
                description="Salsa de Xile Morita con cacahuate a base de aceite de oliva, 275g."
                initialQuantity={2}
                price={200.00}
              />
            </div>
          </div>
          <OrderSummary />
        </div>
      </div>
    </section>
  );
}

export default Cart;
