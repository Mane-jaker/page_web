import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebaseConfig';

function LayoutPedidos() {
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const fetchPreferences = async () => {
      const querySnapshot = await getDocs(collection(db, 'preferences'));
      const preferencesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log('Fetched preferences:', preferencesList);
      setPreferences(preferencesList);
    };

    fetchPreferences();
  }, []);

  return (
    <main className="flex-grow p-4 ml-40 flex justify-center pt-20">
      <div className="overflow-x-auto w-3/4">
        <table className="w-full max-w-7xl text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4">Nombre Completo</th>
              <th scope="col" className="px-4 py-3">Destino</th>
              <th scope="col" className="px-4 py-3">Código Postal</th>
              <th scope="col" className="px-4 py-3">Dirección</th>
              <th scope="col" className="px-4 py-3">Calle</th>
              <th scope="col" className="px-4 py-3">Número</th>
              <th scope="col" className="px-4 py-3">Productos</th>
            </tr>
          </thead>
          <tbody>
            {preferences.map(preference => (
              <tr key={preference.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-4 py-4">{preference.userData?.nombreCompleto || 'N/A'}</td>
                <td className="px-4 py-3">{preference.userData?.destino || 'N/A'}</td>
                <td className="px-4 py-3">{preference.userData?.cp || 'N/A'}</td>
                <td className="px-4 py-3">{preference.userData?.direccion || 'N/A'}</td>
                <td className="px-4 py-3">{preference.userData?.calle || 'N/A'}</td>
                <td className="px-4 py-3">{preference.userData?.numero || 'N/A'}</td>
                <td className="px-4 py-3">
                  <ul>
                    {preference.cart?.map(item => (
                      <li key={item.id}>
                        {item.name} - {item.quantity} x ${item.price}
                      </li>
                    )) || 'N/A'}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default LayoutPedidos;