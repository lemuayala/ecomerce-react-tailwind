export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  cartId?: string;
}

export interface CartState {
  items: Product[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string };
