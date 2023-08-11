import { createReducer, on } from '@ngrx/store';
import { addOrderToHistory } from '../actions/purchase-history.actions';
import { Order } from '../../../domain/models/order';
import { completePurchase } from '../../../../shopping-cart/presentation/store/actions/shopping-cart.actions';

export interface PurchaseHistoryState {
  orders: Order[];
}

const getInitialState = (): PurchaseHistoryState => {
  const savedOrders = localStorage.getItem('purchaseHistory');
  const initialOrders = savedOrders ? JSON.parse(savedOrders) : [];

  return { orders: initialOrders };
};

export const purchaseHistoryReducer = createReducer(
  getInitialState(),
  on(completePurchase, (state, { items, finalPrice }): PurchaseHistoryState => {
    const newOrder: Order = {
      id: state.orders.length + 1,
      items: items,
      finalPrice: finalPrice,
    };
    return {
      ...state,
      orders: [...state.orders, newOrder],
    };
  }),
  on(addOrderToHistory, (state, { order }): PurchaseHistoryState => {
    return {
      ...state,
      orders: [...state.orders, order],
    };
  })
);
