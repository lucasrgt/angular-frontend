import { TestBed } from '@angular/core/testing';

import { ShoppingCartService } from './shopping-cart.service';
import { GetLastCart } from '../../../domain/usecases/get-last-cart';
import { SaveCart } from '../../../domain/usecases/save-cart';
import {
  SHOPPING_CART_LOCAL_DATASOURCE_TOKEN,
  SHOPPING_CART_REPOSITORY_TOKEN,
} from '../../../data/tokens/shopping-cart.tokens';
import { ShoppingCartRepositoryImpl } from '../../../data/repositories/shopping-cart-repository-impl';
import { ShoppingCartLocalDatasourceImpl } from '../../../data/datasources/shopping-cart-local-datasource';
import { StoreModule } from '@ngrx/store';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ShoppingCartService,
        {
          provide: SHOPPING_CART_REPOSITORY_TOKEN,
          useClass: ShoppingCartRepositoryImpl,
        },
        {
          provide: SHOPPING_CART_LOCAL_DATASOURCE_TOKEN,
          useClass: ShoppingCartLocalDatasourceImpl,
        },
        { provide: GetLastCart, useValue: { call: jest.fn() } },
        { provide: SaveCart, useValue: { call: jest.fn() } },
      ],
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(ShoppingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
