import { createContext, ReactNode, useReducer } from 'react';
import { CartState, CartAction } from '../types/cart.types';
import { cartReducer, loadInitialState } from './cartReducer';

type CartContextType = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, loadInitialState());

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
