import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const Profile = () => {
  const { state } = useAuth();

  if (!state.token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 py-32 px-4">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          Hola, <span className="text-teal-300">{state.user?.email}</span>
        </h2>
        <p className="text-gray-300">Esta es tu área personal.</p>
      </div>
    </div>
  );
};
