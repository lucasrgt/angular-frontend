import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectShoppingCartState } from '../../store/selectors/shopping-cart.selectors';
import { ShoppingCartState } from '../../store/reducers/shopping-cart.reducers';
import { initialCart } from '../../store/actions/shopping-cart.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<ShoppingCartState>;

  constructor(private store: Store) {
    this.cart$ = this.store.select(selectShoppingCartState);
  }

  ngOnInit() {
    this.store.dispatch(initialCart());
  }
}
