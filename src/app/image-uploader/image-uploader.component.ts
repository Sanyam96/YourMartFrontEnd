import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
  
  image : any
  imageForm : FormGroup
  selectedFile: File
  productId : number
  
  constructor(    
    private imageService: ImageService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.imageForm = this.formBuilder.group({
      image: ['', Validators.compose([Validators.required])]
    })
    // this.productId = +this.route.snapshot.paramMap.get('id')
  }

  onFileSeleceted(event) {
    this.image = event.target.files[0];
    console.log(this.image)
  }

  uploadImage() {
    let form = new FormData()
    form.append('image', this.image)
    this.imageService.uploadImage(form, 1).subscribe(
      (response) => {
        console.log(response)
      }
    )

  }
  // console.log(this.imageForm.value);
  // if(this.imageForm.valid) {
  //   console.log(this.imageForm.value);
  //   let fd = new FormData();
  //   fd.append('image',this.selectedFile)
  //   console.log(fd.get("image"));
  //   console.log(fd.getAll('image'));
  // }
}
