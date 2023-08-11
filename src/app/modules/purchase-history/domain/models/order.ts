import { ShoppingCartItem } from '../../../shopping-cart/domain/models/cart-item';

export type Order = {
  id: number;
  items: ShoppingCartItem[];
  finalPrice: number;
};
