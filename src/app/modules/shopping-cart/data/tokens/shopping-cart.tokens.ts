import { InjectionToken } from '@angular/core';
import { ShoppingCartLocalDatasource } from '../datasources/shopping-cart-local-datasource';
import { ShoppingCartRepository } from '../../domain/repositories/shopping-cart-repository';

export const SHOPPING_CART_LOCAL_DATASOURCE_TOKEN =
  new InjectionToken<ShoppingCartLocalDatasource>(
    'ShoppingCartLocalDatasource'
  );

export const SHOPPING_CART_REPOSITORY_TOKEN =
  new InjectionToken<ShoppingCartRepository>('ShoppingCartRepository');
