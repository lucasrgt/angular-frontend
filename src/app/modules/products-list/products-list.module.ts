import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './presentation/pages/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsListRoutingModule,
    MatIconModule,
  ],
})
export class ProductsListModule {}
