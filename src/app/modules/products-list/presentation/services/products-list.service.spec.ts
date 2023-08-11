import { TestBed } from '@angular/core/testing';
import { ProductsListService } from './products-list.service';
import { PurchaseHistoryService } from '../../../purchase-history/presentation/services/purchase-history.service';
import { StoreModule } from '@ngrx/store';
import { GetAllProducts } from '../../domain/usecases/get-all-products';

describe('ProductsListService', () => {
  let service: ProductsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsListService,
        { provide: GetAllProducts, useValue: { call: jest.fn() } },
      ],
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(ProductsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
