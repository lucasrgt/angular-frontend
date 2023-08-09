import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingCartState } from '../reducers/shopping-cart.reducers';

export const selectShoppingCartState =
  createFeatureSelector<ShoppingCartState>('shoppingCart');

export const selectShoppingCartItems = createSelector(
  selectShoppingCartState,
  (state: ShoppingCartState) => state.items
);
