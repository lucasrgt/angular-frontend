import { TestBed } from '@angular/core/testing';
import { PurchaseHistoryService } from './purchase-history.service';
import { GetLastOrders } from '../../domain/usecases/get-last-orders';
import { SaveOrders } from '../../domain/usecases/save-orders';

describe('PurchaseHistoryService', () => {
  let service: PurchaseHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PurchaseHistoryService,
        { provide: GetLastOrders, useValue: { call: jest.fn() } },
        { provide: SaveOrders, useValue: { call: jest.fn() } },
      ],
    });
    service = TestBed.inject(PurchaseHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
