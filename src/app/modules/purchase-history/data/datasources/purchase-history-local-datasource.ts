import { Order } from '../../domain/models/order';
import { CacheError } from '../../../../core/errors/cache-error';
import { Injectable } from '@angular/core';

export interface PurchaseHistoryLocalDatasource {
  getLastOrders(): Order[];
  saveOrders(orders: Order[]): void;
}

@Injectable({
  providedIn: 'root',
})
export class PurchaseHistoryLocalDatasourceImpl
  implements PurchaseHistoryLocalDatasource
{
  getLastOrders(): Order[] {
    try {
      const lastOrders = localStorage.getItem('lastOrders');
      return lastOrders ? JSON.parse(lastOrders) : [];
    } catch (_) {
      throw new CacheError('Error on getting last orders from localstorage.');
    }
  }

  saveOrders(orders: Order[]) {
    localStorage.setItem('lastOrders', JSON.stringify(orders));
  }
}
