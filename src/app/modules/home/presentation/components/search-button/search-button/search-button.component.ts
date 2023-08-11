import { Component } from '@angular/core';
import { SearchProductService } from '../../../../../shared/presentation/services/search-product/search-product.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent {
  searchTerm = '';

  constructor(private readonly searchProductService: SearchProductService) {
    this.searchProductService.getSearchTerm().subscribe(term => {
      this.searchTerm = term;
    });
  }

  onSearch(): void {
    this.searchProductService.search(this.searchTerm);
  }
}
