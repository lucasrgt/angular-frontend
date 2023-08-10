import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseHistoryEffects } from './store/effects/purchase-history.effects';

@NgModule({
  declarations: [PurchaseHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseHistoryRoutingModule,
    EffectsModule.forFeature([PurchaseHistoryEffects]),
  ],
})
export class PurchaseHistoryModule {}
