import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistoryComponent } from './purchase-history.component';
import { StoreModule } from '@ngrx/store';

describe('PurchaseHistoryComponent', () => {
  let component: PurchaseHistoryComponent;
  let fixture: ComponentFixture<PurchaseHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseHistoryComponent],
      imports: [StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(PurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
