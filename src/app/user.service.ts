import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/api/v1"
  currentUsername = new Subject<string>()
  constructor(private http: HttpClient) { }
   loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url+"/seller/login",user)
  }
   setUsername(username: string) {
    this.currentUsername.next(username)
  }
}
