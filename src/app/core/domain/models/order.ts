import { ShoppingCartItem } from './cart-item';

export type Order = {
  id: number;
  items: ShoppingCartItem[];
  finalPrice: number;
};
