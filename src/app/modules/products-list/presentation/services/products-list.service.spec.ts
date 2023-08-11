import { GetAllProducts } from '../../domain/usecases/get-all-products';
import { ProductsListService } from './products-list.service';
import { TestBed } from '@angular/core/testing';
import { GetLastSearch } from '../../domain/usecases/get-last-search';
import { SaveSearch } from '../../domain/usecases/save-search';
import {
  PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN,
  PRODUCTS_LIST_REPOSITORY_TOKEN,
} from '../../data/tokens/products-list.tokens';
import { ProductsListDatasourceImpl } from '../../data/datasources/products-list-local-datasource';
import { ProductsListRepositoryImpl } from '../../data/repositories/products-list-repository-impl';
import { EffectsModule } from '@ngrx/effects';
import { ProductsListEffects } from '../store/effects/products-list.effects';
import { StoreModule } from '@ngrx/store';

describe('ProductsListService', () => {
  let service: ProductsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsListService,
        { provide: GetAllProducts, useValue: { call: jest.fn() } },
        { provide: GetLastSearch, useValue: { call: jest.fn() } },
        { provide: SaveSearch, useValue: { call: jest.fn() } },
        {
          provide: PRODUCTS_LIST_LOCAL_DATASOURCE_TOKEN,
          useClass: ProductsListDatasourceImpl,
        },
        {
          provide: PRODUCTS_LIST_REPOSITORY_TOKEN,
          useClass: ProductsListRepositoryImpl,
        },
      ],
      imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });
    service = TestBed.inject(ProductsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
