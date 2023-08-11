import { createReducer, on, Action } from '@ngrx/store';
import {
  addItem,
  clearCart,
  completePurchase,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  updateQuantity,
} from '../actions/shopping-cart.actions';
import { ShoppingCartItem } from '../../../domain/models/cart-item';

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

const initialState: ShoppingCartState = {
  items: [],
};

const _cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }): ShoppingCartState => {
    const existingItem = state.items.find(existing => existing.id === item.id);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(existing =>
          existing.id === item.id
            ? { ...existing, quantity: existing.quantity + item.quantity }
            : existing
        ),
      };
    }
    return {
      ...state,
      items: [...state.items, item],
    };
  }),
  on(
    removeItem,
    (state, { itemId }): ShoppingCartState => ({
      ...state,
      items: state.items.filter(item => item.id !== itemId),
    })
  ),
  on(incrementQuantity, (state, { itemId }): ShoppingCartState => {
    const newItems = state.items.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    return { ...state, items: newItems };
  }),
  on(decrementQuantity, (state, { itemId }): ShoppingCartState => {
    const newItems = state.items.map(item =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    return { ...state, items: newItems };
  }),
  on(updateQuantity, (state, { id, quantity }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    ),
  })),
  on(
    clearCart,
    (): ShoppingCartState => ({
      items: [],
    })
  ),
  on(
    completePurchase,
    (): ShoppingCartState => ({
      items: [],
    })
  )
);

export const shoppingCartReducer = (
  state: ShoppingCartState | undefined,
  action: Action
): ShoppingCartState => {
  return _cartReducer(state, action);
};
