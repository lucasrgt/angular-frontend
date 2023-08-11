import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../../../domain/models/product';
import { loadProducts, searchProducts } from '../actions/products-list.actions';

export interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [],
};

const _productsReducer = createReducer(
  initialState,
  on(
    loadProducts,
    (state, { products }): ProductsState => ({
      ...state,
      items: products,
    })
  ),
  on(searchProducts, (state, { query }): ProductsState => {
    return {
      ...state,
      items: state.items.filter(product =>
        product.description.toLowerCase().includes(query.toLowerCase())
      ),
    };
  })
);

export const productsReducer = (
  state: ProductsState | undefined,
  action: Action
): ProductsState => {
  return _productsReducer(state, action);
};
