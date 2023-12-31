import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './presentation/pages/shopping-cart/shopping-cart.component';
import { SuccessComponent } from './presentation/pages/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
