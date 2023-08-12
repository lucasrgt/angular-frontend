import { ShoppingCartRepository } from '../repositories/shopping-cart-repository';
import { ShoppingCartItem } from '../models/cart-item';

export class SaveCart {
  constructor(private readonly repository: ShoppingCartRepository) {}

  call(cartItems: ShoppingCartItem[]) {
    this.repository.saveCart(cartItems);
  }
}
