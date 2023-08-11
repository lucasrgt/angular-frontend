import { InjectionToken } from '@angular/core';
import { ProductsListLocalDatasource } from '../datasources/products-list-local-datasource';
import { ProductsListRepository } from '../../domain/repositories/products-list-repository';

export const PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN =
  new InjectionToken<ProductsListLocalDatasource>(
    'ProductsListLocalDatasource'
  );

export const PRODUCTS_LIST_REPOSITORY_TOKEN =
  new InjectionToken<ProductsListRepository>('ProductsListRepository');
