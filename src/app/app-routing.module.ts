import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./presentation/modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./presentation/modules/shopping-cart/shopping-cart.module').then(
        m => m.ShoppingCartModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./presentation/modules/products-list/products-list.module').then(
        m => m.ProductsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
