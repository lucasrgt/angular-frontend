import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PurchaseHistoryState } from '../reducers/purchase-history.reducers';

export const selectPurchaseHistoryState =
  createFeatureSelector<PurchaseHistoryState>('purchaseHistory');

export const selectAllOrders = createSelector(
  selectPurchaseHistoryState,
  (state: PurchaseHistoryState) => state.orders
);
