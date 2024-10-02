import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/firebaseConfig";

function OrderSummary({ cart, preferenceId }) {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    destino: "",
    cp: "",
    direccion: "",
    calle: "",
    numero: "",
    nombreCompleto: ""
  });

  useEffect(() => {
    initMercadoPago(import.meta.env.VITE_PUBLIC_kEY_MERCADOPAGO, {
      locale: "es-MX",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePayment = async () => {
    await addDoc(collection(db, "preferences"), {
      cart,
      preferenceId,
      createdAt: new Date(),
      userData
    });
    window.location.href = preferenceId;
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
            onClick={() => setIsUserModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
          >
            Confirmar Datos y Proceder al Pago
          </button>
        )}
      </div>
      {isUserModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg w-1/2 max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl font-medium mb-4">Datos del Usuario</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Destino
                </label>
                <input
                  type="text"
                  name="destino"
                  value={userData.destino}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Código Postal
                </label>
                <input
                  type="text"
                  name="cp"
                  value={userData.cp}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={userData.direccion}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Calle
                </label>
                <input
                  type="text"
                  name="calle"
                  value={userData.calle}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Número
                </label>
                <input
                  type="text"
                  name="numero"
                  value={userData.numero}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombreCompleto"
                  value={userData.nombreCompleto}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handlePayment}
                  className="px-6 py-3 bg-green-500 text-white rounded"
                >
                  Pagar con MercadoPago
                </button>
                <button
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-6 py-3 bg-gray-500 text-white rounded"
                >
                  Cancelar
                </button>
              </div>    
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;