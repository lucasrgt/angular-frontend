import { Product } from '../models/product';

export interface ProductsListRepository {
  getAllProducts(): Product[];
  saveSearch(products: Product[]): void;
  getLastSearch(): Product[];
}
