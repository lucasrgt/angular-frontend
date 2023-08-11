import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsListService } from '../../services/products-list.service';
import { of } from 'rxjs';
import {
  loadProducts,
  resetSearch,
  searchProducts,
} from '../actions/products-list.actions';

@Injectable()
export class ProductsListEffects {
  constructor(
    private actions$: Actions,
    private service: ProductsListService
  ) {}

  loadInitialState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchProducts),
      mergeMap(() => of(this.service.getAllProducts())),
      map(products => loadProducts({ products }))
    );
  });

  resetSearchState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(resetSearch),
      mergeMap(() => of(this.service.getAllProducts())),
      map(products => loadProducts({ products }))
    );
  });
}
