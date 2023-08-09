import { Product } from './product';

export type ShoppingCartItem = {
  id: number;
  product: Product;
  quantity: number;
};
