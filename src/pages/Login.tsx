import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulamos login exitoso
    const fakeToken = 'jwt.fake.token';
    dispatch({ type: 'LOGIN', payload: { token: fakeToken, user: { email } } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-purple-900">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Iniciar <span className="text-teal-300">Sesión</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-400 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Ingresar
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-teal-300 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};
