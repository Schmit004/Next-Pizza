import { create } from 'zustand';
import { CreateCartItemValues } from '@/services/dto/cart.dto';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
}

export const useCartStore = create<CartState>(() => ({
  items: [],
  error: false,
  loading: true,
  totalAmount: 0,

  addCartItem: async () => {},
}));
