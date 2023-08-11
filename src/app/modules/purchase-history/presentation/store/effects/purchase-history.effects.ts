import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { addOrderToHistory } from '../actions/purchase-history.actions';
import { selectAllOrders } from '../selectors/purchase-history.selectors';
import { completePurchase } from '../../../../shopping-cart/presentation/store/actions/shopping-cart.actions';

@Injectable()
export class PurchaseHistoryEffects {
  constructor(
    private actions$: Actions,
    private store: Store
  ) {}

  saveToLocalStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(completePurchase, addOrderToHistory),
        withLatestFrom(this.store.select(selectAllOrders)),
        tap(([, orders]) => {
          localStorage.setItem('purchaseHistory', JSON.stringify(orders));
        })
      );
    },
    { dispatch: false }
  );
}
