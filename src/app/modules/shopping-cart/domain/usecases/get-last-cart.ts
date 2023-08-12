import { ShoppingCartRepository } from '../repositories/shopping-cart-repository';
import { ShoppingCartItem } from '../models/cart-item';

export class GetLastCart {
  constructor(private readonly repository: ShoppingCartRepository) {}

  call(): ShoppingCartItem[] {
    return this.repository.getLastCart();
  }
}
