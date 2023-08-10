import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../../../core/domain/models/order';
import { Store } from '@ngrx/store';
import { selectAllOrders } from '../../store/selectors/purchase-history.selectors';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  orders$: Observable<Order[]> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.orders$ = this.store.select(selectAllOrders);
  }
}
