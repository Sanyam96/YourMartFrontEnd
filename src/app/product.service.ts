import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: String = "http://localhost:8080/api/v1"
  sellerId: number = 1

  constructor(private http: HttpClient) { }

  getProducts(products?: any) {
    const url = `${this.url}/seller/${this.sellerId}/products`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }
}
