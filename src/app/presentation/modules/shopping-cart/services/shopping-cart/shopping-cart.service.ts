import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectShoppingCartItems,
  selectTotalPrice,
} from '../../store/selectors/shopping-cart.selectors';
import { completePurchase } from '../../store/actions/shopping-cart.actions';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  finalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.finalPrice$ = store.select(selectTotalPrice);
  }

  confirmOrder() {
    this.store
      .select(selectShoppingCartItems)
      .pipe(take(1))
      .subscribe(items => {
        this.finalPrice$.pipe(take(1)).subscribe(finalPrice => {
          const finalPriceRounded = parseFloat(finalPrice.toFixed(2));
          this.store.dispatch(
            completePurchase({ items, finalPrice: finalPriceRounded })
          );
        });
      });
  }
}
