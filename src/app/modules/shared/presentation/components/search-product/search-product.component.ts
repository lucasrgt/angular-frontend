import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  resetSearch,
  searchProducts,
} from '../../../../products-list/presentation/store/actions/products-list.actions';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent {
  searchTerm = '';
  constructor(private readonly store: Store) {}
  public onSearch(): void {
    if (this.searchTerm === '') {
      this.store.dispatch(resetSearch());
    }
    this.store.dispatch(searchProducts({ query: this.searchTerm }));
  }
}
