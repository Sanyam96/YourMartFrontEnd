import { ImageService } from './../image.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: number
  product: any
  dataLoaded: boolean = false;
  imagesLoaded: boolean = false;
  images: any[]

  constructor(
    private productService : ProductService,
    private imageService : ImageService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id')
    this.productService.getProductById(this.productId).subscribe(
      (product: any) => {
        this.product = product.data
        this.dataLoaded = true;
      }
    )
    this.imageService.getProductImages(this.productId).subscribe(
      (images: any) => {
        this.images = images.data
        this.imagesLoaded = true
      }
    )
  }

}
