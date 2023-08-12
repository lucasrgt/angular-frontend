import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../../../domain/models/product';
import {
  loadProducts,
  resetSearch,
  searchProducts,
} from '../actions/products-list.actions';

export interface ProductsState {
  items: Product[];
  searchQuery: string;
}

const initialState: ProductsState = {
  items: [],
  searchQuery: '',
};

const _productsReducer = createReducer(
  initialState,
  on(
    loadProducts,
    (state, { products }): ProductsState => ({
      ...state,
      items: products.filter(product =>
        product.description
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
      ),
    })
  ),
  on(
    searchProducts,
    (state, { query }): ProductsState => ({
      ...state,
      searchQuery: query,
    })
  ),
  on(
    resetSearch,
    (state, { query }): ProductsState => ({
      ...state,
      searchQuery: query,
    })
  )
);

export const productsReducer = (
  state: ProductsState | undefined,
  action: Action
): ProductsState => {
  return _productsReducer(state, action);
};
