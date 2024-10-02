import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { db } from "../components/firebaseConfig";
import { doc, updateDoc, increment, getDoc } from "firebase/firestore";

function Success() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const hasProcessedRef = useRef(false);

  console.log("Renderizando componente Success");

  useEffect(() => {
    const handlePaymentSuccess = async () => {
      try {
        for (const item of cart) {

          const itemRef = doc(db, 'products', item.id);
          const itemSnapshot = await getDoc(itemRef);
          const currentStock = itemSnapshot.data().stock;

          if (currentStock >= item.quantity) {
            await updateDoc(itemRef, {
              stock: increment(-item.quantity)
            });
            console.log(`Stock actualizado para ${item.id}: ${currentStock - item.quantity}`);
          } else {
            console.error(`Stock insuficiente para el producto ${item.id}`);
            alert(`Stock insuficiente para el producto ${item.name}. No se pudo completar la compra.`);
            return;
          }
        }
        clearCart();
        navigate("/");
      } catch (error) {
        console.error("Error updating stock:", error);
        alert("Hubo un error al actualizar el stock. Por favor, inténtalo de nuevo.");
      }
    };

    if (!hasProcessedRef.current) {
      handlePaymentSuccess();
      hasProcessedRef.current = true;
    }
  }, [cart, clearCart, navigate]);

  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>Redirigiendo a la página de inicio...</p>
    </div>
  );
}

export default Success;