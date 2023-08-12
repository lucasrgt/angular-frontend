import { createAction, props } from '@ngrx/store';
import { ShoppingCartItem } from '../../../domain/models/cart-item';

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

export const completePurchase = createAction(
  '[Shopping Cart] Complete Purchase',
  props<{ items: ShoppingCartItem[]; finalPrice: number }>()
);

export const clearCart = createAction('[Shopping Cart] Clear Cart');

export const loadCart = createAction(
  '[Shopping Cart] Load Cart',
  props<{ items: ShoppingCartItem[] }>()
);

export const initialCart = createAction('[Shopping Cart] Initial Cart');
