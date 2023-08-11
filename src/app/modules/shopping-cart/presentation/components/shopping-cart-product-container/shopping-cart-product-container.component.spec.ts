import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductContainerComponent } from './shopping-cart-product-container.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('ShoppingCartProductContainerComponent', () => {
  let component: ShoppingCartProductContainerComponent;
  let fixture: ComponentFixture<ShoppingCartProductContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartProductContainerComponent],
      imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(ShoppingCartProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
