import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductComponent } from './search-product.component';
import { StoreModule } from '@ngrx/store';

describe('SearchProductComponent', () => {
  let component: SearchProductComponent;
  let fixture: ComponentFixture<SearchProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductComponent],
      imports: [StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(SearchProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
