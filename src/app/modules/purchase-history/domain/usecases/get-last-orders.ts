import { PurchaseHistoryRepository } from '../repositories/purchase-history-repository';
import { Inject, Injectable } from '@angular/core';
import { PURCHASE_HISTORY_REPOSITORY_TOKEN } from '../../data/tokens/purchase-history.tokens';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class GetLastOrders {
  constructor(
    @Inject(PURCHASE_HISTORY_REPOSITORY_TOKEN)
    private readonly repository: PurchaseHistoryRepository
  ) {}
  call(): Order[] {
    return this.repository.getLastOrders();
  }
}
