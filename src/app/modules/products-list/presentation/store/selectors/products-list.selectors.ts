import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../../domain/models/product';
import { ProductsState } from '../reducers/products-list.reducers';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.items
);

export const selectProductById = (productId: number) =>
  createSelector(selectAllProducts, (products: Product[]) =>
    products.find(product => product.id === productId)
  );

export const selectTotalProductsPrice = createSelector(
  selectAllProducts,
  (products: Product[]) =>
    products.reduce((total, product) => total + product.price, 0)
);

export const selectProductsArrayEmpty = createSelector(
  selectProductsState,
  (state: ProductsState) => state.items.length === 0
);
