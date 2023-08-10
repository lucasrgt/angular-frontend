import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';

@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [CommonModule, PurchaseHistoryRoutingModule],
})
export class PurchaseHistoryModule {}
