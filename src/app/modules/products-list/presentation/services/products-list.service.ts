import { Injectable } from '@angular/core';

import { GetAllProducts } from '../../domain/usecases/get-all-products';
import { Product } from '../../domain/models/product';
import { GetLastSearch } from '../../domain/usecases/get-last-search';
import { SaveSearch } from '../../domain/usecases/save-search';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  constructor(
    private readonly getLastSearchUsecase: GetLastSearch,
    private readonly saveSearchUsecase: SaveSearch,
    private readonly getAllProductsUsecase: GetAllProducts
  ) {}

  getAllProducts(): Product[] {
    return this.getAllProductsUsecase.call();
  }
  getLastSearch(): Product[] {
    return this.getLastSearchUsecase.call();
  }
  saveSearch(products: Product[]) {
    return this.saveSearchUsecase.call(products);
  }
}
