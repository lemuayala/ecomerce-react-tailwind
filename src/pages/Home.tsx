import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-purple-900 animate-gradient-shift" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-purple-400">
            TECHSTORE
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Descubre los productos más innovadores con nuestro diseño de otro
          mundo.
        </p>
        <Link
          to="/products"
          className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all hover:shadow-lg hover:shadow-teal-400/20"
        >
          Explorar Productos
        </Link>
      </div>
    </div>
  );
};
