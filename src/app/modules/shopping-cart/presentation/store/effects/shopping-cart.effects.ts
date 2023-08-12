import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  addItem,
  completePurchase,
  decrementQuantity,
  incrementQuantity,
  initialCart,
  loadCart,
  removeItem,
  updateQuantity,
} from '../actions/shopping-cart.actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { selectShoppingCartItems } from '../selectors/shopping-cart.selectors';
import {
  loadOrdersFromHistory,
  loadPage,
} from '../../../../purchase-history/presentation/store/actions/purchase-history.actions';
import { of } from 'rxjs';

@Injectable()
export class ShoppingCartEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private service: ShoppingCartService
  ) {}

  saveToLocalStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          addItem,
          removeItem,
          incrementQuantity,
          decrementQuantity,
          updateQuantity
        ),
        concatLatestFrom(() => this.store.select(selectShoppingCartItems)),
        tap(([, cartItems]) => {
          this.service.saveCart(cartItems);
        })
      );
    },
    { dispatch: false }
  );

  loadInitialState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initialCart),
      mergeMap(() => of(this.service.getLastCart())),
      map(orders => loadCart({ items: orders }))
    );
  });
}
