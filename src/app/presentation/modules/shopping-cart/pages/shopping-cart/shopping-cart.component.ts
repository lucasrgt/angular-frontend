import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  selectShoppingCartState,
  selectTotalPrice,
} from '../../store/selectors/shopping-cart.selectors';
import { ShoppingCartState } from '../../store/reducers/shopping-cart.reducers';
import {
  decrementQuantity,
  incrementQuantity,
  updateQuantity,
} from '../../store/actions/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  cart$: Observable<ShoppingCartState>;
  finalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.cart$ = store.select(selectShoppingCartState);
    this.finalPrice$ = store.select(selectTotalPrice);
  }

  incrementQuantity(itemId: number) {
    this.store.dispatch(incrementQuantity({ itemId }));
  }

  decrementQuantity(itemId: number) {
    this.store.dispatch(decrementQuantity({ itemId }));
  }

  updateQuantity(itemId: number, newQuantity: number) {
    this.store.dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  }
}
