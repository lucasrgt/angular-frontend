import { ShoppingCartItem } from '../models/cart-item';

export interface ShoppingCartRepository {
  getLastCart(): ShoppingCartItem[];
  saveCart(cartItems: ShoppingCartItem[]): void;
}
