import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './components/firebaseConfig'; // Asegúrate de tener la configuración de Firebase
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando...</div>; // Puedes poner un spinner aquí
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Ruta principal con Header y Footer */}
            <Route
              path="*"
              element={
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <main className="flex-grow p-4">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/product/:id" element={<Product />} />
                      <Route path="/cart" element={<Cart />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />
            {/* Ruta para el Dashboard con protección */}
            <Route 
              path="/admin" 
              element={user ? <Dashboard /> : <Login />} 
            />
          </Routes>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;


