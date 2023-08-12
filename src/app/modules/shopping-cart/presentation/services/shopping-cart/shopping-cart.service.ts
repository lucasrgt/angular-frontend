import { Injectable } from '@angular/core';
import { GetLastCart } from '../../../domain/usecases/get-last-cart';
import { SaveCart } from '../../../domain/usecases/save-cart';
import { ShoppingCartItem } from '../../../domain/models/cart-item';
import {
  selectShoppingCartItems,
  selectTotalPrice,
} from '../../store/selectors/shopping-cart.selectors';
import { Observable, take } from 'rxjs';
import {
  completePurchase,
  loadCart,
} from '../../store/actions/shopping-cart.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  finalPrice$: Observable<number>;

  constructor(
    private readonly getLastCartUsecase: GetLastCart,
    private readonly saveCartUsecase: SaveCart,
    private readonly store: Store
  ) {
    this.finalPrice$ = this.store.select(selectTotalPrice);
  }

  getLastCart(): ShoppingCartItem[] {
    return this.getLastCartUsecase.call();
  }

  saveCart(cartItems: ShoppingCartItem[]) {
    this.saveCartUsecase.call(cartItems);
  }

  emptyCart(): void {
    localStorage.removeItem('lastCart');
  }

  confirmOrder() {
    this.store
      .select(selectShoppingCartItems)
      .pipe(take(1))
      .subscribe(items => {
        const lastItems = this.getLastCart();
        this.store.dispatch(loadCart({ items: lastItems }));

        this.finalPrice$.pipe(take(1)).subscribe(finalPrice => {
          const finalPriceRounded = parseFloat(finalPrice.toFixed(2));
          this.store.dispatch(
            completePurchase({ items, finalPrice: finalPriceRounded })
          );
          this.emptyCart();
        });
      });
  }
}
