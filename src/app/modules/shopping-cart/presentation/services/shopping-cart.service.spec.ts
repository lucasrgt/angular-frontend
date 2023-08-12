import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import { GetLastCart } from '../../domain/usecases/get-last-cart';
import { SaveCart } from '../../domain/usecases/save-cart';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingCartService,
        { provide: GetLastCart, useValue: { call: jest.fn() } },
        { provide: SaveCart, useValue: { call: jest.fn() } },
      ],
    });
    service = TestBed.inject(ShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
