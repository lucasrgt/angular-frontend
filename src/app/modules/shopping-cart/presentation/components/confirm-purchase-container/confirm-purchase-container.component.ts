import { Component } from '@angular/core';
import { selectTotalPrice } from '../../store/selectors/shopping-cart.selectors';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-confirm-purchase-container',
  templateUrl: './confirm-purchase-container.component.html',
  styleUrls: ['./confirm-purchase-container.component.scss'],
})
export class ConfirmPurchaseContainerComponent {
  finalPrice$: Observable<number>;
  constructor(
    private readonly store: Store,
    private readonly service: ShoppingCartService
  ) {
    this.finalPrice$ = this.store.select(selectTotalPrice);
  }

  confirmOrder() {
    this.service.confirmOrder();
  }
}
