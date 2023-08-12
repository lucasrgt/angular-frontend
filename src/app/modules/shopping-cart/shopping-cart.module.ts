import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './presentation/pages/success/success.component';
import { ShoppingCartComponent } from './presentation/pages/shopping-cart/shopping-cart.component';
import { ShoppingCartProductContainerComponent } from './presentation/components/shopping-cart-product-container/shopping-cart-product-container.component';
import { ConfirmPurchaseContainerComponent } from './presentation/components/confirm-purchase-container/confirm-purchase-container.component';
import {
  SHOPPING_CART_LOCAL_DATASOURCE_TOKEN,
  SHOPPING_CART_REPOSITORY_TOKEN,
} from './data/tokens/shopping-cart.tokens';
import { ShoppingCartLocalDatasourceImpl } from './data/datasources/shopping-cart-local-datasource';
import { ShoppingCartRepositoryImpl } from './data/repositories/shopping-cart-repository-impl';
import { GetLastCart } from './domain/usecases/get-last-cart';
import { SaveCart } from './domain/usecases/save-cart';
import { ShoppingCartService } from './presentation/services/shopping-cart.service';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './presentation/store/effects/shopping-cart.effects';

@NgModule({
  providers: [
    {
      provide: SHOPPING_CART_LOCAL_DATASOURCE_TOKEN,
      useClass: ShoppingCartLocalDatasourceImpl,
    },
    {
      provide: SHOPPING_CART_REPOSITORY_TOKEN,
      useClass: ShoppingCartRepositoryImpl,
    },
    GetLastCart,
    SaveCart,
    ShoppingCartService,
  ],
  declarations: [
    ShoppingCartComponent,
    SuccessComponent,
    ShoppingCartProductContainerComponent,
    ConfirmPurchaseContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingCartRoutingModule,
    FormsModule,
    EffectsModule.forFeature(ShoppingCartEffects),
  ],
})
export class ShoppingCartModule {}
