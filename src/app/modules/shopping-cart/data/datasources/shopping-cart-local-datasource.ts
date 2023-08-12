import { CacheError } from '../../../../core/errors/cache-error';
import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../../domain/models/cart-item';

export interface ShoppingCartLocalDatasource {
  getLastCart(): ShoppingCartItem[];
  saveCart(cartItems: ShoppingCartItem[]): void;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartLocalDatasourceImpl
  implements ShoppingCartLocalDatasource
{
  getLastCart(): ShoppingCartItem[] {
    try {
      const lastCart = localStorage.getItem('lastCart');
      return lastCart ? JSON.parse(lastCart) : [];
    } catch (_) {
      throw new CacheError('Error on getting last cart from localstorage.');
    }
  }

  saveCart(cartItems: ShoppingCartItem[]): void {
    localStorage.setItem('lastCart', JSON.stringify(cartItems));
  }
}
