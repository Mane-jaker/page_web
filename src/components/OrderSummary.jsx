import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect } from "react";

function OrderSummary({ cart, preferenceId, onPaymentSuccess }) {
  useEffect(() => {
    initMercadoPago(import.meta.env.VITE_PUBLIC_kEY_MERCADOPAGO, {
      locale: "es-MX",
    });
  }, []); 

  const handlePayment = () => {
    // Lógica para manejar el pago
    window.location.href = preferenceId;
    // Llamar a la función de callback después de redirigir al usuario
    onPaymentSuccess();
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 0; // Puedes calcular el descuento aquí si es necesario
  const shipping = 0; // Puedes ajustar el costo de envío aquí
  const taxRate = 0;
  const tax = subtotal * taxRate;
  const total = subtotal - discount + shipping + tax;

  console.log("preferenceId", preferenceId);

  return (
    <div className="mx-auto mt-10 justify-end flex space-y-6 lg:w-full">
      <div className="space-y-4 rounded-lg border w-full border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:w-1/4">
        <p className="text-xl font-semibold text-gray-900">
          Resumen del pedido
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">Subtotal</dt>
              <dd className="text-base font-medium text-gray-900">
                ${subtotal.toFixed(2)}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500">IVA 16%</dt>
              <dd className="text-base font-medium text-gray-900">
                ${tax.toFixed(2)}
              </dd>
            </dl>
          </div>
          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
            <dt className="text-base font-bold text-gray-900">Total</dt>
            <dd className="text-base font-bold text-gray-900">
              ${total.toFixed(2)}
            </dd>
          </dl>
        </div>
        {preferenceId && (
        <button
          onClick={handlePayment}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
        >
          Pagar con MercadoPago
        </button>
      )}
      </div>
    </div>
  );
}

export default OrderSummary;