import { Product } from '../../../products-list/domain/models/product';

export type ShoppingCartItem = {
  id: number;
  product: Product;
  quantity: number;
};
