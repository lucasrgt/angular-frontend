import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import { StoreModule } from '@ngrx/store';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StoreModule.forRoot({})] });
    service = TestBed.inject(ShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
