import { Link } from 'react-router-dom';
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';

export const Navbar = () => {
  const { state } = useCart();
  const cartItems = state.items.map((item) => item.name);

  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-600"
          >
            TECHSTORE
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
            <Link to="/cart" className="relative p-2 group">
              <FiShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-br from-teal-400 to-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
