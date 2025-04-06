export interface User {
  email: string;
  name?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export type AuthAction =
  | { type: 'LOGIN'; payload: { token: string; user: User } }
  | { type: 'LOGOUT' };
