import { useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Failure() {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const hasProcessedRef = useRef(false);

  useEffect(() => {
    const handlePaymentFailure = () => {
      alert("Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo.");
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    };

    if (!hasProcessedRef.current) {
      handlePaymentFailure();
      hasProcessedRef.current = true;
    }
  }, [clearCart, navigate]);

  return (
    <div>
      <h1>Pago Fallido</h1>
      <p>Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo.</p>
    </div>
  );
}

export default Failure;