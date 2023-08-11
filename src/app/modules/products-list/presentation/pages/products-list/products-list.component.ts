import { Component, OnInit } from '@angular/core';
import { Product } from '../../../domain/models/product';
import { filter, Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectProductsArrayEmpty,
  selectTotalProductsPrice,
} from '../../store/selectors/products-list.selectors';
import { resetSearch } from '../../store/actions/products-list.actions';
import { SearchProductService } from '../../../../shared/presentation/services/search-product/search-product.service';
import { map } from 'rxjs/operators';
import { ShoppingCartItem } from '../../../../shopping-cart/domain/models/cart-item';
import { addItem } from '../../../../shopping-cart/presentation/store/actions/shopping-cart.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  searchTerm = '';
  products$: Observable<Product[]> | undefined;
  productsCount$: Observable<number> | undefined;
  totalProductsPrice$: Observable<number> | undefined;

  constructor(
    private readonly searchProductService: SearchProductService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectAllProducts);
    this.productsCount$ = this.products$.pipe(map(products => products.length));
    this.totalProductsPrice$ = this.store.select(selectTotalProductsPrice);
    this.store
      .select(selectProductsArrayEmpty)
      .pipe(
        take(1),
        filter(isEmpty => isEmpty)
      )
      .subscribe(() => {
        this.store.dispatch(resetSearch());
      });
    this.searchProductService.getSearchTerm().subscribe(term => {
      this.searchTerm = term;
    });
  }

  addToCart(product: Product) {
    const item: ShoppingCartItem = {
      id: product.id,
      product: product,
      quantity: 1,
    };

    this.store.dispatch(addItem({ item }));
  }
}
