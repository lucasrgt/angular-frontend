import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../../../core/domain/models/order';
import { Store } from '@ngrx/store';
import { selectAllOrders } from '../../store/selectors/purchase-history.selectors';
import { selectTotalPrice } from '../../../shopping-cart/store/selectors/shopping-cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  orders$: Observable<Order[]> | undefined;
  finalPrice$: Observable<number> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.orders$ = this.store.select(selectAllOrders);
    this.finalPrice$ = this.store.select(selectTotalPrice);
  }
}
