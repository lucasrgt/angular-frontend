import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeModule } from './presentation/modules/home/home.module';
import { ShoppingCartModule } from './presentation/modules/shopping-cart/shopping-cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { shoppingCartReducer } from './presentation/modules/shopping-cart/store/reducers/shopping-cart.reducers';
import { purchaseHistoryReducer } from './presentation/modules/purchase-history/store/reducers/purchase-history.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        shoppingCart: shoppingCartReducer,
        purchaseHistory: purchaseHistoryReducer,
      },
      {}
    ),
    HomeModule,
    ShoppingCartModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
