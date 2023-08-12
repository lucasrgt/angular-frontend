import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShoppingCartState } from '../../store/selectors/shopping-cart.selectors';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../../store/reducers/shopping-cart.reducers';
import {
  updateQuantity,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '../../store/actions/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart-product-container',
  templateUrl: './shopping-cart-product-container.component.html',
  styleUrls: ['./shopping-cart-product-container.component.scss'],
})
export class ShoppingCartProductContainerComponent {
  cart$: Observable<ShoppingCartState>;
  constructor(private store: Store) {
    this.cart$ = store.select(selectShoppingCartState);
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

  removeItem(itemId: number) {
    this.store.dispatch(removeItem({ itemId: itemId }));
  }
}
