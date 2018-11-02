import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  image: File
  productId : number

  constructor(
    private imageService: ImageService
    // private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
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

}
