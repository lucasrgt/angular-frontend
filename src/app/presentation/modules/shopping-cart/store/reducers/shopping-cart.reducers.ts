import { createReducer, on, Action } from '@ngrx/store';
import { ShoppingCartItem } from '../../../../../core/domain/models/cart-item';
import { addItem, removeItem } from '../actions/shopping-cart.actions';

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
  items: [],
};

const _cartReducer = createReducer(
  initialState,
  on(
    addItem,
    (state, { item }): ShoppingCartState => ({
      ...state,
      items: [...state.items, item],
    })
  ),
  on(
    removeItem,
    (state, { itemId }): ShoppingCartState => ({
      ...state,
      items: state.items.filter(item => item.id !== itemId),
    })
  )
);

export const shoppingCartReducer = (
  state: ShoppingCartState | undefined,
  action: Action
): ShoppingCartState => {
  return _cartReducer(state, action);
};
