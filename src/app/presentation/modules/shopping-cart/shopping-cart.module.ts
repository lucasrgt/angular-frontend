import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SuccessComponent } from './pages/success/success.component';

@NgModule({
  declarations: [ShoppingCartComponent, SuccessComponent],
  imports: [CommonModule, SharedModule, ShoppingCartRoutingModule, FormsModule],
})
export class ShoppingCartModule {}
