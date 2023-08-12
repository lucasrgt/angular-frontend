import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  resetSearch,
  searchProducts,
} from '../../../../products-list/presentation/store/actions/products-list.actions';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchProductService {
  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  private searchTerm = new BehaviorSubject<string>('');

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchTerm.asObservable();
  }

  public search(query: string): void {
    const emptySearch = query.trim() === '';
    if (emptySearch) {
      this.store.dispatch(resetSearch({ query: query }));
    } else {
      this.store.dispatch(searchProducts({ query: query }));
    }
    this.router.navigate(['/products']);
  }
}
