import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from './modules/shopping-cart/presentation/store/reducers/shopping-cart.reducers';
import { purchaseHistoryReducer } from './modules/purchase-history/presentation/store/reducers/purchase-history.reducers';
import { productsReducer } from './modules/products-list/presentation/store/reducers/products-list.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './modules/home/home.module';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        shoppingCart: shoppingCartReducer,
        purchaseHistory: purchaseHistoryReducer,
        products: productsReducer,
      },
      {}
    ),
    EffectsModule.forRoot([]),
    HomeModule,
    ShoppingCartModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
