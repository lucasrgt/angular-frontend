import { provideMockStore } from '@ngrx/store/testing';
import { SearchProductService } from '../../../shared/presentation/services/search-product/search-product.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchProductService, provideMockStore()],
      declarations: [HomeComponent],
      imports: [EffectsModule.forRoot([]), StoreModule.forRoot({})],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
