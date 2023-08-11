import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartItemCount } from '../../../../shopping-cart/presentation/store/selectors/shopping-cart.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartItemCount$: Observable<number>;

  constructor(private store: Store) {
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }
}
