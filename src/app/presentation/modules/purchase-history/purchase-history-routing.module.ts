import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseHistoryRoutingModule {}