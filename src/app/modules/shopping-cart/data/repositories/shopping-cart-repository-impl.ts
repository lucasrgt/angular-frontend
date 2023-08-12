import { Injectable } from '@angular/core';
import { ShoppingCartLocalDatasource } from '../datasources/shopping-cart-local-datasource';
import { ShoppingCartItem } from '../../domain/models/cart-item';
import { ShoppingCartRepository } from '../../domain/repositories/shopping-cart-repository';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartRepositoryImpl implements ShoppingCartRepository {
  constructor(private readonly localDatasource: ShoppingCartLocalDatasource) {}

  getLastCart(): ShoppingCartItem[] {
    return this.localDatasource.getLastCart();
  }

  saveCart(cartItems: ShoppingCartItem[]): void {
    this.localDatasource.saveCart(cartItems);
  }
}
