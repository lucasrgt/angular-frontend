import { Inject, Injectable } from '@angular/core';
import { ShoppingCartLocalDatasource } from '../datasources/shopping-cart-local-datasource';
import { ShoppingCartItem } from '../../domain/models/cart-item';
import { ShoppingCartRepository } from '../../domain/repositories/shopping-cart-repository';
import { SHOPPING_CART_LOCAL_DATASOURCE_TOKEN } from '../tokens/shopping-cart.tokens';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartRepositoryImpl implements ShoppingCartRepository {
  constructor(
    @Inject(SHOPPING_CART_LOCAL_DATASOURCE_TOKEN)
    private readonly localDatasource: ShoppingCartLocalDatasource
  ) {}

  getLastCart(): ShoppingCartItem[] {
    return this.localDatasource.getLastCart();
  }

  saveCart(cartItems: ShoppingCartItem[]): void {
    this.localDatasource.saveCart(cartItems);
  }
}
