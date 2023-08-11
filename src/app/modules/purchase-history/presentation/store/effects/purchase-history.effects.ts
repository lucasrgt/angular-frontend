import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap } from 'rxjs/operators';
import {
  addOrderToHistory,
  loadOrdersFromHistory,
  loadPage,
} from '../actions/purchase-history.actions';
import { selectAllOrders } from '../selectors/purchase-history.selectors';
import { completePurchase } from '../../../../shopping-cart/presentation/store/actions/shopping-cart.actions';
import { PurchaseHistoryService } from '../../services/purchase-history.service';
import { of } from 'rxjs';

@Injectable()
export class PurchaseHistoryEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private service: PurchaseHistoryService
  ) {}

  saveToLocalStorage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(completePurchase, addOrderToHistory),
        concatLatestFrom(() => this.store.select(selectAllOrders)),
        tap(([, orders]) => {
          this.service.saveOrders(orders);
        })
      );
    },
    { dispatch: false }
  );

  loadInitialState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPage),
      mergeMap(() => of(this.service.getLastOrders())),
      tap(orders => console.log('Orders:', orders)),
      map(orders => loadOrdersFromHistory({ orders }))
    );
  });

  logActions$ = createEffect(
    () => {
      return this.actions$.pipe(tap(action => console.log('Action:', action)));
    },
    { dispatch: false }
  );
}
