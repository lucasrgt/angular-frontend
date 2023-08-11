import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../../../domain/models/order';
import { Store } from '@ngrx/store';
import { selectAllOrders } from '../../store/selectors/purchase-history.selectors';
import { selectTotalPrice } from '../../../../shopping-cart/presentation/store/selectors/shopping-cart.selectors';
import { PurchaseHistoryService } from '../../services/purchase-history.service';
import { loadPage } from '../../store/actions/purchase-history.actions';

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
    this.store.dispatch(loadPage());
    this.orders$ = this.store.select(selectAllOrders);
    this.finalPrice$ = this.store.select(selectTotalPrice);
  }
}
