import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core-module/services/product.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  products = []
  sampledata = []
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
    this.getHelpdesk();
  }

  getAllProducts(): void {
    this.productService.getAllPrograms().subscribe(data => {
      this.products = data;
      console.log(data)
    });
  };

  getHelpdesk(): void {
    this.productService.getHelpdesk().subscribe(data => {
      this.sampledata = data;
    });
  };
}
