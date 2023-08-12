import { ShoppingCartRepository } from '../repositories/shopping-cart-repository';
import { ShoppingCartItem } from '../models/cart-item';
import { Inject } from '@angular/core';
import { SHOPPING_CART_REPOSITORY_TOKEN } from '../../data/tokens/shopping-cart.tokens';

export class SaveCart {
  constructor(
    @Inject(SHOPPING_CART_REPOSITORY_TOKEN)
    private readonly repository: ShoppingCartRepository
  ) {}

  call(cartItems: ShoppingCartItem[]) {
    this.repository.saveCart(cartItems);
  }
}
