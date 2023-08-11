import { GetLastOrders } from '../../domain/usecases/get-last-orders';
import { Order } from '../../domain/models/order';
import { Injectable } from '@angular/core';
import { SaveOrders } from '../../domain/usecases/save-orders';

@Injectable({
  providedIn: 'root',
})
export class PurchaseHistoryService {
  constructor(
    private readonly getLastOrdersUsecase: GetLastOrders,
    private readonly saveOrdersUsecase: SaveOrders
  ) {}

  getLastOrders(): Order[] {
    return this.getLastOrdersUsecase.call();
  }

  saveOrders(orders: Order[]): void {
    this.saveOrdersUsecase.call(orders);
  }
}
