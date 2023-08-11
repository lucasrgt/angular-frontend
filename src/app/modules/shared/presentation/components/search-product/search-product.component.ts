import { Component } from '@angular/core';
import { SearchProductService } from '../../services/search-product/search-product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent {
  searchTerm = '';

  constructor(private readonly searchProductService: SearchProductService) {}

  onSearch(): void {
    this.searchProductService.search(this.searchTerm);
  }

  onSearchTermChange(): void {
    this.searchProductService.setSearchTerm(this.searchTerm);
  }
}
