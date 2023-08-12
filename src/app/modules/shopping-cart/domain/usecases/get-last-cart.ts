import { ShoppingCartRepository } from '../repositories/shopping-cart-repository';
import { ShoppingCartItem } from '../models/cart-item';
import { Inject, Injectable } from '@angular/core';
import { SHOPPING_CART_REPOSITORY_TOKEN } from '../../data/tokens/shopping-cart.tokens';

@Injectable({
  providedIn: 'root',
})
export class GetLastCart {
  constructor(
    @Inject(SHOPPING_CART_REPOSITORY_TOKEN)
    private readonly repository: ShoppingCartRepository
  ) {}

  call(): ShoppingCartItem[] {
    return this.repository.getLastCart();
  }
}
