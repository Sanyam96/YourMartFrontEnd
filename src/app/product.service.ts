import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: String = "http://localhost:8080/api/v1"
  sellerId: number = 1
  id = localStorage.getItem("SELLERID");

  constructor(private http: HttpClient) {

  }

  getProducts(searchParam?: string, searchQuery?: string) {

    const url = `${this.url}/seller/${this.id}/products?${searchParam}=${searchQuery}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }

  getProductById(productId) {
    const url = `${this.url}/seller/${this.id}/product/${productId}`

    const httpOptions = {
      headers: new HttpHeaders( {
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url, httpOptions);
  }

  // TODO
  addProduct(product: any) {
    const url = `${this.url}/product`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url,product,httpOptions)
  }

  getCategories() {
    const url = `${this.url}/categories`

    const httpOptions = {
      headers: new HttpHeaders( {
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url, httpOptions);
  }
}
