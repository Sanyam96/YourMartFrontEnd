import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any
  dropdownHeading : string = 'productName'
  sortParameter: string = null;
  sortBy: string

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data;
        console.log(response);
        // console.log(response.data[0].id);
        // console.log(response.data[1].productName);
        console.log(response.error);
        
      },
      error => {

      }
    )
  }

  searchProducts(searchQuery) {
    console.log(searchQuery);
    console.log(this.dropdownHeading);
    
    this.productService.getProducts(this.dropdownHeading,searchQuery, this.sortParameter).subscribe( 
      (response: any) => {
      this.products = response.data;
    })
    
  }

  setSearchKey(key) {
    this.dropdownHeading = key
  }

  setSortBy(key) {
    this.sortParameter = key;
  }

  

}
