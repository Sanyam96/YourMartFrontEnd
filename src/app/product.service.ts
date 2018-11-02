import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: String = "http://localhost:8080/api/v1"
  sellerId: number = 1
  id = localStorage.getItem("SELLERID");

  constructor(private http: HttpClient) { }
  getProducts(searchParam?: string, searchQuery?: string) {

    const url = `${this.url}/seller/${this.id}/products?${searchParam}=${searchQuery}`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }
}
