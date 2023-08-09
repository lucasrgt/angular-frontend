import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchProductComponent, HeaderComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SearchProductComponent, HeaderComponent],
})
export class SharedModule {}
