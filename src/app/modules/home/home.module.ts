import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './presentation/pages/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { SearchButtonComponent } from './presentation/components/search-button/search-button/search-button.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, SearchButtonComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
