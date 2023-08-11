import { createAction, props } from '@ngrx/store';
import { Product } from '../../../domain/models/product';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ products: Product[] }>()
);

export const searchProducts = createAction(
  '[Products] Search Products',
  props<{ query: string }>()
);

export const resetSearch = createAction('[Products] Reset Search');
