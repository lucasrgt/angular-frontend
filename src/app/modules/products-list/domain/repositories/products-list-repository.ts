import { Product } from '../models/product';

export interface ProductsListRepository {
  getAllProducts(): Product[];
}
