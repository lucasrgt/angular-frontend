import { Inject, Injectable } from '@angular/core';
import { PRODUCTS_LIST_REPOSITORY_TOKEN } from '../../data/tokens/products-list.tokens';
import { ProductsListRepository } from '../repositories/products-list-repository';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class SaveSearch {
  constructor(
    @Inject(PRODUCTS_LIST_REPOSITORY_TOKEN)
    private readonly repository: ProductsListRepository
  ) {}
  call(products: Product[]) {
    this.repository.saveSearch(products);
  }
}
