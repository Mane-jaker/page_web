import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Success from './pages/Success';
import Failure from './pages/Failure';
import Pending from './pages/Pending';
import LayoutPedidos from './components/LayoutPedidos';
import LayoutDashboard from './components/LayoutDashboard';

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
    return <div>Cargando...</div>; 
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
                      <Route path="/success" element={<Success />} />
                      <Route path="/failure" element={<Failure />} />
                      <Route path="/pending" element={<Pending />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />
            <Route 
              path="/admin" 
              element={user ? <Dashboard /> : <Login />} 
            >
              <Route path="dashboard" element={<LayoutDashboard />} />
              <Route path="pedidos" element={<LayoutPedidos />} />
              <Route index element={<Navigate to="dashboard" />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );  
}

export default App;


