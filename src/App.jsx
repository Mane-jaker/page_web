import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Ruta principal con Header y Footer */}
            <Route
              path="/"
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
            {/* Ruta para el Dashboard con su propio Header y Footer */}
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;

