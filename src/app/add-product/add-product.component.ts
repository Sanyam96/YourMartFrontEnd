import { Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { 
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
  }

  // saveProduct() {
  //   if(this.productForm.valid) {
  //     console.log(this.productForm.value);
      
  //     this.productService.addProduct(this.productForm.value,10).subscribe((response : any) => {
  //       this.router.navigate(['/product/image'])
        
  //     },(error) => {
  //       console.log(error);
        
  //     })
  //   }
  // }
 }