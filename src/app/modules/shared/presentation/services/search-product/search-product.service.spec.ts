import { provideMockStore } from '@ngrx/store/testing';
import { SearchProductService } from './search-product.service';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

describe('SearchProductService', () => {
  let service: SearchProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(SearchProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
