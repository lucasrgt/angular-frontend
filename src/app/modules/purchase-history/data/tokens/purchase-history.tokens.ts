import { InjectionToken } from '@angular/core';
import { PurchaseHistoryLocalDatasource } from '../datasources/purchase-history-local-datasource';
import { PurchaseHistoryRepository } from '../../domain/repositories/purchase-history-repository';

export const PURCHASE_HISTORY_LOCAL_DATASOURCE_TOKEN =
  new InjectionToken<PurchaseHistoryLocalDatasource>(
    'PurchaseHistoryLocalDatasource'
  );

export const PURCHASE_HISTORY_REPOSITORY_TOKEN =
  new InjectionToken<PurchaseHistoryRepository>('PurchaseHistoryRepository');
