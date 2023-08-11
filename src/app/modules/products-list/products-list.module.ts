import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductsListComponent } from './presentation/pages/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsListRoutingModule } from './products-list-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {
  PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN,
  PRODUCTS_LIST_REPOSITORY_TOKEN,
} from './data/tokens/products-list.tokens';
import { ProductsListDatasourceImpl } from './data/datasources/products-list-local-datasource';
import { ProductsListRepositoryImpl } from './data/repositories/products-list-repository-impl';
import { GetAllProducts } from './domain/usecases/get-all-products';
import { ProductsListService } from './presentation/services/products-list.service';
import { EffectsModule } from '@ngrx/effects';
import { ProductsListEffects } from './presentation/store/effects/products-list.effects';
import { GetLastSearch } from './domain/usecases/get-last-search';
import { SaveSearch } from './domain/usecases/save-search';

@NgModule({
  providers: [
    {
      provide: PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN,
      useClass: ProductsListDatasourceImpl,
    },
    {
      provide: PRODUCTS_LIST_REPOSITORY_TOKEN,
      useClass: ProductsListRepositoryImpl,
    },
    GetAllProducts,
    GetLastSearch,
    SaveSearch,
    ProductsListService,
  ],
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsListRoutingModule,
    MatIconModule,
    NgOptimizedImage,
    EffectsModule.forFeature([ProductsListEffects]),
  ],
})
export class ProductsListModule {}
