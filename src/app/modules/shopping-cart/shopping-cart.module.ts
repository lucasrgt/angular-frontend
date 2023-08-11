import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './presentation/pages/success/success.component';
import { ShoppingCartComponent } from './presentation/pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent, SuccessComponent],
  imports: [CommonModule, SharedModule, ShoppingCartRoutingModule, FormsModule],
})
export class ShoppingCartModule {}