import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl: string = "http://localhost:8080/api/v1";

  constructor(private http: HttpClient) { }

  uploadImage(image, productId) {
    const requestUrl = `${this.baseUrl}/product/${productId}/image`
    return this.http.post(requestUrl,image);
  }

  // getProductImages(productId) {
  //   const requestUrl = `${this.baseUrl}/product/${productId}/image`
  //   return this.http.get(requestUrl);
  // }
}
