import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchProductService } from '../../../shared/presentation/services/search-product/search-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchTerm = '';

  constructor(
    private readonly router: Router,
    private readonly searchProductService: SearchProductService
  ) {
    this.searchProductService
      .getSearchTerm()
      .subscribe(term => (this.searchTerm = term));
  }

  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart']);
  }
}
