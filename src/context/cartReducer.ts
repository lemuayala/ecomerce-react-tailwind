import { CartState, CartAction } from '../types/cart.types';

const loadInitialState = (): CartState => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { items: [] };
};

export const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = {
        ...action.payload,
        cartId: Date.now().toString(),
      };
      return { ...state, items: [...state.items, newItem] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload), // Filtra por cartId
      };
    default:
      return state;
  }
};

export { loadInitialState };
