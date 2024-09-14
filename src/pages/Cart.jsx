import ItemCart from "../components/ItemCart";
import OrderSummary from "../components/OrderSummary";
import Image1 from "../assets/xiles.png";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import { FaShoppingCart } from "react-icons/fa";
import { db } from "../components/firebaseConfig";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function Cart() {
  const { cart, removeFromCart, clearCart, updateCartItemQuantity } =
    useContext(CartContext);
  const [inventory, setInventory] = useState({});
  const [preferenceId, setPreferenceId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchInventory = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const inventoryData = {};
      querySnapshot.forEach((doc) => {
        inventoryData[doc.id] = doc.data().stock;
      });
      setInventory(inventoryData);
    };

    fetchInventory();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const createPreference = async () => {
        const items = cart.map((item) => ({
          title: item.name,
          unit_price: Number(item.price),
          quantity: item.quantity,
        }));

        const preferenceProduct = {
          items,
          back_urls: {
            success: "http://localhost:5173/",
            failure: "http://localhost:5173/",
            pending: "http://localhost:5173/",
          },
          auto_return: "approved",
          payment_methods: {
            excluded_payment_types: [
              { id: "ticket" }, 
              { id: "atm" } 
            ],
            excluded_payment_methods: [
              { id: "amex" } 
            ],
            installments: 1 
          }
        };

        try {
          const response = await fetch(
            "https://api.mercadopago.com/checkout/preferences",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${
                  import.meta.env.VITE_ACCESS_TOKEN_MERCADOPAGO
                }`,
              },
              body: JSON.stringify(preferenceProduct),
            }
          );

          console.log("Response:", response);

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Error creating preference:", errorData);
            setErrorMessage("Error creating preference: " + errorData.message);
            return;
          }

          const responseText = await response.text();
          if (!responseText) {
            console.error("Error: Empty response body");
            setErrorMessage("Error: Empty response body");
            return;
          }

          const data = JSON.parse(responseText);
          const preferenceId = data.init_point;

          if (!preferenceId) {
            console.error("Error: preferenceId is undefined");
            setErrorMessage("Error: preferenceId is undefined");
            return;
          }

          await addDoc(collection(db, "preferences"), {
            cart,
            preferenceId,
            createdAt: new Date(),
          });

          setPreferenceId(preferenceId);
        } catch (error) {
          console.error("Error creating preference:", error);
          setErrorMessage("Error creating preference: " + error.message);
        }
      };

      createPreference();
    }
  }, [cart]);

  const handleIncrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity < inventory[itemId]) {
      updateCartItemQuantity(itemId, item.quantity + 1);
    } else {
      alert(
        `Solo puedes pedir hasta ${inventory[itemId]} unidades de este producto.`
      );
    }
  };

  const handleDecrementQuantity = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(itemId, item.quantity - 1);
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      for (const item of cart) {
        const itemRef = doc(db, 'products', item.id);
        await updateDoc(itemRef, {
          stock: increment(-item.quantity)
        });
      }
      clearCart();
      alert("Pago exitoso y stock actualizado!");
    } catch (error) {
      console.error("Error updating stock:", error);
      setErrorMessage("Error updating stock: " + error.message);
    }
  };

  return (
    <section className="bg-white py-8 antialiased md:py-16 kaisei">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Carrito de Compras
          </h2>
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
                cart.map((item) => (
                  <ItemCart
                    key={item.id}
                    image={Image1}
                    description={item.name}
                    initialQuantity={item.quantity}
                    price={item.price}
                    removeFromCart={() => removeFromCart(item.id)}
                    inventory={inventory[item.id] || 0} // Pasar la cantidad de inventario
                    incrementQuantity={() => handleIncrementQuantity(item.id)}
                    decrementQuantity={() => handleDecrementQuantity(item.id)}
                  />
                ))
              )}
            </div>
          </div>
          {cart.length > 0 && preferenceId && (
            <OrderSummary cart={cart} preferenceId={preferenceId} onPaymentSuccess={handlePaymentSuccess} />
          )}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
}

export default Cart;