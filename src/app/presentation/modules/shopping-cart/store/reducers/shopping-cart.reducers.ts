import { createReducer, on, Action } from '@ngrx/store';
import { ShoppingCartItem } from '../../../../../core/domain/models/cart-item';
import {
  addItem,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  updateQuantity,
} from '../actions/shopping-cart.actions';

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

const fakeItems = [
  {
    product: {
      id: 1,
      description: 'Red T-shirt',
      longDescription:
        'Red T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.',
      price: 17.99,
    },
    id: 1,
    quantity: 1,
  },
  {
    product: {
      id: 2,
      description: 'Red T-shirt',
      longDescription:
        'Red T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.',
      price: 17.99,
    },
    id: 2,
    quantity: 1,
  },
];

const initialState: ShoppingCartState = {
  items: fakeItems,
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
  }))
);

export const shoppingCartReducer = (
  state: ShoppingCartState | undefined,
  action: Action
): ShoppingCartState => {
  return _cartReducer(state, action);
};
