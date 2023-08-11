import { ProductsListRepository } from '../repositories/products-list-repository';
import { Inject, Injectable } from '@angular/core';
import { PRODUCTS_LIST_REPOSITORY_TOKEN } from '../../data/tokens/products-list.tokens';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GetAllProducts {
  constructor(
    @Inject(PRODUCTS_LIST_REPOSITORY_TOKEN)
    private readonly repository: ProductsListRepository
  ) {}

  call(): Product[] {
    return this.repository.getAllProducts();
  }
}
