import { PurchaseHistoryRepository } from '../../domain/repositories/purchase-history-repository';
import { Order } from '../../domain/models/order';
import { PurchaseHistoryLocalDatasource } from '../datasources/purchase-history-local-datasource';
import { CacheError } from '../../../../core/errors/cache-error';
import { Inject, Injectable } from '@angular/core';
import { PURCHASE_HISTORY_LOCAL_DATASOURCE_TOKEN } from '../tokens/purchase-history.tokens';

@Injectable({
  providedIn: 'root',
})
export class PurchaseHistoryRepositoryImpl
  implements PurchaseHistoryRepository
{
  constructor(
    @Inject(PURCHASE_HISTORY_LOCAL_DATASOURCE_TOKEN)
    private readonly localDataSource: PurchaseHistoryLocalDatasource
  ) {}

  /** Retorna os últimos pedidos */
  getLastOrders(): Order[] {
    try {
      return this.localDataSource.getLastOrders();
    } catch (_) {
      throw new CacheError('Error on getting last orders from localstorage.');
    }
  }

  /** Salva os últimos pedidos */
  saveOrders(orders: Order[]): void {
    try {
      this.localDataSource.saveOrders(orders);
    } catch (_) {
      throw new CacheError('Error on saving last orders on localstorage.');
    }
  }
}
