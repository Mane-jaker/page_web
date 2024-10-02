import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Pending() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const hasProcessedRef = useRef(false);

  useEffect(() => {
    const handlePaymentPending = () => {
      alert("Tu pago está pendiente. Por favor, espera un momento.");
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    };

    if (!hasProcessedRef.current) {
      handlePaymentPending();
      hasProcessedRef.current = true;
    }
  }, [clearCart, navigate]);

  return (
    <div>
      <h1>Pago Pendiente</h1>
      <p>Tu pago está pendiente. Por favor, espera un momento.</p>
    </div>
  );
}

export default Pending;