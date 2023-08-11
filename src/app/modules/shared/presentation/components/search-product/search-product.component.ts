import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  resetSearch,
  searchProducts,
} from '../../../../products-list/presentation/store/actions/products-list.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent {
  searchTerm = '';
  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}
  public onSearch(): void {
    const emptySearch = this.searchTerm.trim() === '';
    if (emptySearch) {
      this.store.dispatch(resetSearch());
    } else {
      this.store.dispatch(searchProducts({ query: this.searchTerm }));
    }
    this.router.navigate(['/products']);
  }
}
