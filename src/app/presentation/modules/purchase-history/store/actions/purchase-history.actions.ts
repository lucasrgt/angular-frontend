import { createAction, props } from '@ngrx/store';
import { Order } from '../../../../../core/domain/models/order';

export const addOrderToHistory = createAction(
  '[Purchase History] Add Order to History',
  props<{ order: Order }>()
);

export const loadOrdersFromHistory = createAction(
  '[Purchase History] Load Orders from History'
);
