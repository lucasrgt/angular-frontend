import { ProductsListRepository } from '../../domain/repositories/products-list-repository';
import { Product } from '../../domain/models/product';
import { ProductsListLocalDatasource } from '../datasources/products-list-local-datasource';
import { Inject, Injectable } from '@angular/core';
import { PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN } from '../tokens/products-list.tokens';

@Injectable({
  providedIn: 'root',
})
export class ProductsListRepositoryImpl implements ProductsListRepository {
  constructor(
    @Inject(PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN)
    private readonly localDatasource: ProductsListLocalDatasource
  ) {}
  getAllProducts(): Product[] {
    return this.localDatasource.getAllProducts();
  }
}
