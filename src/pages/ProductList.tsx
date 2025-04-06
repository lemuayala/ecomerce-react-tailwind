import { useCart } from '../hooks/useCart';
import { Product } from '../types/cart.types';

const mockProducts: Product[] = [
  { id: '1', name: 'Laptop', price: 999, image: '/laptop.jpg' },
  { id: '2', name: 'Smartphone', price: 699, image: '/phone.jpg' },
];

export const ProductList = () => {
  const { dispatch } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Nuestros <span className="text-teal-300">Productos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-teal-400/10 transition-all"
            >
              <div className="p-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-teal-300 text-2xl font-bold my-3">
                  ${product.price}
                </p>
                <button
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: product })
                  }
                  className="w-full bg-gradient-to-r from-teal-400 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
