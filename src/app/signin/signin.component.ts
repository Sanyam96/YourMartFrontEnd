import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Subject } from '../../../node_modules/rxjs';
import { HttpHeaders } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  password: string
  email: string
  signinForm: FormGroup
  currentUsername = new Subject<string>()

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    this.signinForm = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  loginUser() {

    if(this.signinForm.valid) {
      console.log(this.signinForm.value);
      
      this.userService.loginUser(this.signinForm.value).subscribe((response : any) => {
        localStorage.setItem("SELLERID", response.sellerId);
        // localStorage.setItem("token",response.token);
        console.log(response);
        this.userService.setUsername(response.username);
        console.log(response.username);
        // console.log("Token: "+response.user.token);

        if(response.data !== "false") {
          this.router.navigate(['/'])
        }
        else if(response.data === "false") {
          console.log("Error Login")
        }
      })
    }
  }
   setUsername(username: string) {
    this.currentUsername.next(username)
  }
   // getCurrentUser(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'authorization': 'Token '+ localStorage.getItem('token')
  //     })
  //   };
  //   return this.http.get(this.currentUserUrl,httpOptions);
  // }

}
