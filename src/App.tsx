import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Cart } from './pages/Cart';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
