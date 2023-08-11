import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState } from '../reducers/shopping-cart.reducers';
import { ShoppingCartItem } from '../../../domain/models/cart-item';

export const selectShoppingCartState =
  createFeatureSelector<ShoppingCartState>('shoppingCart');

export const selectShoppingCartItems = createSelector(
  selectShoppingCartState,
  (state: ShoppingCartState) => state.items
);

export const selectTotalPrice = createSelector(
  selectShoppingCartItems,
  (items: ShoppingCartItem[]) =>
    items.reduce((total, item) => total + item.product.price * item.quantity, 0)
);

export const selectCartItemCount = createSelector(
  selectShoppingCartItems,
  (items: ShoppingCartItem[]) =>
    items.reduce((count, item) => count + item.quantity, 0)
);
