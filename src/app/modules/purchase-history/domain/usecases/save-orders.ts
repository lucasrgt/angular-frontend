import { PurchaseHistoryRepository } from '../repositories/purchase-history-repository';
import { Order } from '../models/order';
import { Inject, Injectable } from '@angular/core';
import { PURCHASE_HISTORY_REPOSITORY_TOKEN } from '../../data/tokens/purchase-history.tokens';

@Injectable({
  providedIn: 'root',
})
export class SaveOrders {
  constructor(
    @Inject(PURCHASE_HISTORY_REPOSITORY_TOKEN)
    private readonly repository: PurchaseHistoryRepository
  ) {}

  call(orders: Order[]): void {
    return this.repository.saveOrders(orders);
  }
}
