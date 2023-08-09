import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsListRoutingModule } from './products-list-routing.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, SharedModule, ProductsListRoutingModule],
})
export class ProductsListModule {}
