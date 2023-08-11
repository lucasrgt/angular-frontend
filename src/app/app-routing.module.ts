import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      import('./modules/shopping-cart/shopping-cart.module').then(
        m => m.ShoppingCartModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products-list/products-list.module').then(
        m => m.ProductsListModule
      ),
  },
  {
    path: 'purchase-history',
    loadChildren: () =>
      import('./modules/purchase-history/purchase-history.module').then(
        m => m.PurchaseHistoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
