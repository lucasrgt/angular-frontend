import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './presentation/components/header/header.component';
import { SearchProductComponent } from './presentation/components/search-product/search-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchProductComponent, HeaderComponent],
  imports: [CommonModule, MatIconModule, RouterLink, FormsModule],
  exports: [SearchProductComponent, HeaderComponent],
})
export class SharedModule {}
