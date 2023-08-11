import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseHistoryComponent } from './presentation/pages/purchase-history/purchase-history.component';
import { PurchaseHistoryRoutingModule } from './purchase-history-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { PurchaseHistoryEffects } from './presentation/store/effects/purchase-history.effects';
import { PurchaseHistoryLocalDatasourceImpl } from './data/datasources/purchase-history-local-datasource';
import {
  PURCHASE_HISTORY_LOCAL_DATASOURCE_TOKEN,
  PURCHASE_HISTORY_REPOSITORY_TOKEN,
} from './data/tokens/purchase-history.tokens';
import { PurchaseHistoryRepositoryImpl } from './data/repositories/purchase-history-repository-impl';
import { PurchaseHistoryService } from './presentation/services/purchase-history.service';
import { GetLastOrders } from './domain/usecases/get-last-orders';
import { SaveOrders } from './domain/usecases/save-orders';

@NgModule({
  providers: [
    {
      provide: PURCHASE_HISTORY_LOCAL_DATASOURCE_TOKEN,
      useClass: PurchaseHistoryLocalDatasourceImpl,
    },
    {
      provide: PURCHASE_HISTORY_REPOSITORY_TOKEN,
      useClass: PurchaseHistoryRepositoryImpl,
    },
    GetLastOrders,
    SaveOrders,
    PurchaseHistoryService,
  ],
  declarations: [PurchaseHistoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseHistoryRoutingModule,
    EffectsModule.forFeature([PurchaseHistoryEffects]),
  ],
})
export class PurchaseHistoryModule {}
