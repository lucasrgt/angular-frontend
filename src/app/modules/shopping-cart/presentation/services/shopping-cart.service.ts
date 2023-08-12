import { Injectable } from '@angular/core';
import { GetLastCart } from '../../domain/usecases/get-last-cart';
import { SaveCart } from '../../domain/usecases/save-cart';
import { ShoppingCartItem } from '../../domain/models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(
    private readonly getLastCartUsecase: GetLastCart,
    private readonly saveCartUsecase: SaveCart
  ) {}

  getLastCart() {
    this.getLastCartUsecase.call();
  }

  saveCart(cartItems: ShoppingCartItem[]) {
    this.saveCartUsecase.call(cartItems);
  }
}
