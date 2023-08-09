import { createAction, props } from '@ngrx/store';
import { ShoppingCartItem } from '../../../../../core/domain/models/cart-item';

export const addItem = createAction(
  '[Shopping Cart] Add Item',
  props<{ item: ShoppingCartItem }>()
);

export const removeItem = createAction(
  '[Shopping Cart] Remove Item',
  props<{ itemId: number }>()
);
