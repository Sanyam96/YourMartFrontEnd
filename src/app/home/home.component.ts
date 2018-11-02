import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: any

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        console.log(response);
        console.log(response.data[0].id);
        console.log(response.data[1].productName);
        console.log(response.error);
        
      },
      error => {

      }
    )
  }

  

}
