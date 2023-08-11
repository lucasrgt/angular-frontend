import { Injectable } from '@angular/core';

import { GetAllProducts } from '../../domain/usecases/get-all-products';
import { Product } from '../../domain/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsListService {
  constructor(private readonly getAllProductsUsecase: GetAllProducts) {}

  getAllProducts(): Product[] {
    return this.getAllProductsUsecase.call();
  }
}
