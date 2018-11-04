import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup
  productId: string

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute
    ) { 
    this.productForm = this.formBuilder.group({
      productCode: ['', Validators.compose([Validators.required])],
      productName: ['', Validators.compose([Validators.required])],
      shortDescription: ['', Validators.compose([Validators.required])],
      longDescription: ['', Validators.compose([Validators.required])],
      dimensions: ['', Validators.compose([Validators.required])],
      categoryId: ['', Validators.compose([Validators.required])],
      mrp: ['', Validators.compose([Validators.required])],
      ssp: ['', Validators.compose([Validators.required])],
      ymp: ['', Validators.compose([Validators.required])],
      // instruction: ['', Validators.compose([Validators.required])],
      // attributes: ['', Validators.compose([Validators.required])]
      sellerId: localStorage.getItem("SELLERID")
    });
  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')
    if (this.productId != null) {
      this.productService.getProductById(+this.productId).subscribe(
        (product: any) => {
          console.log(product)
          this.productForm.patchValue(product.data)
        }
      )
    }

  }

  saveProduct() {
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      if(this.productId != null) {
        this.productService.updateProduct(this.productForm.value, this.productId).subscribe(
          (response : any) => {
            console.log(response.data.id);
            this.router.navigate(['/home'])
          }
        )
      }
      else {
        this.productService.addProduct(this.productForm.value).subscribe(
          (response : any) => {
            console.log(response.data.id);
            localStorage.setItem("PRODUCTID", response.data.id);
            
            this.router.navigate(['/product/image'])
        },
        (error) => {
          console.log(error);
        })
      }
      }
      
  }
 }