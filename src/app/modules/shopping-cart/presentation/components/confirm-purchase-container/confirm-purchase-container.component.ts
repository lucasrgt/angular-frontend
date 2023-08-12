import { Component } from '@angular/core';
import {
  selectShoppingCartItems,
  selectTotalPrice,
} from '../../store/selectors/shopping-cart.selectors';
import { Observable, take } from 'rxjs';
import { completePurchase } from '../../store/actions/shopping-cart.actions';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from '../../services/shopping-cart.service';

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
    this.store
      .select(selectShoppingCartItems)
      .pipe(take(1))
      .subscribe(items => {
        this.finalPrice$.pipe(take(1)).subscribe(finalPrice => {
          const finalPriceRounded = parseFloat(finalPrice.toFixed(2));
          this.store.dispatch(
            completePurchase({ items, finalPrice: finalPriceRounded })
          );
          this.service.emptyCart();
        });
      });
  }
}
