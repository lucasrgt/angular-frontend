import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectShoppingCartState,
  selectTotalPrice,
} from '../../store/selectors/shopping-cart.selectors';
import { ShoppingCartState } from '../../store/reducers/shopping-cart.reducers';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  cart$: Observable<ShoppingCartState>;

  constructor(private store: Store) {
    this.cart$ = this.store.select(selectShoppingCartState);
  }
}
