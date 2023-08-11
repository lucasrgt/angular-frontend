import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPurchaseContainerComponent } from './confirm-purchase-container.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('ConfirmPurchaseContainerComponent', () => {
  let component: ConfirmPurchaseContainerComponent;
  let fixture: ComponentFixture<ConfirmPurchaseContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPurchaseContainerComponent],
      imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(ConfirmPurchaseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
