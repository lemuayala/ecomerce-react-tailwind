import {
  createContext,
  ReactNode,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { AuthState, AuthAction } from '../types/auth.types';

// Estado inicial
const initialState: AuthState = {
  user: null,
  token: null,
};

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

// Contexto
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Opcional: Recuperar token al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Aquí podrías validar el token con una API
      dispatch({
        type: 'LOGIN',
        payload: { token, user: { email: 'user@example.com' } },
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
