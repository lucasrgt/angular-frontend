import { Order } from '../models/order';

export interface PurchaseHistoryRepository {
  getLastOrders(): Order[];
  saveOrders(orders: Order[]): void;
}
