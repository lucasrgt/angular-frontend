import { Component, OnInit } from '@angular/core';
import { Product } from '../../../domain/models/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectAllProducts,
  selectTotalProductsPrice,
} from '../../store/selectors/products-list.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  totalProductsPrice$: Observable<number> | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectAllProducts);
    this.totalProductsPrice$ = this.store.select(selectTotalProductsPrice);
  }
}
