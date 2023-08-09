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

export const incrementQuantity = createAction(
  '[Shopping Cart] Increment Quantity',
  props<{ itemId: number }>()
);

export const decrementQuantity = createAction(
  '[Shopping Cart] Decrement Quantity',
  props<{ itemId: number }>()
);

export const updateQuantity = createAction(
  '[Shopping Cart] Change Quantity',
  props<{ id: number; quantity: number }>()
);
